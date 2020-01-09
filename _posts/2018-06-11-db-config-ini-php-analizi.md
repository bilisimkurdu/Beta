---
id: 298
title: '&#8220;db-config-ini.php&#8221; analizi'
date: 2018-06-11T17:02:32+03:00
author: Yakup Contarlı
layout: post
guid: https://www.bilisimkurdu.cf/?p=298
permalink: /db-config-ini-php-analizi/
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
image: /wp-content/uploads/2018/06/wp-featured.jpeg
categories:
  - İnternet
  - Wordpress
tags:
  - açık
  - bilişim
  - bilişim kurdu
  - btk
  - db-config-ini.php
  - exploit
  - kurdu
  - usom
  - wordpress
  - zaafiyet
---
Merhabalar,

Bugün yapmış olduğum analizi paylaşmak istiyorum.

Ama pek ayrıntılı analiz yapabilmiş değilim dikkatinizi çekmek isterim.

<!--more-->

USOM&#8217;u bilenler bilir ama bilmeyenler için BTK&#8217;ya bağlı Ulusal Siber Olaylara Müdahale Merkezi&#8217;dir.Zaman zaman analiz ettiği zararlı URL&#8217;leri aşağıdaki gibi inceledim.

<li style="list-style-type: none;">
  <ol>
    <li style="list-style-type: none;">
      <ol>
        <li>
          Başlıkta belirttiğim &#8220;db-config-ini.php&#8221; dosyası zararlı URL olarak tespit edilmiş ve WordPress sitelerinde olduğunu analiz ettim.
        </li>
        <li>
          Listedeki bazı web sitelerini incelediğimde temalar nulled olduğunu analiz ettim. Şu maddeyi biraz açarsam;<br /> USOM&#8217;un zararlı link kategorilerine eklediği siteyi inceleyeceğim.<br /> Site : cns.com.pk<br /> Link : cns.com.pk/wp-includes/theme-compat/db-config-ini.php<br /> Web sitesi wordpress sitesi olduğu için temasını analiz ettim.<br /> <img src="https://i.hizliresim.com/EDYQdv.jpg" alt="" />
        </li>
      </ol>
    </li>
  </ol>
  
  <p>
    Resimdeki gibi site BeTheme temasını kullanmakta ve kullanımda bulunan tema ücretli.<br /> Link : <a href="https://themeforest.net/item/betheme-responsive-multipurpose-wordpress-theme/7758048">https://themeforest.net/item/betheme-responsive-multipurpose-wordpress-theme/7758048</a><br /> Google üzerinden temanın nulled versiyonu için arama yaptım ve bulduğum linki Virus Total üzerinden analiz ettim.<br /> Link : <a href="https://www.virustotal.com/#/url/fcbf61d8b16232ebcb5608d65bf7f771ac0c4293d6fc5c4f0cebfbe1ea306f3a/detection">https://www.virustotal.com/#/url/fcbf61d8b16232ebcb5608d65bf7f771ac0c4293d6fc5c4f0cebfbe1ea306f3a/detection</a><br /> Linkteki bilgiye göre iki farklı antivirüs tarafından tespit edilmiş (Malcious,Malware)</li> </ol> 
    
    <p>
      Yani diyeceğim o ki temaya beleşe alacağım diye nulled tema yüklemeyiniz. Nulled temaların çoğunda exploit(zaafiyeti kullanmak) oluşturacak açıklar meydana getirir ve web siteniz zarar görme ihtimali yüksektir.<br /> USOM zararlı link listesi : <a href="https://www.usom.gov.tr/zararli-baglantilar/1.html">https://www.usom.gov.tr/zararli-baglantilar/1.html</a>
    </p>
    
    <p>
      En ulvi saygılarmla.<br /> Lisanı sürç ettiysek affola.
    </p>