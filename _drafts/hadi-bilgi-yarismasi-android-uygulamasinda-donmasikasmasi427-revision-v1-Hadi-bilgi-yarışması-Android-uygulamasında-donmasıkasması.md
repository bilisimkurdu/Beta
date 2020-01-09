---
id: 433
title: Hadi bilgi yarışması Android uygulamasında donması\kasması
date: 2019-03-05T19:05:31+02:00
author: Yakup Contarlı
layout: revision
guid: http://localhost/bilisimkurdu/427-revision-v1/
permalink: /427-revision-v1/
---
Merhaba Muhterem Ziyaretçiler,

Bu yazımda <a rel="noreferrer noopener" aria-label="Hadi (yeni sekmede açılır)" href="https://play.google.com/store/apps/details?id=go.tv.hadi&hl=tr" target="_blank">Hadi</a> gibi uygulamalarda telefonun teknik özellikleri hem de boşta RAM oranı ve internet hızınız yeterliyken telefonun aniden kasması veya donma hatasının çözümünü anlatacağım.

<!--more-->

Önce telefonumuzun &#8220;Developer Options&#8221; yani Geliştirici Seçeneklerini aktif ediyoruz.

Ama nasıl geliştirici seçeneğini aktif ederim?

Ayarlar -> Telefon Hakkında\Cihaz Hakkında -> Özel Derleme Sürümü\Yapım Numarası(Build Number)&#8217;na 5 defa üst üste basdıktan sonra Geliştirici Seçenekleri aktif ederiz.<figure class="wp-block-image">

![](https://i.hizliresim.com/r5agD7.png) <figcaption>1.Adım</figcaption></figure> <figure class="wp-block-image">![](https://i.hizliresim.com/7apoL5.png)<figcaption>2.adım</figcaption></figure> 

Telefonumuzu geliştirici seçeneğini açtık sorunu çözmek için ne yapacağız o zaman?

Geliştirici Seçeneğini &#8220;Açık&#8221; olacak şekilde aşağıdaki ayarları yapıyoruz ;<figure class="wp-block-image">

![](https://i.hizliresim.com/P1A5V9.png) <figcaption>Gpu oluşturmayı zorla : Aktif</figcaption></figure> <figure class="wp-block-image">![](https://i.hizliresim.com/grDkG3.png)<figcaption>4x MSAA&#8217;yı zorla : Aktif  
Donanım katmanlarını devre dışı bırak : Aktif</figcaption></figure> 

Elimden geldiğince sorunun çözümünü anlatmaya çalıştım. Yazmış olduğum ayarları test etmek isterseniz önce telefonunuzun <a rel="noreferrer noopener" aria-label=" önbelleğini temizlemenizi (yeni sekmede açılır)" href="https://teknobolge.com/nasil-yapilir/android-8-0-ve-uzerinde-onbellek-nasil-temizlenir" target="_blank">önbelleğini temizlemenizi</a> tavsiye ederim.

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz.

İyi akşamlar.