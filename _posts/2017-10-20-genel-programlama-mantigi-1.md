---
id: 235
title: 'Genel Programlama Mantığı &#8211; 1'
date: 2017-10-20T23:39:36+03:00
author: Yakup Contarlı
layout: post
guid: https://www.bilisimkurdu.cf/?p=235
permalink: /genel-programlama-mantigi-1/
ampforwp_custom_content_editor:
  - ""
ampforwp_custom_content_editor_checkbox:
  - null
ampforwp-amp-on-off:
  - default
ampforwp-redirection-on-off:
  - enable
ampforwp_page_builder_enable:
  - null
bbioon_post_views:
  - "47"
image: /wp-content/uploads/2017/10/prog.jpg
categories:
  - Programlama
tags:
  - algoritma
  - 'c#'
  - csharp
  - döngü
  - döngüler
  - programlama
---
Merhaba Arkadaşlar, bu yazımda programlama mantığını anlatmaya çalışacağım.

Programlamada önce algoritmayı bilmek gerekmektedir. Algoritmayı, belli bir problemi çözüme kavuşturmak amacıyla tasarlanan yol olarak belirtebiliriz.

Programlama dillerini algoritmayı bilgisayarın anlayacak şekilde standartlarşmış notasyon olarak belirtebiliriz.

Algoritma Başla komutuyla başlar Bitir komutyla biter.

<!--more-->

Örnekler verirsek;

> A1 : Başla.
> 
> A2 : &#8220;Merhaba Dünya&#8221; yazdır.
> 
> A3 : Bitir.

Bahsettiğimiz gibi algoritma Başla komutuyla başlar Bitir komutyla biter.

Bir veri yazdırıken çift tırnak içinde metin yazdırılır.

Ama sistemde işlem gerekip o işlem sonucunun yazdırması için değişken atanması gerekmektedir.

> A1 : Başla.
> 
> A2 : a değişkenini ata
> 
> A3 : a değişkenine 5 değerini ver.
> 
> A4: a değişkenini yazdır.
> 
> A5 : Bitir.

&nbsp;

Değişken ile işlem yapılırken önce değişken atanır sonra değer verilir. Ama değişken atanırken değer verilebilir.

> A1 : Başla.
> 
> A2 : a değişkenini atayıp 5 değerini ver.
> 
> A3: a değişkenini yazdır.
> 
> A4 : Bitir.

İllaki atanan değişken yazdırmak zorunda değiliz. Ama gerektiği durumda yazdırmamız gerekir.

Programlamada işlemler:

> Toplama : +
> 
> Çıkarma : &#8211;
> 
> Çarpma : *
> 
> Bölme : /
> 
> Mod (Kalan) : %

İşlem öncelikleri:

> Parantez ()
> 
> Çarpma veya bölme * /
> 
> Toplama veya Çıkarma + &#8211;

İşlemlerden algoritma örnekleri :

**Toplama :**

> A1 : Başla.
> 
> A2: x değişkenini ata ve 6 değerini ver.
> 
> A3 : y değişkenini ata ve 2 değerini ver.
> 
> A4 z değişkenini ata ve x+y değerini ver.
> 
> (veya A4 :z değişkenini ata.
> 
> A5 : z=x+y işlemini yap. algoritmasını uygulayabiliriz. )
> 
> A5 : z değişkenini yazdır.
> 
> A6 : Bitir.

**Çıkarma :**

> A1 : Başla.
> 
> A2: x değişkenini ata ve 6 değerini ver.
> 
> A3 : y değişkenini ata ve 2 değerini ver.
> 
> A4 z değişkenini ata ve x-y değerini ver.
> 
> (veya A4 :z değişkenini ata.
> 
> A5 : z=x-y işlemini yap. algoritmasını uygulayabiliriz. )
> 
> A5 : z değişkenini yazdır.
> 
> A6 : Bitir.

**Çarpma :**

> A1 : Başla.
> 
> A2: x değişkenini ata ve 6 değerini ver.
> 
> A3 : y değişkenini ata ve 2 değerini ver.
> 
> A4 z değişkenini ata ve x*y değerini ver.
> 
> (veya A4 :z değişkenini ata.
> 
> A5 : z=x*y işlemini yap. algoritmasını uygulayabiliriz. )
> 
> A5 : z değişkenini yazdır.
> 
> A6 : Bitir.

