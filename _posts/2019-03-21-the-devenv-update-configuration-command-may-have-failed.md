---
id: 445
title: The devenv /updateconfiguration command may have failed
date: 2019-03-21T22:52:25+02:00
author: Yakup Contarlı
layout: post
guid: http://localhost/bilisimkurdu/?p=445
permalink: /the-devenv-update-configuration-command-may-have-failed/
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
image: /wp-content/uploads/2019/03/mysql.png
categories:
  - ADO.NET
  - 'C#'
  - MYSQL
  - Programlama
  - SQL
tags:
  - mysql for visual studio The devenv /update configuration command may have failed
  - mysql for visual studio The devenv /update configuration command may have failed error
  - mysql for visual studio The devenv /update configuration command may have failed hatası
  - mysql The devenv /update configuration command may have failed
  - mysql The devenv /update configuration command may have failed error
  - mysql The devenv /update configuration command may have failed hatası
  - The devenv /update configuration command may have failed
---
Merhaba arkadaşlar,

Bu yazımda MYSQL for Visual Studio kurulurken programın vermiş olduğu hatanın çözümü anlatacağım.

<!--more-->

Hata iletisi :<figure class="wp-block-image">

![](https://i.hizliresim.com/LlzJ5b.png) </figure> 

İlk Çözüm yöntemi:

C:\Users\kullaniciAdi\AppData\Local\Microsoft\VisualStudio\15.0_  
**<instance_id>** \privateregistry.bin dosyası silinir.

Program tekrardan kurma\kaldırma işlemi gerçekleşir.

Kurulum tamamlandığında Visual Studio açtığınızda&#8221;Unknown error&#8221; hatası verirse aynı şekilde  
&#8220;**privateregistry.bin**&#8221; dosyası silinir.

<blockquote class="wp-block-quote">
  <p>
    Not : Windows 7 kullanyorsanız bu hatayı vermesi normaldir. Eğer çözüm yöntemlerini gerçekleştirmişseniz sıkıntı doğurmayacaktır.
  </p>
</blockquote>

İkinci Çözüm yöntemi;

(Eğer birden fazla Visual Studio kurulmuşsa önerilir.)

<blockquote class="wp-block-quote">
  <p>
    Özellikle SQL Server Managment Studio kullanıyorsanız kontrol etmenizi öneririz. Çünkü SQL Server Managment Studio kurulurken Visual Studio Shell (Isolated) kurulur.
  </p>
</blockquote>

regedit.exe -> HKEY\_LOCAL\_MACHINE -> SOFTWARE -> Microsoft -> Windows -> Currentversion -> App Paths -> devenv.exe-> (Default) değerlerin kullandığınız Visual Studio versiyonuzun devenv.exe dosyası olduğundan emin olunuz.<figure class="wp-block-image">

![](https://i.hizliresim.com/dvd6mL.jpg) </figure> 

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz.  


İyi akşamlar.