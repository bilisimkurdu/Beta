---
id: 586
title: 'deb paketi yüklenirken &#8220;paketi işlenirken sorun yaşandı (&#8211;install)&#8221;'
date: 2019-10-07T16:39:20+03:00
author: Yakup Contarlı
layout: revision
guid: http://localhost/bilisimkurdu/583-revision-v1/
permalink: /583-revision-v1/
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