---
layout: post
title: '如何愉快地在Linux上推Gal'
subtitle: '全平台社保！'
date: 2018-12-21
categories: 'Tech'
tags: Gal Linux
cover: '/assets/img/post/2018/12/Du7M0RnU0AA33t5.jpg'
---
众所周知由于Windows上蛋疼的编码问题，大多数情况下我们运行Galgame都需要使用ntleas或者LocaleEmulator等工具进行转区（不仅如此，有些情况下我打开别人给我的包含中文字符的txt文本都需要转区）。  
当我投入了ArchLinux的怀抱以后，即使能用wine来运行Windows应用，但转区就成为了一个头痛的问题。对于64位应用，即使比较麻烦，但还是可以通过手动打开ntleasWin.exe来转区；32位应用你只能用LocaleEmulator进行转区，然而LE转区是要通过Windows的右键菜单来启动对应的程序的，显然这行不通。  
<del style="color:#828282;" >为了搓个屌就要重启的麻烦事我是忍不了的，</del>于是就有了下面的教程。（**不是用虚拟机啊！**

## 1 安装wine
在控制台执行
~~~bash
$ sudo pacman -S wine wine_gecko wine-mono
~~~
安装完成之后，执行
~~~bash
$ winecfg
~~~
会生成一个默认的虚拟Windows环境(prefix)，路径是<code>~/.wine</code>  
你也可以在winecfg里面对声音、图形等进行简单的设置，一般默认就好了。

## 2 配置Locale
编辑<code>/etc/locale.gen</code>  
找到ja_JP,并且去掉注释
~~~text
ja_JP.EUC-JP EUC-JP
ja_JP.UTF-8 UTF-8
~~~
保存文件  
然后在控制台执行以下命令来更新你的locale
~~~bash
$ locale-gen
~~~
然后重新启动你的电脑。
>建议你可以安装一些日文字体，我个人比较喜欢的是Adobe和Google共同开发的[思源体](https://github.com/adobe-fonts/source-han-sans) 



## 3 运行



运行非常简单，只需要指定语言变量就行了。
在Galgame所在的目录打开终端，运行以下命令(将someProgram.exe替换为对应的可执行文件）
~~~bash
$ LANG="ja_JP" wine someProgram.exe
~~~
对于显卡配置要求较高的Gal,你还可以配合optirun来食用。比如CM3D2
~~~bash
$ LANG="ja_JP" optirun wine CM3D2x64.exe
~~~
稍等片刻，你就能看到熟悉的帝国俱乐部了。（而且加载比用Windows还快。。。）
![](/assets/img/post/2018/12/scrsht_cm3d2.png) 
>发现一个BUG就是CM3D2的MOD和汉化等插件无法在Linux下使用，经过初步的排查是因为opengl32.dll造成的，wine会默认使用自己的opengl32.dll而不是prefix的那一份，所以游戏目录下面的opengl32.dll根本不起作用。
我尝试让wine强制使用prefix中的或者是游戏目录下的opengl32.dll,结果就是开不了游戏。不过我觉得也不算是特别要命的bug了。

如果你发现指定了语言变量之后也不能运行游戏，你可以尝试额外指定编码  
比如
~~~bash
$ LANG="ja_JP.UTF-8" wine someProgram.exe
~~~
或者是
~~~bash
$ LANG="ja_JP.EUC-JP" wine someProgram.exe
~~~

wine默认生成的是64位的Windows环境，对一些年代久远的Gal的支持可能并不好。你可以额外生成一个32位的prefix来运行32位应用。
执行以下命令，将在生成一个新的prefix<code>~/.wine32</code>
~~~bash
$ WINEARCH=win32 WINEPREFIX="~/.wine32" wineboot -u
~~~
然后通过指定32位的prefix来运行
~~~bash
$ WINEPREFIX="~/.wine32" LANG="ja_JP" wine someProgram.exe
~~~
最後，你只需要制作一个快捷方式，就可以方便地<del style="color:#828282;" >开冲</del>启动你的Galgame。  
>如果你的Gal能运行，但是部分字符显示不正常，通常的原因是wine缺少字体文件。此问题就不在本文的讨论范围了。



## 4 后记



没什么好记的，**祝大家身体健康**（逃
![](/assets/img/post/2018/12/photo_2018-12-23.jpg)

>![](/assets/img/post/2018/12/Du7M0RnU0AA33t5.jpg)
[illust: 木shiyo](https://twitter.com/Kishiyo1943/status/1076022984064679936)
