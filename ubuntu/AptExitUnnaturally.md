# apt exit unatually and some thing is locked

在ubuntu系统的termial下，用apt-get install 安装软件的时候，如果在未完成下载的情况下将terminal close。此时 apt-get进程可能没有结束。结果，如果再次运行apt-get install 命令安装如今，可能会发生下面的提示：

```sh
# 无法获得锁 /var/lib/dpkg/lock - open (11: 资源暂时不可用)
# 无法锁定管理目录(/var/lib/dpkg/)，是否有其他进程正占用它？
```

## 解决办法如下：

1. 终端输入 ps  aux ，列出进程。找到含有apt-get的进程，直接sudo kill PID。

	* `killall apt`


2. 强制解锁,命令

```sh
sudo rm /var/cache/apt/archives/lock
sudo rm /var/lib/dpkg/lock
```

https://blog.csdn.net/weixin_38763994/article/details/80289917


