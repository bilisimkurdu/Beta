---
id: 685
title: Temel ve dinamik diskler arasındaki farklar.
date: 2020-01-09T09:47:14+02:00
author: Yakup Contarlı
layout: revision
guid: http://localhost/bilisimkurdu/683-revision-v1/
permalink: /683-revision-v1/
amp-page-builder:
  - ""
---
 

Merhaba Muhterem Ziyaretçiler,

Bu yazımda Temel ve dinamik diskler arasındaki farklar hususunda olacak.

Dİsklerin dinamikliği veya temel birimde oluşu diskle yapılacak işlem (bölüm oluşturma,kapasite arttırımı,bölümleme,hacim işlemleri gibi) önemli farklar oluşturabilmektedir.

<!--nextpage-->

**İşte bu iki disk türü arasındaki farklar.**<figure class="wp-block-table">

<table>
  <tr>
    <td>
      Ö<strong>zellik</strong>
    </td>
    
    <td>
      <strong>Temel disk</strong>
    </td>
    
    <td>
      <strong>Dinamik disk</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      Bölümleri ve birimleri izleme
    </td>
    
    <td>
      Bir bölüm tablosu kullanır
    </td>
    
    <td>
      Gizli bir mantıksal disk yöneticisi (LDM) veya sanal disk hizmeti (VDS) kullanır
    </td>
  </tr>
  
  <tr>
    <td>
      Desteklenen işletim sistemleri
    </td>
    
    <td>
      MS-DOS ,Windows 95/98, Windows 8
    </td>
    
    <td>
      Windows 2000, XP, 2003, 2008, 2011, 2012, Vista, Windows 7, Windows 8 ve Windows 10
    </td>
  </tr>
  
  <tr>
    <td>
      Birimlerin kapasitesinin artırılması
    </td>
    
    <td>
      Hayır. Bir bölüm oluşturulduktan sonra, kapasitesini doğrudan değiştiremezsiniz. Bunu yapmak için üçüncü taraf araçlara ihtiyacınız var.
    </td>
    
    <td>
      Evet. Yeniden başlatmadan bölümlerin kapasitesini artırabilirsiniz. Hiçbir zaman veri kaybı olmaz.
    </td>
  </tr>
  
  <tr>
    <td>
      Disk space
    </td>
    
    <td>
      Maksimum kapasite 2 TB ile sınırlıdır.
    </td>
    
    <td>
      Bölümler 2 TB’tan büyük olabilir.
    </td>
  </tr>
  
  <tr>
    <td>
      Bölüm sayısı
    </td>
    
    <td>
      MBR bölüm stili kullanıyorsanız, en fazla dört bölüm kullanıyorsanız. Dördü de birincil bölüm olabilir veya üç birincil bölüm ve bir genişletilmiş bölüm olabilir. Genişletilmiş bölüm mantıksal sürücüler içerebilir. GPT stili kullanıyorsanız, maksimum 128 bölüm oluşturulabilir.
    </td>
    
    <td>
      Sınırsız sayıda bölüm.
    </td>
  </tr>
  
  <tr>
    <td>
      Hacim türleri
    </td>
    
    <td>
      Yalnızca birincil veya mantıksal bölümlere izin verir.
    </td>
    
    <td>
      Basit, yayılmış, çizgili, yansıtılmış ve RAID-5 birimlerine izin verir.
    </td>
  </tr>
  
  <tr>
    <td>
      Çevirilebilirlik
    </td>
    
    <td>
      Temel diskler veri kaybı olmadan dinamik disklere dönüştürülebilir
    </td>
    
    <td>
      Dinamik diski temel diske dönüştürmek için dinamik diskteki tüm birimler silinmelidir. Veri kaybını önlemenin tek yolu üçüncü taraf araçlarını kullanmaktır.
    </td>
  </tr>
</table></figure>