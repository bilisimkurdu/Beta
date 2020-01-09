---
id: 582
title: 'Intel HAXM installation error &#8211; This computer does not support Intel Virtualization Technology'
date: 2019-10-04T10:23:11+03:00
author: Yakup Contarlı
layout: revision
guid: http://localhost/bilisimkurdu/578-revision-v1/
permalink: /578-revision-v1/
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