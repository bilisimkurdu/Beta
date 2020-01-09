---
id: 386
title: 'Ubuntu&#8217;ya VMware tool yükleme'
date: 2019-02-23T19:19:41+02:00
author: Yakup Contarlı
layout: post
guid: https://www.bilisimkurdu.cf/?p=386
permalink: /ubuntuya-wmare-tool-yukleme/
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
image: /wp-content/uploads/2019/02/maxresdefault.jpg
categories:
  - Linux
  - PC
tags:
  - kubuntu
  - sanal makine
  - ubuntu
  - VMware
  - VMware tool
  - vmware tool yükleme
  - xubuntu
---
Merhaba arkadaşlar,

Bu yazımda en basit şekliyle VMware Tool yüklemeyi anlatacağım.

Wmare Tool VMware sanal makine yazılımıdır.

Sanal Makine; mevcut işletim sistemi üzerinden kullanılan ikincil işletim sistemidir.

<!--more-->

Eğer Ubuntu\Kubuntu\Xubuntu\Ubuntu Studio\&#8230; güncel (>14) yüklendiyse terminale aşağıdaki komut girilip restart atılır.

<pre class="wp-block-code"><code>sudo apt-get install open-vm-tools open-vm-tools-desktop</code></pre>

Eğer Ubuntu&#8217;nun eski sürümü yüklüyse terminale aşağıdaki komutlar girilir. (<=13);

Lucid sürümü ise: `sudo apt-add-repository 'deb https://packages.vmware.com/tools/releases/latest/ubuntu/lucid main'`  
Natty sürümü ise: `sudo apt-add-repository 'deb https://packages.vmware.com/tools/releases/latest/ubuntu/natty main'`  
Oneiric sürümü ise: `sudo apt-add-repository 'deb https://packages.vmware.com/tools/releases/latest/ubuntu/oneiric main'`  
Precise sürümü ise: `sudo apt-add-repository 'deb https://packages.vmware.com/tools/releases/latest/ubuntu/precise main'`  
komutunu yazdıktan sonra;

`sudo wget http://packages.vmware.com/tools/keys/VMWARE-PACKAGING-GPG-RSA-KEY.pub -q -O- | \    sudo apt-key add -`

`sudo apt-get update` 

`sudo apt-get install open-vm-tools open-vm-tools-desktop`

sırasıyla yazılarak yüklenir ve restart atılır.

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz.

İyi akşamlar.