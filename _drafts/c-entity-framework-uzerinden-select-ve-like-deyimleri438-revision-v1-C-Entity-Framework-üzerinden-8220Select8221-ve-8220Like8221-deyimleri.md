---
id: 439
title: 'C# Entity Framework üzerinden &#8220;Select&#8221; ve &#8220;Like&#8221; deyimleri'
date: 2019-03-13T22:20:13+02:00
author: Yakup Contarlı
layout: revision
guid: http://localhost/bilisimkurdu/438-revision-v1/
permalink: /438-revision-v1/
---
Merhaba Muhterem Ziyaretçiler,

Bu yazımda C# Entity Framework üzerinden birtakım sorguları yapılması üzerinden duracağım.

Bildiğiniz üzere C# derslerini Youtube üzerinden yayınlamaktaydım. Yaptığınız geri bildirimlerinize istinaden dersleri blog üzerinden yoğunlaştırmaya karar verdim.

<!--more-->

Şimdi başlayalım;

**Where**

SQL dilinde &#8220;Where&#8221; ifadesini aşağıdaki gibi kullanıyorduk;

<pre class="wp-block-code"><code>SELECT secilecekSatir FROM tabloAdi WHERE i //i = Where sorgusunda kullanılan ifadeler</code></pre>

Entity sorgumuzda kullandığımız context ve entitiesleri tanımladığımız varsayarak;

**s** parametrasiyle studentName değeri &#8220;Bill&#8221; değerini içeren ögeleri listeledik.

<pre class="wp-block-code"><code>//Entity Framework 
//SchoolDBEntities tanımladığımızı varsayıyoruz.
using (var context = new SchoolDBEntities())
{
    var query = context.Students
                       .where(s => s.StudentName == "Bill")
                       .FirstOrDefault&lt;Student>();
}</code></pre>

**Like**

SQL dilinde &#8220;Like&#8221; ifadesini aşağıdaki gibi kullanıyorduk; 

<pre class="wp-block-code"><code>SELECT secilecekSatir FROM tabloAdi WHERE 
satir LIKE i //i = Like sorgusunda kullanılan ifadeler</code></pre>

Entity sorgumuzda kullandığımız context ve entitiesleri tanımladığımız varsayarak; 

`person` değişkenini `context.People` içine alınıp `where person.FirstName.Like("Col%")`deyiminden sonra seçilmekte.

<pre class="wp-block-code"><code>var query =
    from person in context.People
    where person.FirstName.Like("Col%")
    select person;</code></pre>

Bu yazımla birlikte C# Entity Framework temel sorguları anlatmış oldum.

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz.

İyi akşamlar.