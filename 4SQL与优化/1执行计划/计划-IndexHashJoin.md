---
sidebar_position: 5
---

#

## 说明
IndexHashJoin 和 IndexJoin差不多。  

某些特殊情况可能会占用特别大的内存, 比如驱动表几条几十条记录, 命中被驱动表几十万条的记录, 则tikv可能会一次性发送几十万条记录到tidb, 超过sql内存限制或是其它系统参数限制。

indexjoin也有类似问题。

v5.4上一些版本有bug, (indexHashJoin + Limit)可能会导致
-   sql内存偏高
-   sql hang, 连接池满




