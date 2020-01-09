---
id: 417
title: VMware Workstation Linux virtual machine not working sharing folder
date: 2019-02-27T20:40:29+02:00
author: Yakup Contarlı
layout: post
guid: http://localhost/bilisimkurdu/?p=417
permalink: /vmware-workstation-linux-virtual-machine-not-working-sharing-folder/
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
image: /wp-content/uploads/2019/02/VMwareHorizon.jpg
categories:
  - Genel
  - Linux
tags:
  - linux
  - ubuntu
  - VMware
  - vmware klasör paylaşım çalışmıyor
  - vmware linux klasör paylaşım çalışmıyor
  - VMware Linux virtual machine not working sharing folder
  - VMware tool
  - VMware Workstation Linux virtual machine not working sharing folder
---
Merhabalar Muhterem Ziyaretçiler,

Bu yazımda VMware Workstation ile oluşturulan linux sanal makinelerde klasör paylaşımı problemini çözümü konusunda yöntemleri sıralayacağım.

<!--more-->

Bu yazımda VMware Workstation ile oluşturulan linux sanal makinelerde klasör paylaşımı problemini çözümü konusunda yöntemleri sıralayacağım.

  * open-vm-tool paketlerin kaldırılarak programda bulunan VM tool paketinin kurulması.

<blockquote class="wp-block-quote">
  <p>
    VMware Tool linux sistemlerinde kurulum için göz atabilirsiniz;
  </p>
  
  <p>
    <a href="https://www.vmware.com/support/ws5/doc/ws_newguest_tools_linux.html">https://www.vmware.com/support/ws5/do/ws_newguest_tools_linux.html</a>
  </p>
</blockquote>

  * Aşağıdaki komutları sırasıyla giriniz ve /mnt/hgfs klasörünü kontrol edebilirsiniz.

<pre class="wp-block-code"><code>//debian tabanlı işletim sistemlerinde(ubuntu,pardus,...)
sudo vmhgfs-fuse .host:/ /mnt/hgfs -o allow_other
sudo .host:/ /mnt/hgfs fuse.vmhgfs-fuse allow_other 0 0
//fedora tabanlı işletim sistemlerinde
su -c "vmhgfs-fuse .host:/ /mnt/hgfs -o allow_other"
su -c ".host:/ /mnt/hgfs fuse.vmhgfs-fuse allow_other 0 0"
//Suse tabanlı işletim sistemlerinde
su vmhgfs-fuse .host:/ /mnt/hgfs -o allow_other
su .host:/ /mnt/hgfs fuse.vmhgfs-fuse allow_other 0 0</code></pre>

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz. 

İyi akşamlar.