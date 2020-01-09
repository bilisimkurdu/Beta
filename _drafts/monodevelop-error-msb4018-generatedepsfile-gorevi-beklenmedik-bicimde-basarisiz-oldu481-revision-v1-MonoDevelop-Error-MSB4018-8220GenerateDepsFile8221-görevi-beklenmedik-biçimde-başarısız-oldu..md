---
id: 482
title: 'MonoDevelop Error MSB4018: &#8220;GenerateDepsFile&#8221; görevi beklenmedik biçimde başarısız oldu.'
date: 2019-07-16T16:55:04+03:00
author: Yakup Contarlı
layout: revision
guid: http://localhost/bilisimkurdu/481-revision-v1/
permalink: /481-revision-v1/
---
Merhaba Muhtererem Ziyeretçiler,

Bu yazımda Linux MonoDevelop .NET Core Web uygulaması derlenirken **MonoDevelop Error MSB4018: &#8220;GenerateDepsFile&#8221; görevi beklenmedik biçimde başarısız oldu.** / **MonoDevelop Error MSB4018: The &#8220;GenerateDepsFile&#8221; task failed unexpectedly.** hatasının çözümü konusunda olacak.

<!--more-->

1-) MonoDevelop &#8220;Debug&#8221; yerinne &#8220;Release&#8221; olarak derlenmesi.<figure class="wp-block-image">

![](https://i.hizliresim.com/jqnQZW.png) </figure> 

2-)Birinci adım olmazsa ;

.NET Core v2.2.105 yüklenmesi (.NET Core V2.2.105 için <a rel="noreferrer noopener" aria-label="tıklayınız (yeni sekmede açılır)" href="https://dotnet.microsoft.com/download/linux-package-manager/debian9/sdk-2.2.105" target="_blank">tıklayınız</a>.) gerekmektedir.

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz. 

İyi günler.