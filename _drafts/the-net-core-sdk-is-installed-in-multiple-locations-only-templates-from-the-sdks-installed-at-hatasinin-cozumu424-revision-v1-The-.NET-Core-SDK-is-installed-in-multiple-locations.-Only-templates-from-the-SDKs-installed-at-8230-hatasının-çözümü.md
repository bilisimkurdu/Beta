---
id: 431
title: 'The .NET Core SDK is installed in multiple locations. Only templates from the SDK(s) installed at &#8230; hatasının çözümü'
date: 2019-03-05T18:57:05+02:00
author: Yakup Contarlı
layout: revision
guid: http://localhost/bilisimkurdu/424-revision-v1/
permalink: /424-revision-v1/
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