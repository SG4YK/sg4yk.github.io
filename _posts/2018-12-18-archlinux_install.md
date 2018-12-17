---
layout: post
title: 'ArchLinux安装记录'
subtitle: '更新中'
date: 2018-12-18
categories: 'Tech'
tags: 'Linux'
---
NOTE:本文适用于物理机安装，虚拟机安装请勿照搬

---
*在众多的Linux发行版之中，我认为ArchLinux毫无疑问是最具有魅力的一个。很多人可能会因为觉得安装过程过于复杂而选择放弃，但ArchLinux拥有地表最强的软件仓库AUR为日后的使用带来了极大的便利，安装的过程也能使初学者对Linux有更加细致的认知（比起其他默认使用图形界面安装的发行版）。*  
  
*如果你认为你并不想折腾但又想获得与ArchLinux相似的体验，我推荐你使用[Manjaro](https://manjaro.org/) ，它有许多与ArchLinux相似的特性（比如AUR），安装起来也十分简单，并且官方提供了三种不同的桌面环境。*

如果你按照本文在安装时遇到问题，请首先阅读[ArchWiki](https://wiki.archlinux.org/) 。它比你想象中还要强大。

# 1.准备阶段
 + 一台RAM大于512MB的电脑
 + 良好的网络连接，有线网最佳
 + 一个1GB以上的USB存储器
 + 作死的心
 
 在 [这里](https://www.archlinux.org/download/)  下载最新的镜像，并且将其刷入你的USB存储器中。  
 推荐使用[Rufus](https://www.archlinux.org/download/) 进行刷入。选择对应的USB设备和你下载好的ArchLinux镜像，Partrition Scheme选择GTP, Target System选择UEFI，其他选项保持默认。点击Start后会询问以何种模式刷入，选择DD Mode。
 
# 2.分区
分区是个技术活，毕竟数据无价。  
在进行下面的操作之前请务必将你宝贵的数据进行**备份！备份！备份！**  
如果在安装ArchLinux之前你的硬盘上已经有其他的OS了（比如Windows）,那么我强烈建议你使用带有图形界面的工具进行分区操作。比如[DiskGenius](https://www.diskgenius.com/) 。

+ **分区方案**   
本文的情况是在已有Windows系统的情况下安装双系统，考虑到以后并太多没有更改分区大小的需求，音乐、视频等较大的文件放在仓库盘中可以与Windows共用，所以Linux分区总大小约为256GB。  
选择了最简单的分区方案，如下：  
   
     
*...未完待续*
