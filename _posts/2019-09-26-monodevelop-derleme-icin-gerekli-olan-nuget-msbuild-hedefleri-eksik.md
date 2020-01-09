---
id: 574
title: MonoDevelop Derleme için gerekli olan NuGet MSBuild hedefleri eksik.
date: 2019-09-26T09:24:40+03:00
author: Yakup Contarlı
layout: post
guid: http://localhost/bilisimkurdu/?p=574
permalink: /monodevelop-derleme-icin-gerekli-olan-nuget-msbuild-hedefleri-eksik/
bbioon_post_views:
  - "47"
image: /wp-content/uploads/2019/09/1200px-Monodevelop_Logo.svg_.png
categories:
  - Genel
tags:
  - MonoDevelop
  - monodevelop asp.net
  - MonoDevelop NuGet packages must be restored before compiling. Missing the NuGet MSBuild targets required for compilation. NuGet MSBuild targets are created when NuGet packages are restored.
---
Merhaba Muhterem Ziyaretçiler,

Bu yazımda MonoDevelop ASP.NET MVC Core projesi açılırken &#8220;Derlemeden önce NuGet paketlerinin geri yüklenmesi gerekiyor. Derleme için gerekli olan NuGet MSBuild hedefleri eksik. NuGet MSBuild hedefleri NuGet paketleri geri yüklendiğinde oluşturulur.&#8221; hatasının çözümüyle ilişkin olacak.

<!--more-->

Error : NuGet packages must be restored before compiling. Missing the NuGet MSBuild targets required for compilation. NuGet MSBuild targets are created when NuGet packages are restored.

Bu hatanın çözümü olarak Solution Explorer -> NuGet (Sağ tık) -> Geri yükle aşamalarını takip ederek NuGet paketlerin yeniden yüklenmesi yöntemi uygulanırç