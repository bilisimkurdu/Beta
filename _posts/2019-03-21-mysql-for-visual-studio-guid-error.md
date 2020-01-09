---
id: 451
title: MySQL for Visual Studio guid error
date: 2019-03-21T23:19:35+02:00
author: Yakup Contarlı
layout: post
guid: http://localhost/bilisimkurdu/?p=451
permalink: /mysql-for-visual-studio-guid-error/
ampforwp_custom_content_editor:
  - ""
ampforwp_custom_content_editor_checkbox:
  - null
ampforwp-amp-on-off:
  - default
ampforwp-redirection-on-off:
  - enable
bbioon_post_views:
  - "47"
image: /wp-content/uploads/2019/03/mysql.png
categories:
  - ADO.NET
  - 'C#'
  - MYSQL
  - Programlama
tags:
  - .NET connector and getting the error “Guid should contain 32 digits and 4 dashes
  - Guid should contain 32 digits and 4 dashes
  - Guid should contain 32 digits and 4 dashes çözümü
  - Guid should contain 32 digits and 4 dashes error
  - Guid should contain 32 digits and 4 dashes hatası
  - MySQL for Visual Studio guid error
---
Merhaba Muhterem Dostlar,

Bu yazımda MySQL for Visual Studio ile veritabanına bağlanırken alınan guid hatasının çözümünü anlatacağım.

<!--more-->

Hata iletisi:<figure class="wp-block-image">

![](https://i.hizliresim.com/RrzLVn.jpg) </figure> 

Çözümü :

  * Yeni bir veritabanı bağlantısı eklenirken veya düzenlenirken Advanced butonuna tıklanır. 
  * &#8220;Old guids&#8221; ifadesine &#8220;True&#8221; değeri verilir.
  * &#8220;OK&#8221; butonuna tıklandıktan sonra &#8220;Connection Properties&#8221; penceresinden &#8220;OK&#8221; butonuna tıklanarak çıkılır.<figure class="wp-block-image">

![](https://i.hizliresim.com/ZXBrLk.jpg) </figure> <figure class="wp-block-image">![](https://i.hizliresim.com/k9d3Ly.jpg)</figure> 

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz.

İyi akşamlar.