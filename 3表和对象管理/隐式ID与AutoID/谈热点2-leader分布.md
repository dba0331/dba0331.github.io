---
sidebar_position: 3
title: 谈热点2-leader分布
---
示意图

import TopicSvg from '/src/components/TopicSvg';

<TopicSvg>/img/3表和对象管理/隐式ID与AutoID/谈热点2-leader分布.svg</TopicSvg>

#

## 说明

## 检索(谈热点2-leader分布)
<details>
<summary>used by local search</summary>
<div>
leader在各tikv分布不均, 可能导致某个tikv成为热点, 导致这tikv cpu高, sql慢, 实际发生的概率较高, select emp.* from dept a, emp b where a.xid='RD', and a.emp_id = b.emp_id and b.age = 30, 导致这个tikv cpu高, 不过实际发生的概率不大, 新创建的大表, 表region的leader, 可能集中在某个tikv, 索引region的leader, 可能集中在某个tikv, IndexJoin, ├─dept取得RD部门10万个emp_id, └─IndexLookup, 　├─emp索引读取10万个emp_id, 　└─emp回表&过滤, dept通过xid索引读10万个emp_id很快;, 问题在emp索引读10万个离散的emp_id, 如果emp_id索引的leader集中在某个tikv, tikv cpu上升, cop_wait高涨, sql变慢,
一个场景, 假设企业有300万人(RD有10万)
</div></details>