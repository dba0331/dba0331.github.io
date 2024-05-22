---
sidebar_position: 6
---

和indexHashJoin的区别

IndexHashJoin 全称是 Index Nested Loop Hash Join，与 Index Nested Loop Join 的使用条件完全一样，两者的区别是
    IndexJoin会在连接的内表上建哈希表，对于内存的使用是有固定上限的，
    IndexHashJoin会在连接的外表上建哈希表，使用的内存使用取决于内表匹配到的行数。

## hash的问题
还是没看懂, inl在内表上建哈希表? 
    一般是小表驱动大表, 大表建hash, 不是代价更大?
    另外，建hash的目的是什么

## 常见的解读
先不说hash问题，看一个最常见的 A IndexJoin B
IndexJoin                                 inner join, inner:IndexReader_3, outkey:A.id, innkey:B
    TableReadder
        TableFullScan    table:A 小表
    IndexReader_3(Probe)
        IndexRangeScan_4 table:B 大表,索引  range:decided by [eq(A.id, B.id)] 索引过滤
这里A（外表）取一条记录，去索引访问B, 所以Build不一定就是内表

换成IndexHashJoin，上面执行的过程也一样。

## hint用法

**注意, inl_join(t1, t3) 在t1,t2,t3时不一定生效, 要leading(t1,t3) inl_join(t1, t3)**

## v616中estRows估算偏大 (导致走了hashjoin?)
2、在 v6.1.6 版本 index join 的 inner 端 estRows 估算偏差较大也是已知问题 https://github.com/pingcap/tidb/issues/44802
在 nightly 版本已经修复，可以通过 set @@tidb_opt_fix_control = '44855:ON';


v6.1.5 版本，执行计划在 indexjoin 和 hashjoin 选择上的差异导致执行时间相差几百倍。hint 强制走 indexjoin 后效果符合预期。
客户有几万个相似的慢 SQL ，都做 hint 工作量巨大，但是查询条件差异也无法做 binding .
目前在 v6.5.2 版本上测试，开启 tidb_cost_model_version = 2 后，略有所改善，但还是有大部分不能选择正确的执行计划



## 对inl及build/probe的解读

(1) inner连接
如果ta join tb, 则inl_join(x)中可任意
    比如inl(b), 则ta中每一条去查tb: index range decide by eq(ta.id, tb.id)


(2) outer连接, 一般 hashjoin, 这里改为inl
select /*+ inl_join(tb) */ ta.* from ta 
left join tb
    on ta.id = tb.id  and tb.name = tb.name

IndexJoin                                   left outer join, inner:IndexLookUp10, outer key:ta.id, 
    TableReader (build)   外表
        TableFullScan           ta
    IndexLookUp10 (probe) 内表
        Selection                           not(isnull(tb.id))
            IndexRangeScan      tb,idx_tb   range: decided by **eq(tb.id, ta.id)**
        Selection                           not(isnull(tb.name))
            TableRowIDScan      tb
从上面可以看出, 每次 内表 IndexLookUp10 (probe)的过滤参数是从 build中取得的 ta.id

(3) outer连接, 指定外表为inl, 在逻辑上无意义
inl_join(ta)  ta left join tb
probe ta时由tb.id传入条件? 逻辑上只能用ta.id去查tb.id是否存在
也就是outer join时, 内表是固定的

(4) outer连接但等价于inner的情况, 可以用inl
ta left join tb
    on ta.id = tb.id
    and tb.name='xxx'  --还是右表

ta left join tb
    on ta.id = tb.id
where tb.name='xxx'  --含义变了, 等同 inner join

(5) semi join **这个的计划变化大**

select  ta.* from ta where exists(select  1 from tb where ta.id = tb.id)
默认是HashJoin, 速度挺快

select /*+ inl_join(tb@q2) */ ta.* from ta where exists(select /*+ QB_NAME(q2) */ 1 from tb where ta.id = tb.id)

IndexJoin                   semi join, inner:IndexReader(tb idx by ta.id), outer key:ta.id
    TableReader build (ta)
    IndexReader probe (tb)
这个效果，和no_decorrelate带来的Apply(tb loop会变多, 时间也慢一些), 还是有一些区别



## indexjoin内表估算偏小的问题

 indexjoin导致region热点 tikv cpu满

对内表 ii 的行数估算出现了偏差，estRows 是 1，但 actRows 是 2530。
Index join inner side 估算误差是一个已知问题。
具体来说，index join inner side 的 estRows 估算其实是反推出来的，
以这个为例子，总共 inner join 完的行数是 709，然后驱动表 ppr 的行数是 4958，
    那么匹配驱动表 ppr 一行需要扫内表 ii 709 / 4958= 0.14 行，
    然后除以 Selection_460 eq(tof_inventory.inventory.product_line_code, "PL002") 的选择率（由下图的本地复现得到：23917.30 / 258129.00 = 0.09），
    最后得到 IndexRangeScan_458 的 estRows 为 0.14 / 0.09 = 1.5 取整以后是 1 行。


