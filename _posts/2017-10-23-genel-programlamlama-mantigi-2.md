---
id: 247
title: 'Genel Programlamlama Mantığı &#8211; 2'
date: 2017-10-23T19:55:11+03:00
author: Yakup Contarlı
layout: post
guid: https://www.bilisimkurdu.cf/?p=247
permalink: /genel-programlamlama-mantigi-2/
ampforwp_page_builder_enable:
  - null
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
Merhaba Arkadaşlar, bugün Genel Programlama Mantığının ikinci ve son yazım arzınızdadır 🙂

Bu yazımda akış şemasını göstereceğim.

Akış şeması algoritmanın şekil bulmuş halidir.

Akış şemalarının hazırlanmasında aşağıda yer alan simgeler kullanılır.  
<!--more-->

<table>
  <tr>
    <td>
      <center>
        <img src="http://www.yildiz.edu.tr/~wwwhid/TR/files/algoritma_files/s27-1.jpg" />
      </center>
    </td>
    
    <td>
      Başla &#8211; Bitir
    </td>
  </tr>
  
  <tr>
    <td>
      <center>
        <img src="http://www.yildiz.edu.tr/~wwwhid/TR/files/algoritma_files/s27-2.jpg" />
      </center>
    </td>
    
    <td>
      Klavyeden veri al
    </td>
  </tr>
  
  <tr>
    <td>
      <center>
        <img src="http://www.yildiz.edu.tr/~wwwhid/TR/files/algoritma_files/s27-3.jpg" />
      </center>
    </td>
    
    <td>
      Yazdır
    </td>
  </tr>
  
  <tr>
    <td>
      <center>
        <img src="http://www.yildiz.edu.tr/~wwwhid/TR/files/algoritma_files/s27-4.jpg" />
      </center>
    </td>
    
    <td>
      Kart okuyucu aracılığıyla giriş yapılacağını gösterir.
    </td>
  </tr>
  
  <tr>
    <td>
      <center>
        <img src="http://www.yildiz.edu.tr/~wwwhid/TR/files/algoritma_files/s28_5.jpg" />
      </center>
    </td>
    
    <td>
      Değişken atama
    </td>
  </tr>
  
  <tr>
    <td>
      <center>
        <img src="http://www.yildiz.edu.tr/~wwwhid/TR/files/algoritma_files/s28_6.jpg" />
      </center>
    </td>
    
    <td>
      Aritmetik hesaplama
    </td>
  </tr>
  
  <tr>
    <td>
      <center>
        <img src="http://www.yildiz.edu.tr/~wwwhid/TR/files/algoritma_files/s28_7.jpg" />
      </center>
    </td>
    
    <td>
      Eğer
    </td>
  </tr>
  
  <tr>
    <td>
      <center>
        <img src="http://www.yildiz.edu.tr/~wwwhid/TR/files/algoritma_files/s28_8.jpg" />
      </center>
    </td>
    
    <td>
      Diskten okuma ya da diskete yazmayı gösterir.
    </td>
  </tr>
  
  <tr>
    <td>
      <center>
        <img src="http://www.yildiz.edu.tr/~wwwhid/TR/files/algoritma_files/s28_9.jpg" />
      </center>
    </td>
    
    <td>
      Disketten okuma ya da diskete yazmayı gösterir.
    </td>
  </tr>
  
  <tr>
    <td>
      <center>
        <img src="http://www.yildiz.edu.tr/~wwwhid/TR/files/algoritma_files/s28_10.jpg" />
      </center>
    </td>
    
    <td>
      Teyp kütüğünü gösterir.
    </td>
  </tr>
  
  <tr>
    <td>
      <center>
        <img src="http://www.yildiz.edu.tr/~wwwhid/TR/files/algoritma_files/s28_11.jpg" />
      </center>
    </td>
    
    <td>
      Döngü işlevinde kullanılmakta
    </td>
  </tr>
  
  <tr>
    <td>
      <center>
        <img src="http://www.yildiz.edu.tr/~wwwhid/TR/files/algoritma_files/s29-12.jpg" />
      </center>
    </td>
    
    <td>
      Akış diyagramında iki nokta arası ilişkiyi gösterir.Döngü sonunu göstermek için ya da diyagramın çizilemediği durumlarda kulllanılır. Burada i herhangi bir sembol olabilir.
    </td>
  </tr>
  
  <tr>
    <td>
      <center>
        <img src="http://www.yildiz.edu.tr/~wwwhid/TR/files/algoritma_files/s29-13.jpg" />
      </center>
    </td>
    
    <td>
      Akış yönü
    </td>
  </tr>
</table>

Örnek bir algoritma örneği verirsek;

<table class="codeTable" style="height: 484px;" width="739">
  <caption>Algoritma</caption> <tr>
    <td>
      <pre class="code">Adım 1-Başla

Adım 2-I18=0 I19=0 I20=0 I21=0 I22=0 IYOS=0

Adım 3-OSA oku

Adım 4-OSA=18 ise I18'i arttır, Adım 9'a git

Adım 5-OSA=19 ise I19'u arttır, Adım 9'a git

Adım 6-OSA=20 ise I20'yi arttır,Adım 9'a git

Adım 7-OSA=21 ise I21'i arttır,ADım 9'a git

Adım 8-OSA=22 ise I22'Yİ arttır,Adım 9'a git

Adım 9-IYOS&lt;100 ise Adım 3'e git

Adım 10-I18,I19,I20,I21,I22,yaz

Adım 11-DUR</pre>
    </td>
  </tr>
</table>

&nbsp;

<table class="imgTable">
  <caption>Akış Şeması</caption> <tr>
    <td>
      <img class="" src="http://www.yildiz.edu.tr/~wwwhid/TR/files/algoritma_files/s39.jpg" width="370" height="445" />
    </td>
  </tr>
</table>

Genel Programlama Mantığını (Programlama Temelleri) iki yazımda klavyemin döndüğünce anlatmaya çalıştım.

İyi akşamlar dilerim.

Referens alınmıştır : <a href="http://www.yildiz.edu.tr/~wwwhid/TR/algoritma3.htm" target="_blank" rel="noopener">http://www.yildiz.edu.tr/~wwwhid/TR/algoritma3.htm</a>