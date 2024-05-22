---
# sidebar_position: 1
---
## 说明

这是有可能的, 一般发生在并发跑多个lightning物理导入脚本时。

主要处理办法:
-   每个lightning进程配置自己的metadata库;
-   在task_meta中插入一行特殊的状态值, 防止表被删除, 这个办法不推荐;

