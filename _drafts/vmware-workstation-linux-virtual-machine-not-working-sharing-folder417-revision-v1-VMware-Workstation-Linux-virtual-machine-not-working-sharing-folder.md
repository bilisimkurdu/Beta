---
id: 419
title: VMware Workstation Linux virtual machine not working sharing folder
date: 2019-02-27T20:41:24+02:00
author: Yakup Contarlı
layout: revision
guid: http://localhost/bilisimkurdu/417-revision-v1/
permalink: /417-revision-v1/
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