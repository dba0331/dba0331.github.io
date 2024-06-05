---
# title: 不良用法-OR类似
sidebar_class_name: my_nop_item
---
#

## 原执行计划
```sql
-- 语句类似于
select 
    case t1.id when '1000' then t2.xid
    else t3.xid
    end as xid,
    ...
from t1, t2, t3
where ...
```
这会导致t2和t3走全表扫描

## 优化建议


