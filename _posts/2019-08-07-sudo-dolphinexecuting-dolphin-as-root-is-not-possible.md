---
id: 492
title: sudo dolphin:Executing Dolphin as root is not possible.
date: 2019-08-07T13:46:53+03:00
author: Yakup Contarlı
layout: post
guid: http://localhost/bilisimkurdu/?p=492
permalink: /sudo-dolphinexecuting-dolphin-as-root-is-not-possible/
ampforwp_custom_content_editor:
  - ""
ampforwp_custom_content_editor_checkbox:
  - null
ampforwp-amp-on-off:
  - default
ampforwp-redirection-on-off:
  - enable
bbioon_post_views:
  - "46"
image: /wp-content/uploads/2019/08/kde-logo-blue-transparent-3000x3000.png
categories:
  - Linux
tags:
  - Executing Dolphin as root is not possible.
  - Executing Dolphin as root is not possible. bypass
  - KDE Executing Dolphin as root is not possible.
  - Kubuntu Executing Dolphin as root is not possible.
  - sudo dolphin sudo dolphin:Executing Dolphin as root is not possible.
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