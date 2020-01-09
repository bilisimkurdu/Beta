---
id: 464
title: 'Cannot save&#8217;&#8230;Models\Model1.edmx&#8217;: Could not load file or assembly &#8230;'
date: 2019-05-03T21:38:21+03:00
author: Yakup Contarlı
layout: post
guid: http://localhost/bilisimkurdu/?p=464
permalink: /cannot-save-modelsmodel1-edmx-could-not-load-file-or-assembly/
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
image: /wp-content/uploads/2019/05/mysqlproblem2.png
categories:
  - ADO.NET
  - 'C#'
  - Genel
  - MSSQL
  - MYSQL
  - Programlama
  - SQL
tags:
  - Cannot load Model.edmx
  - "Cannot load model.edmx': Could not load file or assembly"
  - "Cannot load Model1.edmx': Could not load file or assembly"
  - "Cannot save Model1.edmx': Could not load file or assembly"
  - "Cannot save'...Models\Model1.edmx': Could not load file or assembly..."
  - mysql
  - oracle
  - provider
---
Merhaba Muhterem Ziyaretçiler,

Bu yazımda Visual Studio ile çalışırken zaman zaman aldığımız bir hata üzerine olacak.

Model klasörüne oluşturulan EntitiyFramework dosyası açılırken &#8220;Cannot save&#8217;…Models\Model1.edmx&#8217;: Could not load file or assembly …&#8221; alıyorsanız;

<!--more-->

_**ComponentModelCache temizliği**_

Visual Studio programını kapalı halde aşağıda uygun olan versiyona göre dizin yoluna gelerek içindeki bütün dosyaları siliyoruz.

Visual Studio 2017 için;

<pre class="wp-block-code"><code>%USERPROFILE%\AppData\Local\Microsoft\VisualStudio\15.0\ComponentModelCache</code></pre>

Visual Studio 2015 için;

<pre class="wp-block-code"><code>%USERPROFILE%\AppData\Local\Microsoft\VisualStudio\14.0\ComponentModelCache
//veya
%USERPROFILE%\AppData\Local\Microsoft\VisualStudio\14.0_installID\ComponentModelCache</code></pre>

Visual Studio 2013 için; 

<pre class="wp-block-code"><code>%USERPROFILE%\AppData\Local\Microsoft\VisualStudio\12.0\ComponentModelCache
//veya
%USERPROFILE%\AppData\Local\Microsoft\VisualStudio\12.0_installID\ComponentModelCache</code></pre>

Visual Studio 2012 için; 

<pre class="wp-block-code"><code>%USERPROFILE%\AppData\Local\Microsoft\VisualStudio\11.0\ComponentModelCache
//veya
%USERPROFILE%\AppData\Local\Microsoft\VisualStudio\11.0\ComponentModelCache</code></pre>

Visual Studio 2010 için; 

<pre class="wp-block-code"><code>%USERPROFILE%\AppData\Local\Microsoft\VisualStudio\10.0\ComponentModelCache
//veya
%USERPROFILE%\AppData\Local\Microsoft\VisualStudio\10.0_installID\ComponentModelCache</code></pre>

Veya otomatik temizlemek isterseniz aşağıdaki adresten Visual Studio eklentisini indirip kurabilirsiniz.

<https://marketplace.visualstudio.com/items?itemName=MadsKristensen.ClearMEFComponentCache>

_**EntitiyFramework oluşturulurken faydanılan Data Provider (Connector) onarımı veya tekrardan kurulumu**_

Misal olarak MySQL provider <a rel="noreferrer noopener" aria-label="MySQL .net Provider (yeni sekmede açılır)" href="https://dev.mysql.com/downloads/connector/net/" target="_blank">MySQL .net Provider</a> ve <a rel="noreferrer noopener" aria-label="MySQL for Visual Studio (yeni sekmede açılır)" href="https://dev.mysql.com/downloads/windows/visualstudio/" target="_blank">MySQL for Visual Studio</a>

Bir Misal daha verirsek <a rel="noreferrer noopener" aria-label="Oracle ODP.NET (yeni sekmede açılır)" href="https://www.oracle.com/technetwork/topics/dotnet/index-085163.html" target="_blank">Oracle ODP.NET</a>

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz.

İyi akşamlar.