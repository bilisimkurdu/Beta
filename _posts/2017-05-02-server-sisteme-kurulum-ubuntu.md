---
id: 134
title: SQL SERVER LİNUX SİSTEME KURULUM (UBUNTU)
date: 2017-05-02T13:32:42+03:00
author: Yakup Contarlı
layout: post
guid: https://www.bilisimkurdu.cf/?p=134
permalink: /server-sisteme-kurulum-ubuntu/
cwp_meta_box_check:
  - 'No'
ampforwp_custom_content_editor:
  - ""
ampforwp_custom_content_editor_checkbox:
  - ""
ampforwp-amp-on-off:
  - default
bbioon_post_views:
  - "46"
image: /wp-content/uploads/2017/06/112516_1302_MsSQLServer1.png
categories:
  - Linux
  - MSSQL
  - PC
  - Programlama
  - SQL
tags:
  - hata
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
  - path
  - pc
  - server
  - sql
  - ubuntu
---
Sql server linux için de hazır nasıl olsa bizde bu nimetten faydanalım dedik 🙂 ve ubuntu sistemime kurmaya başladım.

Öncelikle

sudo apt-get install curl ile curl paketini yüklüyoruz.

curl https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add &#8211;   ile MSSQL depolarını ekliyoruz.

sudo apt-get update

sudo apt-get install mssql-server mssql-tools -y   komutuyla MSSQL&#8217;i yüklüyoruz.

sudo /opt/mssql/bin/sqlservr-setup  komutuyla yapılandırıyoruz.

Lisans anlaşmalarını kabul edip gerekli ayarları yaptıktan sonra

sudo echo &#8216;export PATH=&#8221;$PATH:/opt/mssql-tools/bin&#8221;&#8216; >> ~/.bash_profile

sudo echo &#8216;export PATH=&#8221;$PATH:/opt/mssql-tools/bin&#8221;&#8216; >> ~/.bashrc  
source ~/.bashrc

komutlarını yazdıktan sonra

systemctl status mssql-server komutu ile MSSQL servislerini kontrol edebilirsiniz.

sqlcmd -S localhost -U SA -P &#8216;sifreniz&#8217;    komutu ile bağlanabilirsiniz.

(sifreniz=mssql kurarken belirlediğiniz şifre)

&nbsp;