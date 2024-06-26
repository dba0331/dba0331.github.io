---
# title: 
---
## 场景

可能大部分读者打开《不走IndexJoin》系列的一个常见原因是
>为什么两个表关联, 明明是小表驱动大表, 走IndexJoin更合理, 优化器却走了HashJoin?  
>使用HashJoin, 则其中一个大表只能走全表或全索引扫描, SQL慢了几个数量级。

也就是说, 优化器为什么不走IndexJoin?

## 基本逻辑
优化器选择表关联的方式, 是先计算不同方式下的cost代价, 然后选择一个代价小的。

比如对于 A Join B, HashJoin代价是
> read(A) + read(B, 全表访问) + Join(A,B)  

IndexJoin代价是
> read(A) 结果行数 * read(B, 索引访问) + Join(A, B)

理论上遇到下面情况, IndexJoin的代价会比较大:
-   read(A)结果行数很多，比如几万条以上
-   read(B, 索引访问) 代价大于 read(B, 全表访问), 比如索引访问行数超过表总数10%

通俗点说就是以下几个情况的分类:
-   小表(几十条) IndexJoin 大表(几百万以上), 大表走索引, 效率很高;
-   小表(几十条) HashJoin 大表(几百万以上), 大表全表扫描, 效率低;
-   中表(几万以上) IndexJoin 大表(几百万以上), 循环次数太多, 效率低;
-   中表(几万以上) HashJoin 大表 (几百万以上), 大表全表扫描, 有时候更快;

## IndexJoin的要求
对上面第一个情况, 都希望能使用IndexJoin, 但有些前提条件。  
本系列就是讲解不走IndexJoin的各种原因。

...待续