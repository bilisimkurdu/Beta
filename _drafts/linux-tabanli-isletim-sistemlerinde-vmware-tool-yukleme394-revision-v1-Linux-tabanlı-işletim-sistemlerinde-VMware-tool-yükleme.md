---
id: 398
title: Linux tabanlı işletim sistemlerinde VMware tool yükleme
date: 2019-02-26T20:45:03+02:00
author: Yakup Contarlı
layout: revision
guid: http://localhost/bilisimkurdu/394-revision-v1/
permalink: /394-revision-v1/
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