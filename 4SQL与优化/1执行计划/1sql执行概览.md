---
sidebar_position: 1
title: sql执行概览
---
示意图

import TopicSvg from '/src/components/TopicSvg';

<TopicSvg>/img/4SQL与优化/1执行计划/1sql执行概览.svg</TopicSvg>

## 说明

...待续

## 检索用词(sql执行概览)

<details>
<summary>used by local search</summary>
<div>
统计信息不准 -> sql计划差 , sql计划差 -> sql执行慢 , tikv配置不足 -> apply pool cpu高 , apply pool cpu高 -> grpc用时高 , grpc用时高 -> sql执行慢 , 大表全表扫描 -> sql执行慢 , 大表全表扫描 -> 网络延迟高 , 网络延迟高 -> grpc用时高 , sql计划 -> 优化器已知不足 , sql计划 -> 表关联 , sql计划 -> 指定hint , 优化器已知不足 -> 谓词条件不传播 , 优化器已知不足 -> 高估内表条数 , 高估内表条数 -> HashJoin , HashJoin -> 大表全表扫描 , 表关联 -> HashJoin , 表关联 -> Apply标量子查询 , 表关联 -> IndexJoin , 表关联 -> 不能IndexJoin , 指定hint -> 表关联的hint , Apply标量子查询 -> 外表记录多 , Apply标量子查询 -> 外表记录少 , IndexJoin -> 外表记录多 , IndexJoin -> 外表记录少 , 不能IndexJoin -> HashJoin , 外表记录多 -> sql执行慢 , 外表记录少 -> sql执行正常 , sql调整 -> 指定hint , sql调整 -> 手工改写 , sql调整 -> 绑定plan , 表关联的hint -> 提示inl_join , 表关联的hint -> 提示hash_join , 提示inl_join -> IndexJoin , 提示inl_join -> 不能IndexJoin , 提示hash_join -> HashJoin , 外表大时HashJoin -> sql执行正常 , 外表是大表 -> HashJoin , 外表是大表 -> 提示\nsemi_join_rewrite , 外表是小表 -> IndexJoin , 提示semi_join_rewrite -> IndexJoin , 
</div>
</details>
















