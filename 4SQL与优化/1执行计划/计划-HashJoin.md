---
sidebar_position: 4
---
#

![hashjoin](./img/hashjoin.jpg)

```sql
-- 语句类似如下, 
select t.*, v.* from t, v
where t.val = v.id
and t.col='xxxx'
```

基本原理:
-   把T和V两个表都读到内存 (实际上不需要全部提前读到内存, 这里简化了)
-   根据关联条件, 在内存中筛选两表中符合条件的记录


:::tip
HashJoin的主要问题, 是对大表不友好, 大表的数据可能要全表扫描一遍。
:::

## 说明
HasjJoin只能用于等值连接而不是 > < 吗？  
>不限制, 这是最基本的一个关联方式。


另外
>(1)对于A left join B, 由于需要检查A中每一条记录, 因此只能由B构造 HashTable。  
>(2)一般不说大表小表, 而是说Outer(驱动, probe)表, Inner表(构造哈希, build)。  
>(3)对于exists/in等semi join, 优化器可能改写为left join, 则主表也是Outer。

(有没有可能build是Outer的情况?)


## hash join实现

《TiDB 源码阅读系列文章（九）Hash Join》  
https://cn.pingcap.com/blog/tidb-source-code-reading-9

```
主要线程:
    Main Thread，一个，执行下列任务：
        读取所有的 Inner 表数据；
        根据 Inner 表数据构造哈希表；
        启动 Outer Fetcher 和 Join Worker 开始后台工作，生成 Join 结果，各个 goroutine 的启动过程由 fetchOuterAndProbeHashTable 这个函数完成；
        将 Join Worker 计算出的 Join 结果返回给 NextChunk接口的调用方法。
    Outer Fetcher，一个，负责读取 Outer 表的数据并分发给各个 Join Worker；
    Join Worker，多个，负责查哈希表、Join 匹配的 Inner 和 Outer 表的数据，并把结果传递给 Main Thread。
```

## 其它
一个优化, 在v6.1.5中就改进了, build为0时, probe就提前中止。


v6.3.0 new hints 指定 Hash join 的 build && probe 端： 
>HASH_JOIN_BUILD 和 HASH_JOIN_PROBE。

这样可以选定较小的表作为 build 端。










