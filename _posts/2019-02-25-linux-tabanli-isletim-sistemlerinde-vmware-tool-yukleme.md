---
id: 394
title: Linux tabanlı işletim sistemlerinde VMware tool yükleme
date: 2019-02-25T12:03:29+02:00
author: Yakup Contarlı
layout: post
guid: http://localhost/bilisimkurdu/?p=394
permalink: /linux-tabanli-isletim-sistemlerinde-vmware-tool-yukleme/
ampforwp_custom_content_editor:
  - ""
ampforwp_custom_content_editor_checkbox:
  - null
ampforwp-amp-on-off:
  - default
ampforwp-redirection-on-off:
  - enable
bbioon_post_views:
  - "47"
image: /wp-content/uploads/2019/02/VMwareHorizon.jpg
categories:
  - Linux
  - PC
tags:
  - debian
  - fedora
  - istemci
  - linux
  - open Suse
  - sunucu
  - Suse
  - tool
  - ubuntu
  - VMware
  - VMware tool
  - vmware tool yükleme
---
Merhaba Muhtarem ziyaretçilerimiz,

Bu yazımda bilinen bütün Linux sürümlerinde VMware tool paketlerini yüklemeyi anlamaya çalışacağım.

Aşağıdaki komutları kullandığınız işletim sistemine göre seçip terminale yazıp sanal işletim sistemini restart etmeniz gerekmektedir.

<!--more-->

Debian tabanlı (Ubuntu,Pardus,Linux Mint gibi)

İstemciler;  


<pre class="wp-block-code"><code>sudo apt-get install open-vm-tools open-vm-tools-desktop</code></pre>

Sunucu;

<pre class="wp-block-code"><code>sudo apt-get install open-vm-tools</code></pre>

Fedora tabanlı işletim sistemleri  


İstemci;

<pre class="wp-block-code"><code>su -c "yum install open-vm-tools open-vm-tools-desktop"</code></pre>

Sunucu;

<pre class="wp-block-code"><code>su -c "yum install open-vm-tools"</code></pre>

Open Suse tabanlı işletim sistemleri için;

İstemci;

<pre class="wp-block-code"><code>sudo zypper install open-vm-tools open-vm-tools-desktop</code></pre>

Sunucu;

<pre class="wp-block-code"><code>sudo zypper install open-vm-tools</code></pre>

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz. 

İyi günler.