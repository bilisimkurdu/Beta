---
id: 583
title: 'deb paketi yüklenirken &#8220;paketi işlenirken sorun yaşandı (&#8211;install)&#8221;'
date: 2019-10-07T16:39:20+03:00
author: Yakup Contarlı
layout: post
guid: http://localhost/bilisimkurdu/?p=583
permalink: /deb-paketi-yuklenirken-paketi-islenirken-sorun-yasandi-install/
bbioon_post_views:
  - "44"
image: /wp-content/uploads/2019/10/debian_package_create.png
categories:
  - Linux
tags:
  - 'paketi işlenirken sorun yaşandı (--install):'
  - 'paketi işlenirken sorun yaşandı (--install): çözümü'
  - 'problem while processing package (--install):'
  - 'problem while processing package (--install): fix'
---
Merhaba Muhterem Ziyaretçiler,

.deb uzantılı paketleri yüklerken bazı problemler meydana gelmektedir. Bu yazımda da yaşanan sorunların birinden bahsedeceğim.

<!--more-->

**paketi işlenirken sorun yaşandı (&#8211;install):** hatası bağımlılık gerektiren paketlerin bilgisayarda yüklü bulunmamasından kaynaklanmaktadır.

Sorunun çözümü için aşağıdaki komutlar sırasıyla girilir:

<pre class="wp-block-code"><code>sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt --fix-broken install</code></pre>

Akabinden .deb paketi tekrardan yüklenir.