---
# sidebar_position: 1
---
#
done的下一个状态是sync, 表示完成。  

ddl操作可能已经完成了一部分（如果是truncate, 可能表的数据已经清空），不过被其它事务阻塞，所以转换不到sync状态。

用以下几个办法来确认是否被事务阻塞:
-   查询视图 mysql.tidb_mdl_view, 这个比较慢, 可能要一分钟, 且有时候内容为空;
-   查询information_schema.cluster_tidb_trx的related_table_ids列, 看ddl的表是否在其中;
-   查询tidb.log, 看有没有提示old trx block ddl之类;

相关链接  
[事务和锁->主锁副锁meta锁mdl锁](../../4SQL与优化/3事务和锁/6主锁副锁meta锁mdl锁.md)  
[事务和锁->常见误解](../../4SQL与优化/3事务和锁/10常见误解.md)  
[语句优化->案例 DDL慢](../../4SQL与优化/2语句优化/案例/典型-DDL慢-mdl锁.md)















