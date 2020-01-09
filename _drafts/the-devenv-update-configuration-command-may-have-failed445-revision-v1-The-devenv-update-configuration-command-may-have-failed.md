---
id: 447
title: The devenv /update configuration command may have failed
date: 2019-03-21T22:53:13+02:00
author: Yakup Contarlı
layout: revision
guid: http://localhost/bilisimkurdu/445-revision-v1/
permalink: /445-revision-v1/
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
    Özellikle SQL Server Managment Studio kullanıyorsanız kontrol etmenizi öneririz. Çünkü SQL Server Managment Studio kurulurken Visual Studio Shell (Isolated) kurulur
  </p>
</blockquote>

regedit.exe -> HKEY\_LOCAL\_MACHINE -> SOFTWARE -> Microsoft -> Windows -> Currentversion -> App Paths -> devenv.exe-> (Default) değerlerin kullandığınız Visual Studio versiyonuzun devenv.exe dosyası olduğundan emin olunuz.<figure class="wp-block-image">

![](https://i.hizliresim.com/dvd6mL.jpg) </figure> 

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz.  


İyi akşamlar.