---
layout: post
title: 'ArchLinux Installation Guide'
subtitle: '更新中'
date: 2019-01-23
categories: 'Tech'
tags: 'Linux'
cover: '/assets/img/post/2018/12/DKucDZrVAAAPMDE.jpg'
---

>在众多的Linux发行版之中，我认为ArchLinux毫无疑问是最具有魅力的一个。很多人可能会因为觉得安装过程过于复杂而选择放弃，但ArchLinux拥有地表最强的软件仓库AUR为日后的使用带来了极大的便利，安装的过程也能使初学者对Linux有更加细致的认知（比起其他默认使用图形界面安装的发行版）。<br>如果你认为你并不想折腾但又想获得与ArchLinux相似的体验，我推荐你使用[Manjaro](https://manjaro.org/) ，它有许多与ArchLinux相似的特性（比如AUR），安装起来也十分简单，并且官方提供了三种不同的桌面环境。

如果你按照本文在安装时遇到问题，请首先阅读[ArchWiki](https://wiki.archlinux.org/) 。它比你想象中还要强大。
本文在于~~<del style="color: #b6b6b6">为了让这个什么都没有的博客看起来没那么空虚</del>~~提供一篇~~<del style="color: #b6b6b6">费话连篇</del>~~简单易懂的中文教程，帮助小白也能顺利装上ArchLinux以及解决一些安装后可能出现的问题。  

<p style="text-align:center;font-size:20px;"><b>执行任何命令之前务必检查一遍<br/>切忌无脑复制</b></p>


	
# 1 准备阶段
 + 一台RAM大于512MB的搭载了Windows的电脑
 + 良好的网络连接，有线网最佳
 + 一个容量1GB以上的USB存储器

 在 [这里](https://www.archlinux.org/download/)  下载最新的镜像，并且将其刷入你的USB存储器中。  
本人推荐使用[Rufus]() 进行刷入。选择对应的USB设备和你下载好的ArchLinux镜像，Partrition Scheme选择GTP, Target System选择UEFI，其他选项保持默认。点击Start后会询问以何种模式刷入，选择DD Mode。

# 2 分区
分区是个危险的工作，数据无价。  
在进行下面的操作之前请务必将你宝贵的数据进行**备份！备份！备份！**  
强烈建议你使用带有图形界面的工具进行分区操作，比如[DiskGenius](https://www.diskgenius.com/) 。不要作死跑去用CLI。

本文的情况是在已有Windows系统的情况下安装双系统，考虑到以后并太多没有更改分区大小的需求，音乐、视频等较大的文件放在仓库盘中可以与Windows共用，所以Linux分区总大小约为256GB。  
选择了最简单的分区方案，如下：  

~~~text
/            #根目录分区    256GB
swap         #交换分区      8GB
/boot/efi    #引导分区      128MB
~~~
DiskGenius的分区操作十分简单，这里就不介绍了。
需要注意的地方：
+ 分区表：gpt
+ 4K对齐
+ 分区类型：逻辑分区
+ 格式NTFS

>tips1:如果你认为你的物理内存足够充裕，那么你可以选择不使用交换分区<br>tips2：如果你拥有多块硬盘，可以考虑把根目录下常用的目录（如/home或者/usr）等单独在不同的硬盘上分配空间，可以提高系统的运行速度。当然，你也可以使用RAID。



# 3 基础安装

### 3.1 启动
+ 在Windows的控制面板把 快速启动 关闭。
+ 将你制作好的USB储存器插入电脑，并重新启动。
+ 进入你的BIOS设置，把SecureBoot关掉。
+ 引导方式设置为UEFI
+ 调整好BIOS的Boot Sequence,把你的USB设备放在第一位。
+ 按F10保存BIOS设置并且重启。
然后你会看到以下引导画面，选择第一项即可
![](/assets/img/post/2019/01/Screenshot_20190123_004604.png )  

进入系统后，首先同步时间
~~~bash
$ timedatectl set-ntp true
~~~

### 3.2 格式化分区

由于你在Windows下已经配置好分区大小了，所以接下来只需进行格式化即可。
首先列出你硬盘上的所有分区
~~~bash
$ fdisk -l

Disk /dev/sda: 931.5 GiB, 1000204886016 bytes, 1953525168 sectors
Disk model: HGST HTS721010A9
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: gpt
Disk identifier: XXXXXXX-XXXXXXXX-XXXX-XXXXXXXXXXX

Device       Start        End    Sectors   Size Type
/dev/sda1     2048    1023999    1021952   499M Windows recovery environment
/dev/sda2  1226752 1953521663 1952294912 930.9G Microsoft basic data


Disk /dev/sdb: 931.5 GiB, 1000204886016 bytes, 1953525168 sectors
Disk model: Samsung SSD 860 
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: XXXXXXX-XXXXXXXX-XXXX-XXXXXXXXXXX

Device          Start        End    Sectors   Size Type
/dev/sdb1        4096     266239     262144   128M Microsoft reserved
/dev/sdb2      266240 1397751807 1397485568 666.4G Microsoft basic data
/dev/sdb3  1397751808 1398921215    1169408   571M Microsoft basic data
/dev/sdb4  1399857152 1936736255  536879104   256G Microsoft basic data
/dev/sdb5  1936736256 1953525134   16788879     8G Microsoft basic data
/dev/sdb6  1398921216 1399857151     935936   128M Microsoft basic data
~~~
找到Type为Microsoft Basic Data的分区，根据大小来判断你之前创建要用于Linux的分区。比如
~~~text~~~~
/dev/sdb4    ->    /            #根目录分区    256GB
/dev/sdb5    ->    swap         #交换分区      8GB
/dev/sdb6    ->    /boot/efi    #引导分区      128MB
~~~
>注意这里的<code>/dev/sdxY</code>因设备而异，下面的代码请将分区设备修改为自己电脑的，勿直接照搬。

 依次格式化三个分区，遇到提示输入y并且回车即可。

~~~bash
$ mkfs.ext4 /dev/sdb4
$ mkswap /dev/sdb5
$ swapon /dev/sdb5
$ mkfs.vfat -F32 /dev/sdb6
~~~

用cfdisk确认分区状态
~~~bash
$ cfdisk /dev/sdb
~~~
<code>/dev/sdb4</code>,<code>/dev/sdb5</code>,<code>/dev/sdb6</code>对应的Filesystem分别为<code>ext4</code>,<code>swap</code>,<code>vfat</code>  
确认无误后选择quit退出cfdisk。

### 3.3 挂载分区
首先挂载主分区
~~~bash
$ mount /dev/sdb4 /mnt
~~~
在主分区下创建EFI分区的挂载点
~~~bash
$ mkdir /mnt/boot
$ mkdir /mnt/boot/efi
~~~
挂载EFI分区
~~~bash
$ mount /dev/sdb6 /mnt/boot/efi
~~~

### 3.4 网络
测试是否有网络连接
~~~bash
$ ping archlinux.org
~~~
如果没有的话，尝试重启相关服务
~~~bash
$ systemctl restart dhcpcd
$ systcmctl restart netctl
~~~
如果你使用的是wifi,
~~~bash
$ wifi-menu
~~~
然后你会看到以下画面
![](/assets/img/post/2019/01/Screenshot_20190123_003727.png )
从中选择对应的wifi并连接即可。

### 3.5 配置镜像源
由于众所周知的原因，中国大陆访问外国的镜像源的速度十分差劲。为了节省安装时间，首先要配置镜像源。对于中国大陆的用户，清华大学开源软件镜像站的速度十分不错。
~~~bash
$ nano /etc/pacman.d/mirrorlist
~~~
ctrl+W,搜索<code>tsinghua</code>
![](/assets/img/post/2019/01/Screenshot_20190123_012611.png )
将光标移动至<code >Server = http://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch</code>这一行，ctrl+K剪切，回到文档顶端ctrl+U粘贴。ctrl+O和Enter保存文件，ctrl+X退出编辑。  
然后同步镜像源
~~~bash
$ pacman -Syy
~~~
### 3.6 安装基本系统
~~~bash
$ pacstrap /mnt base base-devel
~~~
出现提示全部按Enter即可。然后耐心等待安装完成。
安装完成后
~~~bash
$ genfstab -U /mnt >> /mnt/etc/fstab
~~~
生成fstab文件。  
进入chroot环境  
~~~bash
$ arch-chroot /mnt
~~~

### 3.7 时间与地区
设置时区
~~~bash
$ ln -sf /usr/share/zoneinfo/Asia/Shanghai/localtime
$ hwclock --systohc
~~~
如果你不在东八区，将<code>/Asia/Shanghai/</code>换成你所在时区的城市。
编辑locale配置
~~~bash
$ nano /etc/locale.gen
~~~
找到<code>en_US.UTF-8</code>，将前面的注释去掉。
如果你有其他常用的语言（比如<code>zh_CN.UTF-8</code>，也将其找到并把注释去掉。同一种语言可能包含不同的编码，选择UTF-8编码。
保存文件并且退出。  

生成locale
~~~bash
$ locale-gen
~~~
设置系统语言
~~~bash
$ nano /etc/locale.conf
~~~
输入<code>LANG=en_US.UTF-8</code>并保存。
![](/assets/img/post/2019/01/Screenshot_20190123_025032.png )
>在这个步骤**不要**将语言设置为其他（比如简体中文<code>zh_CN.UTF-8</code>)，你可以在安装图形界面之后再更改语言，在没有图形界面的情况下是无法显示非ASCII字符的。

### 3.8 Hostname

创建hostname
~~~bash
$ nano /etc/hostname
~~~
输入你喜欢的hostname并且保存。
注意hostname的合法性。（参考[这篇文章](https://blog.csdn.net/wanghuiict/article/details/70038140) )  
将hostname添加到hosts
~~~bash
$ nano /etc/hosts
~~~
把下面的HOSTNAME替换成你在<code>/etc/hostname</code>里面设置的那个，输入到<code>/etc/hosts</code>并保存
~~~bash
127.0.0.1       localhost
::1             localhost
127.0.1.1       HOSTNAME.localdomain   HOSTNAME
~~~

### 3.9 安装引导器
对于Intel或AMD的CPU,安装微码更新
~~~bash
$ pacman -S intel-ucode
~~~
或者
~~~bash
$ pacman -S amd-ucode
~~~
安装GRUB
~~~bash
$ pacman -S grub efibootmgr
$ grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=grub
~~~
生成GRUB配置文件
~~~bash
$ grub-mkconfig -o /boot/grub/grub.cfg
~~~

### 3.10 其他
安装网络组件，以免重启后没有网络
~~~bash
$ pacman -S dialog wpa_supplicant netctl wireless_tools
~~~
设置root密码
~~~bash
$ passwd
~~~
ctrl+D退出chroot环境，卸载分区
~~~bash
$ umount /mnt/boot/efi
$ umount /mnt
~~~
关机
~~~bash
$ poweroff
~~~
拔掉你的USB储存器，进入BIOS设置将<code>grub</code>调整为Boot Sequence的第一位，保存并重启。  
如果安装成功，你能看见带有<code>login</code>字样的命令行界面。


*...未完待续*


>![](/assets/img/post/2018/12/DKucDZrVAAAPMDE.jpg) [illust: liduke](https://twitter.com/lidukelaya/status/912995296048590848)
