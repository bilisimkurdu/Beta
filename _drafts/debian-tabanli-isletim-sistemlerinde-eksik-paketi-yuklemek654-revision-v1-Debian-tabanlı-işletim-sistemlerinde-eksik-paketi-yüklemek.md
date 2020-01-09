---
id: 656
title: Debian tabanlı işletim sistemlerinde eksik paketi yüklemek
date: 2019-11-28T14:47:00+02:00
author: Yakup Contarlı
layout: revision
guid: http://localhost/bilisimkurdu/654-revision-v1/
permalink: /654-revision-v1/
---
Merhaba Muhterem Ziyaretçiler,

Bu yazımda debian tabanlı işletim sistemlerinin depolarında bulunmayan eksik paketlerin yüklenmesiyle ilişkin olacak.

<!--more-->

Eksik paketler nasıl yüklenir?

/etc/apt/sources.list dosyasını root hakları ile açıp aşağıdaki satırı ekleyiniz.

<pre class="wp-block-code"><code>deb http://debian.opennms.org/ stable main</code></pre>

Sonra aşağıdaki komutları giriniz.

<pre class="wp-block-code"><code>sudo apt-get update
sudo apt-get install paketAdi</code></pre>

Eğer deb uzantılı dosyaları yüklerken almışsanız.

<pre class="wp-block-code"><code>cd dosyaDizini
sudo apt-get install gdebi
sudo gdebi paketAdi.deb</code></pre>

komutların girilmesi yeterlidir.

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz.

İyi günler.