---
sidebar_position: 2
title: 谈热点1-region分布
---
示意图

import TopicSvg from '/src/components/TopicSvg';

<TopicSvg>/img/3表和对象管理/隐式ID与AutoID/谈热点1-region分布.svg</TopicSvg>

## 说明

## 检索(谈热点1-region分布)
<details>
<summary>used by local search</summary>
<div>
以 noncluster 表为例,, 每天批量插入100万条数据, (业务又经常按天查数据), 表region是否有热点, 主键region是否有热点, 表shard, 表没有shard, 读写不同region, 表没热点, 读写同一region, 表有热点, auto_increment, PK的id分配, 读写不同region, PK没热点, 读写同一region, PK有热点, 分散的PK, 自增PK, tidb-1节点, 1-30000, tidb-2节点, 30000-60000, ..., 虽然每个tidb节点的id范围不同,, 但这不同于random或雪花id,, 本质上认为id还是未打散的
</div></details>