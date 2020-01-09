---
id: 374
title: Windows 10 Cortana devre dışı bırakma
date: 2018-11-20T23:29:01+02:00
author: Yakup Contarlı
layout: post
guid: https://www.bilisimkurdu.cf/?p=374
permalink: /windows-10-cortana-devre-disi-birakma/
ampforwp_custom_content_editor:
  - ""
ampforwp_custom_content_editor_checkbox:
  - null
ampforwp-amp-on-off:
  - default
ampforwp-redirection-on-off:
  - enable
bbioon_post_views:
  - "44"
image: /wp-content/uploads/2019/02/59fde5bccfdf4_maxresdefault-1170x658.jpg
categories:
  - PC
  - Windows
---
Merhaba Muhterem ziyaretçilerimiz,  
Bugün Windows 10 Cortana disable (devre dışı bırakacağımızı) nasıl edileceğini anlatacağım. Bilindiği üzere Cortana Microsoft’un asistan uygulaması olup işlevi yerine getirebilmesi için verilerinizi toparlayıp analiz edilmektedir.

<!--more-->

Cortana’yi disable ederek gizliliğinizi bir nebzede koruyabilirsiniz.

Windows 10 Pro ve Enterpise

  1. **Başlat ->&nbsp;****gpedit.msc**
  2. &nbsp;**Computer Configuration > Administrative Templates > Windows Components > Search yolunu takip ederek&nbsp;**
  3. **Allow Cortana&nbsp;**ayarını bulup çift tıklatınız**&nbsp;disable&nbsp;**ederek bilgisayarınız restart ediniz.

<div class="wp-block-image">
  <figure class="aligncenter"><img src="https://betanews.com/wp-content/uploads/2016/07/GPE.jpg" alt="GPE" class="wp-image-341112" /></figure>
</div>

Windows 10 Home

**Başlat -> Regedit -> HKEY\_LOCAL\_MACHINE\SOFTWARE\Policies\Microsoft\Windows\Windows Search**yolunu takip ediniz.

Windows klasörünün üzerine sağtık ile tıklayarak “**New->Key”**&nbsp;yolunu takip ederek “**Windows Search**” değerini veriniz.

<div class="wp-block-image">
  <figure class="aligncenter"><img src="https://img.purch.com/o/aHR0cDovL3d3dy5sYXB0b3BtYWcuY29tL2ltYWdlcy93cC9wdXJjaC1hcGkvaW5jb250ZW50LzIwMTYvMDkvc2NyZWVuc2hvdC0oMTA0KV82MzguNzYwODA2OTE2NDM0MDMucG5n" alt="screenshot (104) 638.76080691643403" class="wp-image-298234" /></figure>
</div>

<div class="wp-block-image">
  <figure class="aligncenter"><img src="https://img.purch.com/o/aHR0cDovL3d3dy5sYXB0b3BtYWcuY29tL2ltYWdlcy93cC9wdXJjaC1hcGkvaW5jb250ZW50LzIwMTYvMDkvc2NyZWVuc2hvdC0oMTA1KV82NzUyODEuMjUucG5n" alt="screenshot (105) 675281.25" class="wp-image-298236" /></figure>
</div>

**Windows Search**&nbsp;klasörün üzerine sağtık ile&nbsp;**“DWORD (32-bit) Value”**&nbsp;ekliyoruz.

4.&nbsp;**DWORD&nbsp;&nbsp;**değeri&nbsp;**“AllowCortana”&nbsp;**değeri&nbsp;**“0”&nbsp;**olmalıdır. En sonunda bilgisayarı restart ediyoruz.

<div class="wp-block-image">
  <figure class="aligncenter"><img src="https://img.purch.com/o/aHR0cDovL3d3dy5sYXB0b3BtYWcuY29tL2ltYWdlcy93cC9wdXJjaC1hcGkvaW5jb250ZW50LzIwMTYvMDkvc2NyZWVuc2hvdC0oMTA2KV82NzUxNTQuMjg1NzE0Mjg1NzEucG5n" alt="screenshot (106) 675154.28571428571" class="wp-image-298238" /></figure>
</div>