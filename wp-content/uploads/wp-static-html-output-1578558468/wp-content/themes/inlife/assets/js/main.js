jQuery(document).ready(function(e){"use strict";e(window).scroll(function(){e(this).scrollTop()>250?e("#scroll").fadeIn():e("#scroll").fadeOut()}),e("#scroll").click(function(){return e("html, body").animate({scrollTop:0},800),!1}),e(window).load(function(){var a=e(".grid").imagesLoaded(function(){a.masonry({itemSelector:".grid-item",percentPosition:!0,isAnimated:!0})})}),e("#navbar .menu").slicknav({prependTo:".menu-mobile",label:"",allowParentLinks:!0});var a=e(".single-slide"),i=a.children().length>1?!0:!1;a.owlCarousel({loop:i,nav:i,dots:i,items:1,autoplay:!0,autoplayHoverPause:!0,animateIn:"fadeIn",animateOut:"fadeOut"});var l=e("#home-slider"),o=!0;o=l.children().length>1?!0:!1,l.owlCarousel({loop:o,nav:o,dots:o,items:1,autoplay:!0,autoplayHoverPause:!0,animateIn:"fadeIn",animateOut:"fadeOut"}),e(".post").fitVids(),e(".magnific-gallery").magnificPopup({type:"image",image:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div></div></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},gallery:{enabled:!0},removalDelay:300,mainClass:"mfp-fade"}),e("pre code").each(function(e,a){hljs.highlightBlock(a)})});