---
sidebar_position: 8
title: 分析TxnLockNotFound
---
示意图

import TopicSvg from '/src/components/TopicSvg';

<TopicSvg>/img/4SQL与优化/3事务和锁/分析TxnLockNotFound.svg</TopicSvg>

#

## 说明
TxnLockNotFound是因为上锁之后, 过了较长时间才提交, 然后发现锁被清理了。

也就是以下的正常流程被打破了:
-   对悲观事务来说, 修改数据时就上锁了, 正常情况下会不断续约TTL, 锁不会被清理；
-   对乐观事务来说, 修改数据不上锁, 在2PC提交时prewrite上完锁就提交, 锁不会被清理；


锁的初始TTL值的定义 (单位毫秒)
```go title="https://github.com/tikv/client-go/blob/master/txnkv/transaction/2pc.go#L770"
var defaultLockTTL uint64 = 3000
```

通常原因与当时系统性能相关。

<br/>

## FAQ
其它会话的读操作为什么要清我的锁, 不是有mvcc吗?

其它会话的写操作不是应该被阻塞吗, 为什么把别人的锁干掉?

<br/>

## 检索用词(分析TxnLockNotFound)

<details>
<summary>used by local search</summary>
<div>
TxnLockNotFound txn lock not found -> 隐式事务、load data\nstart与commit ts才差几秒\n有时系统负载也不高 , TxnLockNotFound txn lock not found -> 悲观并发批处理\n系统负载一般较大 , 隐式事务、load data\nstart与commit ts才差几秒\n有时系统负载也不高 -> 并发commit太多而阻塞 , 隐式事务、load data\nstart与commit ts才差几秒\n有时系统负载也不高 -> 乐观或悲观事务\nTTL超出就会被清锁 , 悲观并发批处理\n系统负载一般较大 -> 系统慢、硬件慢\nserver is busy\n触发流控 , 悲观并发批处理\n系统负载一般较大 -> 乐观或悲观事务\nTTL超出就会被清锁 , 并发commit太多而阻塞 -> 建议 调大commit并发参数\n(效果有限) , 系统慢、硬件慢, server is busy, 触发流控 -> 建议 找出性能的瓶颈并优化 , 乐观或悲观事务\nTTL超出就会被清锁 -> 为什么有时TTL值只有几秒 , 为什么有时TTL值只有几秒 -> 为什么从prewrite到\ncommit的时间久(超出TTL) , 为什么有时TTL值只有几秒 -> TTL值不是固定的\n和事务大小相关 , 为什么从prewrite到\ncommit的时间久(超出TTL) -> 并发commit太多而阻塞 , 为什么从prewrite到\ncommit的时间久(超出TTL) -> 系统慢、硬件慢\nserver is busy\n触发流控 , 为什么从prewrite到\ncommit的时间久(超出TTL) -> prewrite处理key多 , prewrite处理key多 -> 建议 减小处理线程每批的量 , 建议 减小处理线程每批的量 -> 锁的生命期TTL的值 , 锁的生命期TTL的值 , PessimisticLockNotFound , 
</div></details>