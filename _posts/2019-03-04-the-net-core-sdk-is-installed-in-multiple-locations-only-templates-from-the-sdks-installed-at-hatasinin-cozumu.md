---
id: 424
title: 'The .NET Core SDK is installed in multiple locations. Only templates from the SDK(s) installed at &#8230; hatasının çözümü'
date: 2019-03-04T21:46:49+02:00
author: Yakup Contarlı
layout: post
guid: http://localhost/bilisimkurdu/?p=424
permalink: /the-net-core-sdk-is-installed-in-multiple-locations-only-templates-from-the-sdks-installed-at-hatasinin-cozumu/
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
image: /wp-content/uploads/2019/03/core2.0.png
categories:
  - Programlama
tags:
  - ASP.NET CORE
  - ASP.NET MVC
  - ASP.NET MVC Core
  - 'c#'
  - "The .NET Core SDK is installed in multiple locations. Only templates from the SDK(s) installed at 'C:\Program Files\dotnet\sdk\' will be displayed."
  - Visual Studio
  - Visual Studio 2017
---
Merhaba Muhterem Ziyaretçiler,

Bu yazıma başlıkta belirtilen hatanın çözümü konusu olacak.

Bu hata Visual Studio 2017 sürümlerinde ASP:NET Core manuel olarak güncelllenmesinden sonra yaşanabilmekte olup hata aşağıdaki resimdedir.

<!--more--><figure class="wp-block-image">

![](https://docs.microsoft.com/tr-tr/aspnet/core/test/troubleshoot/_static/multiplelocations.png?view=aspnetcore-2.2) </figure> 

<blockquote class="wp-block-quote">
  <p>
    x86 :32bit işletim sistemleri
  </p>
  
  <p>
    x64 :64bit işletim sistemleri
  </p>
  
  <cite>Ufak bir hatırlatma 🙂</cite>
</blockquote>

Bu hatayı ASP:NET Core yükseltmesini hem x86 hem de x64&#8217;e yapmışsınızdır çözümü olarak (İşletim sisteminiz x64 kullanıyorsanız) ASP.NET Core x86 güncellemesini kaldırmanız gerekir. (İşletim sisteminiz x86 ise x64 yükleyemezsiniz.)

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz.  


İyi akşamlar.