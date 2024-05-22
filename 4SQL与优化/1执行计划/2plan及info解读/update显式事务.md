---
# sidebar_position: 1
---
update语句, 修改了266095行  
update X inner join (...)  set x=...  

执行计划  
![insert案例](./img/update显式事务.jpg)

没有commit信息, 所以是显式事务, 不自动提交事务 
-   没看到上锁的用时, 不知道是乐观还是悲观(乐观不会上锁)
-   时间都用在查询上, 1分钟7秒



















