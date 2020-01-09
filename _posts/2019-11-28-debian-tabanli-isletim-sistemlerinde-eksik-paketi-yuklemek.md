---
id: 654
title: Debian tabanlı işletim sistemlerinde depolarda bulunmayan paketleri yüklemek
date: 2019-11-28T14:47:00+02:00
author: Yakup Contarlı
layout: post
guid: http://localhost/bilisimkurdu/?p=654
permalink: /debian-tabanli-isletim-sistemlerinde-eksik-paketi-yuklemek/
bbioon_post_views:
  - "24"
image: /wp-content/uploads/2019/10/debian_package_create.png
categories:
  - Linux
tags:
  - debian not package repository
  - debian paket
  - debian paket yüklenmiyor
  - not package repository
  - pardus depolarında paket yok
  - pardus paket
  - pardus paket yüklenmiyor
  - ubuntu not package repository
  - ubuntu paket
  - ubuntu paket yüklenmiyor
---
Merhaba Muhterem Ziyaretçiler,

Bu yazımda debian tabanlı işletim sistemlerinin depolarında bulunmayan eksik paketlerin yüklenmesiyle ilişkin olacak.

<!--more-->

Eksik paketler nasıl yüklenir?

/etc/apt/sources.list dosyasını root hakları ile açıp aşağıdaki satırı ekleyiniz.

<pre class="wp-block-code"><code>deb http://debian.opennms.org/ stable main</code></pre>

Sonra aşağıdaki komutları giriniz.

<pre class="wp-block-code"><code>sudo wget -O - http://debian.opennms.org/OPENNMS-GPG-KEY | sudo apt-key add -
sudo apt-get update
sudo apt-get install paketAdi</code></pre>

Eğer deb uzantılı dosyaları yüklerken almışsanız.

<pre class="wp-block-code"><code>cd dosyaDizini
sudo apt-get install gdebi
sudo gdebi paketAdi.deb</code></pre>

komutların girilmesi yeterlidir.

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz.

İyi günler.