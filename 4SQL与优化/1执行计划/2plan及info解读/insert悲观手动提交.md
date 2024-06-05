---
sidebar_position: 6
---
#

insert语句, 插入10万行  


执行计划  
![insert案例](./img/insert悲观手动提交.jpg)
有lock动作, 所以是悲观事务。   
无commit信息, 所以是手动提交(后面提交, 用了几十秒)。

非聚簇, PK, 三个key

好象10万行和keys 22万, 对不上










