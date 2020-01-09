---
id: 578
title: 'Intel HAXM installation error &#8211; This computer does not support Intel Virtualization Technology'
date: 2019-10-04T10:48:00+03:00
author: Yakup Contarlı
layout: post
guid: http://localhost/bilisimkurdu/?p=578
permalink: /intel-haxm-installation-error-this-computer-does-not-support-intel-virtualization-technology/
bbioon_post_views:
  - "46"
image: /wp-content/uploads/2019/10/687.jpg
categories:
  - Intel
  - İşlemci
  - Mobil
  - Mobil
  - PC
  - Programlama
  - Windows
tags:
  - Android Studio HAXM This computer does not support Intel Virtualization Technology
  - Android studio This computer does not support Intel Virtualization Technology
  - haxm This computer does not support Intel Virtualization Technology
  - This computer does not support Intel Virtualization Technology
  - This computer does not support Intel Virtualization Technology çözümü
  - This computer does not support Intel Virtualization Technology error
  - This computer does not support Intel Virtualization Technology error fix
  - This computer does not support Intel Virtualization Technology hatası
  - This computer does not support Intel Virtualization Technology hatası çözümü
---
Merhaba Arkadaşlar,

Bu yazımda Intel HAXM yüklenirken &#8220;Intel HAXM installation error &#8211; This computer does not support Intel Virtualization Technology&#8221; hatasının çözümü yöntemlerini aktaracağım.

This computer does not support Intel Virtualization Technology hatasının çözüm yöntemleri şunlardır;

<!--more-->

**Eğer BIOS üzerinden VT-x ayarı enable ise;**

1)Hyper-V yüklü ise disable ediniz.

Hyper-V disable etmek için;

Control Panel->_&nbsp;Program and Feature_ ->T_urn Window Features on and off_ ->Hyper-V işaretliyse kaldırılıp Bilgisayar yeniden başlatılır.

2)Windows 10 kullanıyorsanız;

Windows Defender settings > Device security > Core isolation details > Memory integrity > Off&nbsp;konumuna getirilerek bilgisayar yeniden başlatılır.

3)CMD yönetici olarak çalıştırarak aşağıdaki komut girilerek bilgisayar yeniden başlatılır.

bcdedit /set hypervisorlaunchtype off

4)

<https://www.microsoft.com/en-us/download/details.aspx?id=53337> adresinden Device Guard and Credential Guard&nbsp;tool indirilir ve CMD administrator olarak çalıştıralak toolun bulunduğu klasöre işaret edilerek (cd komutuyla) aşağıdaki komut girilir.

DG\_Readiness\_Tool_v3.6.ps1 -disable

5) BIOS&#8217;a girilerek VT-x disable moduna alındıktan sonra bilgisayar yeniden başlatılarak BIOS&#8217;a girilerek VT-x modu enable moduna getirilir.

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz.

İyi günler.