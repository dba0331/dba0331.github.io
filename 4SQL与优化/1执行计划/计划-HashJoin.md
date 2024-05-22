---
sidebar_position: 4
---

只能用于等值连接而不是 > < ？
    还是可用HashJoin, 这是最基本的一个算子

基本原理
    选择一个 Inner 表来构造 HashTab
    对 Outer 表的每一行数据都去这个 HashTab 中查找是否有匹配的数据

推论
    对于A left join B, 由于需要检查A中每一条记录, 因此只能由B构造 HashTab
    由上一条, 这里不说大表小表, 而是说Outer(驱动)表, Inner表(构造哈希)

推论
    A left B中, 经常B会全表扫描作为HashTab

**semi join时, 左表也是Outer**

在explain中显示的 build/probe, 不是说build就是build HashTab, 有可能build是Outer

hint不生效时，用这个试一下？
LEFT JOIN /*+ hash_join(T9) */ T9 ON T.CUST_ID = T9.CUST_ID


## hash join实现

TiDB 源码阅读系列文章（九）Hash Join
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

一个优化, 在v6.1.5中就改进了, build为0时, probe就提前中止。



v6.3.0 new hints 指定 Hash join 的 build && probe 端： HASH_JOIN_BUILD 和 HASH_JOIN_PROBE。这样可以选定较小的表作为 build 端。










