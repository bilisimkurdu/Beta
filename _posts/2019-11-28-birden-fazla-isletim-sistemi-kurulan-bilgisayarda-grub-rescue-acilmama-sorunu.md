---
id: 650
title: Birden fazla işletim sistemi kurulan bilgisayarda grub rescue açılmama sorunu
date: 2019-11-28T14:24:05+02:00
author: Yakup Contarlı
layout: post
guid: http://localhost/bilisimkurdu/?p=650
permalink: /birden-fazla-isletim-sistemi-kurulan-bilgisayarda-grub-rescue-acilmama-sorunu/
bbioon_post_views:
  - "24"
image: /wp-content/uploads/2019/11/4QCs7Hw-scaled.jpg
categories:
  - Linux
  - Windows
tags:
  - does not boot from GRUB boot loader
  - grub error
  - grub hatası
  - GRUB önyükleyiciden önyükleme yapmıyor
  - grub rescue
  - grub rescue error
  - grub rescue hatası
  - pardus grub hatası
  - pardus grub rescue hatası
  - Windows 10 does not boot from GRUB boot loader
  - Windows 7 does not boot from GRUB boot loader
---
Merhaba muhterem ziyaretçiler,

Bu yazımda birden fazla işletim sistemi kurulan bilgisayarlarda işletim sistemi açılmama probleminin çözümü üzerinde duracağız. (grub rescue)

Senaryomuz şu şekilde;

Bilgisayara hem Linux tabanlı işletim sistemlerinden biri hem de Windows işletim sistemlerinden biri kurulmuş olsun. Belli bir süre sonra (güncelleme,sistem yapılandırma,arıza) gibi nedenlerle işletim sistemlerinden biri açılırken &#8220;grub rescue&#8221; hatası versin.

<!--more--><figure class="wp-block-image size-large">

![](https://www.easytechstutorials.com/wp-content/uploads/2019/05/grub1.png) </figure> 

Çözüm önerileri şunlardır;

1)Windows&#8217;u açılmasını sağlayıp <a rel="noreferrer noopener" aria-label="Rufus (yeni sekmede açılır)" href="https://rufus.ie" target="_blank">Rufus</a> yazılımı aracılığı ile <a rel="noreferrer noopener" aria-label="Boot Repair (yeni sekmede açılır)" href="https://sourceforge.net/projects/boot-repair-cd/files/" target="_blank">Boot Repair</a> iso dosyasıyla bootable diski hazırlamak.

Grub hatasında Windows&#8217;un açılmasını sağlamak amacıyla Windows kurulum cd&#8217;si\diski -> Kurtarma Seçenekleri -> Komut istemi yolunu takip ederek aşağıdaki komutlar girilir.

<pre class="wp-block-code"><code>bootrec.exe /fixmbr
bootrec.exe /fixboot  
bootrec.exe /rebuildbcd</code></pre>

2)<a rel="noreferrer noopener" aria-label=" (yeni sekmede açılır)" href="https://bilisimkurdu.github.io/android-cihazlarda-bootable-usb-olusturma/" target="_blank">Android cihaz</a> ile <a rel="noreferrer noopener" href="https://sourceforge.net/projects/boot-repair-cd/files/" target="_blank">Boot Repair</a> iso dosyasıyla bootable diski hazırlamak.

<blockquote class="wp-block-quote">
  <p>
    Konuyla ilişkin yazımız:
  </p>
  
  <p>
    <a href="https://bilisimkurdu.github.io/android-cihazlarda-bootable-usb-olusturma/" target="_blank" rel="noreferrer noopener" aria-label="https://bilisimkurdu.github.io/android-cihazlarda-bootable-usb-olusturma/ (yeni sekmede açılır)">https://bilisimkurdu.github.io/android-cihazlarda-bootable-usb-olusturma/</a>
  </p>
</blockquote>

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz.

İyi günler.