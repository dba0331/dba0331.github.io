---
# sidebar_position: 1
---
回表135万慢
![insert案例](../img/索引回表2.jpg)
主要是 `tikv_task{proc max:10.5s` , 应该是当时tikv cpu比较忙。
:::tip
个人经验是 `tikv_task{proc max:用时}` 中的max超过1秒, 可怀疑tikv当时比较繁忙。
:::

同样是索引回表, 有快的
![insert案例](../img/索引回表1.jpg)
此时tikv应该比较正常。
