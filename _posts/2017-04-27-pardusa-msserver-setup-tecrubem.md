---
id: 120
title: 'PARDUS&#8217;A MSSQL SERVER KURMA HAKKINDA KİŞİSEL TECRÜBEM'
date: 2017-04-27T15:40:20+03:00
author: Yakup Contarlı
layout: post
guid: https://www.bilisimkurdu.cf/?p=120
permalink: /pardusa-msserver-setup-tecrubem/
cwp_meta_box_check:
  - 'No'
ampforwp_custom_content_editor:
  - ""
ampforwp_custom_content_editor_checkbox:
  - ""
ampforwp-amp-on-off:
  - default
bbioon_post_views:
  - "47"
image: /wp-content/uploads/2017/06/pardus-işletim-sistemi.jpg
categories:
  - MSSQL
  - PC
  - Programlama
  - SQL
tags:
  - kurulum
  - linux
  - linux microsoft sql server
  - microsoft
  - microsoft sql server
  - microsoft sql server linux kurulumu
  - mssql
  - pardus
  - pardus microsoft sql server kurulumu
  - pardus mssql
  - pardus mssql kurulum
  - pardus mssql kurulumu
  - pc
  - server
  - sql
  - ubuntu
---
Muhterem ziyaretçiler, bugün aklımda Pardus sistemime Microsoft SQL Server kurmaya karar verdim ve sistemime Microsoft SQL Server kurmaya başladım.

Şu adımları uygulamaya başladım.

**1) Public repo keyini import ediyoruz.**

_sudo sh -c “curl https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -“_

**2) Microsoft SQL Server Ubuntu repositorysini ekliyoruz.**

sudo sh -c “echo deb [arch=amd64] https://packages.microsoft.com/ubuntu/16.04/mssql-server xenial main > /etc/apt/sources.list.d/sql-server.list”

<pre>sudo sh -c "echo deb [arch=amd64] https://packages.microsoft.com/ubuntu/16.04/prod xenial main &gt;&gt; /etc/apt/sources.list.d/sql-server.list"</pre>

**3) Paketleri güncelleyip kuruluma geçiyoruz.**

<pre>sudo apt-get update</pre>

<pre>sudo apt-get install mssql-server mssql-tools -y 

</pre>

Kurulum adımlarını tamamladıktan sonra

<pre>sqlcmd -S localhost -U SA -P Parola</pre>

komutunu yazdıktan sonra  sqlcmd olmadığına dailr hatalar aldım.  
Sonra **mssql-tools** paketi eksik olduğunu gördüm ve kurmaya başladım. **Synaptic Paket Yöneticisinden mssql-tools** paketini yüklemeye çalıştığımda aşağıdaki hatayı aldım.

> mssql-tools:  
> Bağımlılıklar: libc6 (>=2.21) fakat 2.19-18+deb8u7 kurulacak  
> Bağımlılıklar: libstdc++6 (>=5.2) fakat 4.9.2-10 kurulacak  
> Bağımlılıklar: msodbcsql fakat kurulmayacak  
> Bağımlılıklar: msodbcsql fakat kurulmayacak,

Hatayı araştırdığımda Pardus paketlerinde hata aldığım paketler güncel olmadığını anladım ve Ubuntu paket adreslerini alıp **source.list** dosyasına yapıştırdım. (Pardus depo adreslerine dokunmadan.) sonra terminale**sudo apt-get update** yazdım.  
Terminale sudo apt-get install mssql-tools yazdım ve gerekli sorularara &#8220;yes&#8221; ile cevap verdim.  
Güncellemeye başlayınca Pardus&#8217;taki mevcut paketleri kaldırmaya başlamış ve yeniden başlatmayı sistem talep ettiğimde sistemi yeniden başlattığımda Pardus sistemden göçmüştü.  
Yani Mssql server Pardus&#8217;a kurulamayacağını göstermiş oldu.

Belki de Pardus depolarında güncel paketler olsaydı kararlı bir şekilde Mssql Server&#8217;ı Pardus&#8217;a kurmuş olurdum.

İyi Çalışmalar ve İyi Günler dilerim.

Kaynakça :

<blockquote class="wp-embedded-content" data-secret="rVwnrRPsiU">
  <p>
    <a href="https://www.mshowto.org/linux-ubuntu-uzerine-microsoft-sql-server-kurulumu-ve-sql-araclari.html">Linux (Ubuntu) Üzerine Microsoft SQL Server Kurulumu ve SQL Araçları</a>
  </p>
</blockquote>



http://www.4s.com.tr/8523-2/