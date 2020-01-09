---
id: 355
title: 'ZTE Handset software update tool yazılımı &#8220;Failed to detect network&#8221; hatası'
date: 2018-09-16T23:23:50+03:00
author: Yakup Contarlı
layout: post
guid: https://www.bilisimkurdu.cf/?p=355
permalink: /zte-handset-software-update-tool-failed-to-detect-network/
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
image: /wp-content/uploads/2018/09/How-to-Save-a-Bricked-Android-Smartphone-1.png
categories:
  - Mobil
tags:
  - cmd
  - detect
  - failed
  - Failed to detect network
  - firewall
  - handset
  - network
  - ping
  - software
  - to
  - tool
  - update
  - ZTE
  - ZTE Handset software update tool
  - ZTE Handset software update tool yazılımı "Failed to detect network" hatası
---
<p data-xf-p="1">
  Merhaba arkadaşlar,
</p>

<p data-xf-p="1">
  Zte ve türevi cihazların yazılım kurtarma aracı olan ZTE Handset software update tool yazılımının &#8220;Failed to detect network&#8221; hatasının sebebi yazılımın cndms.ztems.com (113.98.59.187) adresine erişilememesidir.
</p>

<p data-xf-p="1">
  <!--more-->
</p>

<p data-xf-p="1">
  Bu sonuca nasıl ulaştım?
</p>

<p data-xf-p="1">
  TURKCELL T50 cihazını kurtatmaya çalışırken ZTE Handset software update tool yazılımını kurup çalıştırdığımda &#8220;Failed to detect network&#8221; hatası aldım. (İnternet bağlantısı var.)
</p>

<p data-xf-p="1">
  Firewall ayarlarına bakıtm problem oluşmadı.
</p>

<p data-xf-p="1">
  En sonunda firewall loglarına bakınca 113.98.59.187 adresine ulaşamadığı farkedip Google&#8217;dan arattım.
</p>

<https://www.threatcrowd.org/domain.php?domain=cndms.ztems.com>

Sonra PCDEN ping attım.

<p data-xf-p="1">
  Cmd ping
</p>

<div data-xf-p="1">
  C:\Users\xxxx>ping cndms.ztems.com
</div>

<div data-xf-p="1">
</div>

<div data-xf-p="1">
  cndms.ztems.com [113.98.59.187] yoklanıyor32 bayt veri ile:
</div>

<div data-xf-p="1">
  İstek zaman aşımına uğradı.
</div>

<div data-xf-p="1">
  İstek zaman aşımına uğradı.
</div>

<div data-xf-p="1">
  İstek zaman aşımına uğradı.
</div>

<div data-xf-p="1">
  İstek zaman aşımına uğradı.
</div>

<p data-xf-p="1">
  &#8220;İstek zaman aşımına uğradı&#8221; hatası alınca web siteye ulaşılamamakta olduğu anlaşılmıştı.
</p>

<p data-xf-p="1">
  Selâmetle.
</p>

<p data-xf-p="1">