**Bölme :**

> A1 : Başla.
> 
> A2: x değişkenini ata ve 6 değerini ver.
> 
> A3 : y değişkenini ata ve 2 değerini ver.
> 
> A4 z değişkenini ata ve x/y değerini ver.
> 
> (veya A4 :z değişkenini ata.
> 
> A5 : z=x/y işlemini yap. algoritmasını uygulayabiliriz. )
> 
> A5 : z değişkenini yazdır.
> 
> A6 : Bitir.

**Mod :**

> A1 : Başla.
> 
> A2: x değişkenini ata ve 6 değerini ver.
> 
> A3 : y değişkenini ata ve 2 değerini ver.
> 
> A4 z değişkenini ata ve x%y değerini ver.
> 
> (veya A4 :z değişkenini ata.
> 
> A5 : z=x%y işlemini yap. algoritmasını uygulayabiliriz. )
> 
> A5 : z değişkenini yazdır.
> 
> A6 : Bitir.

Bazen değişkenlerle matematiksel işlem değilde karşılaştırmak gerekmekte. Algoritma mantığında ise,

_**Eğer**_ şu doğru **_ise_**

Belirtilen _**işlemi yap.**_

_**Eğer**_ şu yanlış _**ise**_

Belirtilen _**işlemi yap.**_

Ve iki veya ikiden fazla değeri karşılaştırmak gerekmektedir.

> Küçüktür : <
> 
> Büyüktür : >
> 
> Küçükeşittir : <=
> 
> Büyükeşittir : >=
> 
> Eşittir : ==
> 
> Değişken Atama : =

Not : Aşağıdaki mantık yürütmeyle Büyükeşittir ile Küçükeşittir işaretlerini anlatmaya çalışmışımdır.

> Küçük : < Eşittir : == Küçük eşittir : <=
> 
> Büyük > Eşittir : == Büyükeşittir : >=

Birkaç örnekle anlatayım;

> A1 : Başla.
> 
> A2: x değişkenini ata ve 6 değerini ver.
> 
> A3 : y değişkenini ata ve 2 değerini ver.
> 
> A4 Eğer x<y ise
> 
> A5 : &#8220;x küçüktür.&#8221; yazdır.
> 
> A5 :Eğer tam tersiyle
> 
> A6 : &#8220;y küçüktür.&#8221; yazdır.
> 
> A7 : Bitir.

Eğer diğer işaretlerle de yapmak istiyorsanız A4&#8217;te aşağıdaki değerler gelmelidir.

Eşittir için;

> A4 : Eğer x==y ise

Büyüktür için;

> A4 : Eğer x>y ise

Büyükeşittir için;

> A4 : Eğer x>=y ise

Küçük eşittir için;

> A4 : Eğer x<=y ise

Bazen komutları belli bir döngüye göre çalıştırmak isteyebiliriz. Döngüde algoritma mantığı şu şekilde;

> DÖNGÜ başlangıç &#8230;&#8230; bitiş +artış miktarı
> 
> Başlangıç&#8217;tan bitiş&#8217;e kadar artış miktarı&#8217;na göre komut&#8217;u uygula

Bir örnekle anlatırsak;

> A1 : Başla.
> 
> A2: x değişkenini ata ve 0 değerini ver.
> 
> A3 : x&#8217;i 0&#8217;dan 10&#8217;a kadar 1&#8217;e artışla x&#8217;i 1 arttır.
> 
> A4 x&#8217;i yazdır.
> 
> A5 : Bitir.

Bazen verileri klavyeden almak isteyebiliriz.

> A1 : Başla.
> 
> A2: x değişkenini ata ve 0 değerini ver.
> 
> A3 : Klavyeden veri al ve alınan veriyi x&#8217;e ata.
> 
> A4 x&#8217;i yazdır.
> 
> A5 : Bitir.

Ve böylece algoritmayı tanımlayıp klavyemizin döndüğünce anlatmaya çalıştım.

Kısmetse diğer yazımda konuyu devam ettirmenin arzusundayım.