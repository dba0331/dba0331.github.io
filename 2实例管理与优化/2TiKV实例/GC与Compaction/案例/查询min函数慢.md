---
sidebar_position: 1
title: 查询min函数慢
---
示意图

import TopicSvg from '/src/components/TopicSvg';

<TopicSvg>/img/2实例管理与优化/2TiKV实例/GC与Compaction/案例/查询min函数慢.svg </TopicSvg>


## 说明


## 检索用词(查询min函数慢)
<details>
<summary>used by local search</summary>
<div>
dt有索引, tidb内部把min改写为:
   select t order by dt limit 1
理论上tikv只读取有效的第一条,, 但tikv从索引头部扫描起,, 需要跳过5000万条mvcc数据,, sql执行信息中的skip count有记录, 变成mvcc数据, 保留在表中, compaction, _filter参数?, 保留时间超出gc life, delete的数据, 真正从磁盘抹去, delete数据, 由rocksdb在, compaction时, 一起清理, 默认true, gc worker, 标记为tomestone, false, 理论回顾, 案例, 然后查询, 花了一分钟, select min(dt) from t, 解决办法, 清理的时间提前, 或查询时刻延后, select min(dt) from t, 此时dt索引头部没有mvcc数据, 查询min只需读索引第一个region, 就大概率能取得有效数据,
先清理30天前数据5千万条
`delete t where dt<30天前`
</div></details>




