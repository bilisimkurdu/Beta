---
id: 663
title: Ubuntu şifresi sıfırlama
date: 2019-12-17T15:53:02+02:00
author: Yakup Contarlı
layout: post
guid: http://localhost/bilisimkurdu/?p=663
permalink: /ubuntu-sifresi-sifirlama/
bbioon_post_views:
  - "17"
image: /wp-content/uploads/2019/12/ubuntu-logo.jpg
categories:
  - Linux
tags:
  - kubuntu password reset
  - kubuntu şifre sıfırlama
  - linux şifre sıfırlama
  - lubuntu password reset
  - pardus şifre sıfırlama
  - ubuntu password reset
  - ubuntu şifre sıfırlama
  - xubuntu password reset
---
Merhaba Muhterem Ziyaretçiler,

Bu yazımda Ubuntuda unutulan şifrenin sıfırlanması hakkında olacak.

<!--more-->

  * Öncelikle Ubuntu kurulu bilgisayarınızı yeniden başlatın.

  * Bilgisayarınız açılırken (Firma logosu) Shift tuşuna basınız.

  * Grub ekranı karşınıza çıktığında &#8220;Advanced options for Ubuntu&#8221; seçiniz.<figure class="wp-block-image size-large">

![](http://wpcdn.cazda.com/wp-content/uploads/2016/10/Grub2.02_DualBoot-820x440.jpg) </figure> 

  * Karşınıza çıkan ekranda &#8220;root&#8221; seçeneğini seçiniz.<figure class="wp-block-image size-large">

![](https://clouding.io/kb/wp-content/uploads/2018/11/ubuntu_recoverymode_1.png) </figure> 

  * Karşınıza çıkacak shell ekranında aşağıdaki kodları yazınız.

<pre class="wp-block-code"><code>mount -o remount,rw /
passwd &lt;kullaniciadi></code></pre>

  * Yeni parolanın istemede olmasını istediğiniz şeyi seçin. Başarılı olduktan sonra makineyi yeniden başlatın ve kullanıcı yeni şifreleriyle giriş yapabilir.

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz.

İyi günler.