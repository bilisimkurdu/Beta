---
id: 455
title: 'C# RSS Reader UTF-8 problemi'
date: 2019-04-08T23:09:41+03:00
author: Yakup Contarlı
layout: revision
guid: http://localhost/bilisimkurdu/454-revision-v1/
permalink: /454-revision-v1/
---
Merhaba Muhterem Ziyaretçiler,

Bu yazımda RSS Data çekerken bazı harflerin (ş,ü,ö,İ,ğ,ı,ç) tam olarak görünmemesi hakkında olacak.

<!--more-->

Eğer RSS dosyasını aşağıdaki gibi veya benzer bir kodlarla alıyorsanız;

<pre class="wp-block-code"><code> 
WebClient wclient = new WebClient();  
            string RSSData=wclient.DownloadString(RSSURL);  
            XDocument xml = XDocument.Parse(RSSData);  
            var RSSFeedData = (from x in xml.Descendants("item")  
                             select new RSSFeed  
                             {  
                                 Title = ((string)x.Element("title")),  
                                 Link = ((string)x.Element("link")),  
                                 Description = ((string)x.Element("description")),  
                                 PubDate = ((string)x.Element("pubDate"))  
                             });  
          </code></pre>

Aşağıdaki gibi düzenlemeniz gerekmektedir.

<pre class="wp-block-code"><code>WebClient wclient = new WebClient();
            string RSSData = "";

            using (WebClient webClient = new WebClient())
            {
                webClient.Encoding = Encoding.UTF8;
                RSSData = webClient.DownloadString(RSSURL);
            }

            XDocument xml = XDocument.Parse(RSSData);
            xml.Declaration.Encoding = "utf-8";
            var RSSFeedData = (from x in xml.Descendants("item")
                               select new RSSHaber
                               {
                                   Title = ((string)x.Element("title")),
                                   Link = ((string)x.Element("link")),
                                   Description = ((string)x.Element("description")),
                                   PubDate = ((string)x.Element("pubDate")),


                               }

                               );</code></pre>

Açıklarsak,WebClient türünde webClient nesnesini oluşturarak using deyimi içinde utf-8 uyumlu olacak şekilde parse ettik.

Eğer bu yazıyla ilişkin anlatamadığım\anlaşılamayan konular varsa yazının altına yorum yapabilirsiniz.

İyi akşamlar.