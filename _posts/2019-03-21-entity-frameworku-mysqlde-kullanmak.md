---
id: 442
title: 'Entity Framework&#8217;ü MYSQL&#8217;de kullanmak'
date: 2019-03-21T22:13:07+02:00
author: Yakup Contarlı
layout: post
guid: http://localhost/bilisimkurdu/?p=442
permalink: /entity-frameworku-mysqlde-kullanmak/
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
  - SQL
tags:
  - ado.net mysql
  - ado.net mysql bağlantı
  - ado.net mysql bağlantısı
  - ado.net mysql connect
  - 'c# mysql'
  - 'c# mysql bağlantı'
  - 'c# mysql connect'
  - Entity Framework
  - entity framework mysql
  - entity framework mysql bağlantı
---
Merhaba Arkadaşlar,

Bu yazımda Entity Framework&#8217;ü MYSQL&#8217;de kullanmayı anlatacağım.

Öncelikle MYSQL for Visual Studio ve MYSQL Connector/NET bilgisayarımızda yüklü olması gerekmektedir.

<!--more-->

MYSQL for Visual Studio (MSI Installer): <a rel="noreferrer noopener" aria-label="https://dev.mysql.com/downloads/windows/visualstudio/ (yeni sekmede açılır)" href="https://dev.mysql.com/downloads/windows/visualstudio/" target="_blank">https://dev.mysql.com/downloads/windows/visualstudio/</a>

MYSQL Connector/NET : <a href="https://dev.mysql.com/downloads/connector/net/8.0.html" target="_blank" rel="noreferrer noopener" aria-label="https://dev.mysql.com/downloads/connector/net/8.0.html (yeni sekmede açılır)">https://dev.mysql.com/downloads/connector/net/8.0.html</a>

adreslerinden temin edebilirsiniz.

<blockquote class="wp-block-quote">
  <p>
    MYSQL for Visual Studio kurarken &#8220;Warning : The devenv /updateconfiguration command may have failed&#8221; hatası alıyorsanız buyurun.
  </p>
  
  <p>
    <a rel="noreferrer noopener" aria-label="The devenv /usipdate configuration command may have failed
 (yeni sekmede açılır)" href="http://bilisimkurdu.github.io/the-devenv-update-configuration-command-may-have-failed/" target="_blank">The devenv /updateconfiguration command may have failed</a><br />
  </p>
</blockquote>

Peki programı yükledim nasıl kullanacağım?

Visual Studio&#8217;yu açıp projemizi oluşturduktan sonra;

Sağ tık -> Add Item -> Data -> ADO.NET Data Model<figure class="wp-block-image">

![](https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/entity-framework-in-mvc-part-one/Images/image010.png) </figure> <figure class="wp-block-image">![](https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/entity-framework-in-mvc-part-one/Images/image010.png)</figure> <figure class="wp-block-image">![](https://i.hizliresim.com/BaQVZD.jpg)</figure> 

&#8220;Data Source&#8221; seçeneğinde &#8220;MySQL Database&#8221; seçilip &#8220;OK&#8221; butonuna tıklanır.<figure class="wp-block-image">

![](https://i.hizliresim.com/ZXBrLk.jpg) </figure> 

Gerekli bilgileri girildikten sonra &#8220;OK&#8221; butonuna tıklanır.<figure class="wp-block-image">

![](https://i.hizliresim.com/oXWLA7.jpg) </figure> 

Akabinde &#8220;Next&#8221; butonuna tıklandıktan sonra ADO.NET penceresi kendiliğinden kapanır.<figure class="wp-block-image">

![](https://i.hizliresim.com/8avGZV.jpg) </figure> 

Solution Explorer sekmesinde beyaz karenin içinde bulunan simgeye tıklandıktan sonra karşımıza çıkan pencerelerden çıkan seçeneklere dokunmadan &#8220;Next&#8221; butonuna tıklıyoruz.<figure class="wp-block-image">

![](https://i.hizliresim.com/nQ6vAR.jpg) </figure> <figure class="wp-block-image">![](https://i.hizliresim.com/v620gp.jpg)</figure> <figure class="wp-block-image">![](https://i.hizliresim.com/16W9YG.jpg)</figure> <figure class="wp-block-image">![](https://i.hizliresim.com/LlzJpb.jpg)</figure> <figure class="wp-block-image">![](https://i.hizliresim.com/r5kqg1.jpg)</figure> <figure class="wp-block-image">![](https://i.hizliresim.com/7anOoa.jpg)</figure> <figure class="wp-block-image">![](https://i.hizliresim.com/qdkg4Q.jpg)</figure> 

&#8220;Finish&#8221; butonuna tıkladıktan sonra biraz beklenir ve eklediğimiz mevcut database bağlantısının modeli oluşturulur.<figure class="wp-block-image">

![](https://i.hizliresim.com/MVGz62.jpg) </figure> 

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz. 

İyi akşamlar.