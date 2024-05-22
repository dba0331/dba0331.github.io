---
sidebar_position: 5
---

## indexHashJoin 占用内存而 omqc

可能是一次性取17万条记录到tidb, 超过1G了


indexjoin也有类似问题

v5.4上 indexHashJoin + Limit会导致sql hang

连接池满













