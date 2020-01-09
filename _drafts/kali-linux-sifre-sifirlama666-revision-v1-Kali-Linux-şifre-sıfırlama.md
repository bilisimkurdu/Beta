---
id: 673
title: Kali Linux şifre sıfırlama
date: 2019-12-19T11:52:11+02:00
author: Yakup Contarlı
layout: revision
guid: http://localhost/bilisimkurdu/666-revision-v1/
permalink: /666-revision-v1/
---
Merhaba Muhterem Ziyaretçiler,

Bu yazımda Kali linux&#8217;da nasıl şifre sıfırlandığı hususunda olacak.

<!--more-->

  * Bilgisayarı yeniden başlattığınızda F10&#8217;a tuşuna basılı tutarak GRUB ekranına ulaşılır.

  * Kali linux yazan seçeneğe gelir F10 tuşuna basılır.<figure class="wp-block-image size-large">

![](https://linuxconfig.org/images/02-how-to-reset-root-password-kali-linux.png) </figure> 

  * GRUB menüsü düzenleme moduna girdikten sonra, aşağıdaki pencereyle karşılaşacaksınız. &#8220;linux &#8221; kelimeyle başlayan satıra ulaşana kadar aşağı kaydırın.<figure class="wp-block-image size-large">

![](https://linuxconfig.org/images/03-how-to-reset-root-password-kali-linux.png) </figure> 

  * &#8220;ro&#8221; yerine &#8220;rw&#8221; ve &#8220;/gtk/initrd.gz&#8221; ifadesinin sonuna &#8220;init=/bin/bash&#8221; ifadesi eklenir.

  * Karşınıza çıkan shell ekranında &#8220;passwd&#8221; komutu yazılır.Yeni şifrenizi giriniz. Doğrulamak için tekrar root şifresini girin. ENTER tuşuna basın ve şifre sıfırlamanın başarılı olduğunu onaylayın.

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz.

İyi günler.