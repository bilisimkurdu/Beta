---
id: 494
title: sudo dolphin:Executing Dolphin as root is not possible.
date: 2019-08-07T13:46:53+03:00
author: Yakup Contarlı
layout: revision
guid: http://localhost/bilisimkurdu/492-revision-v1/
permalink: /492-revision-v1/
---
Merhaba Muhterem Ziyaretçiler,

Bu yazımda `sudo dolphin` komutu uygulanırken Executing Dolphin as root is not possible. hatasıyla ilişkin olacak.

<!--more-->

Bu hata KDE framework 5.34 sürümünde yapılan güncellemeden ötürü kaynaklanmaktadır.

Problemin çözümü nautilus dosya yöneticisinin yüklenip sudo komutu ile çalıştırılması ile çözülür.

Nautilus yüklemek için;

<pre class="wp-block-code"><code>sudo apt-get install nautilus</code></pre>

Nautilus&#8217;u sudo olarak çalıştırmak için;

<pre class="wp-block-code"><code>sudo nautilus</code></pre>

komutlarını terminal üzerinden yürütebilirirsiniz.

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz.

İyi günler.