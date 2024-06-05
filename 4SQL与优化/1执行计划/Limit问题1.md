---
sidebar_position: 11
---
带limit的计划
![带limit](./img/Limit问题1-1.jpg)
```sql
select ... from a, b
where ...
limit 200;
```

不带limit的计划   
![带limit](./img/Limit问题1-2.jpg)


## 分析

带limit, 则优化器会用结果集200, 来倒推表的estRows, 这里是估算错了。  
不带limit, 则处理正确。














