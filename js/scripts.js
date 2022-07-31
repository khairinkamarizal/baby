( function($) {
  'use strict';

	$(window).on('load', function(){
		$('.loader').fadeOut(1000);
		var wow = new WOW({
		    offset: 150,          
		    mobile: false
		  }
		);
		
		wow.init();
	});
	
	$(".animsition").animsition({
	   inClass: 'fade-in',
       outClass: 'fade-out',
	   inDuration: 1000,
	   outDuration: 700,
	   linkElement: 'a.project-box',
	   loading:true,
	   loadingParentElement: 'body',
	   loadingClass: 'spinner',
	   loadingInner: '<div class="double-bounce1"></div><div class="double-bounce2"></div>',
	   timeout: false,
	   timeoutCountdown:5000,
	   onLoadEvent: true,
	   browser: [ 'animation-duration', '-webkit-animation-duration'],
	   overlay : false,
	   overlayClass : 'animsition-overlay-slide',
	   overlayParentElement : 'body',
	   transition: function(url){ window.location.href = url; }
	});


    $(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 //
		}
	});

});

	$('.navbar-toggle').on('click',function(){
		$('body').removeClass('menu-is-closed').addClass('menu-is-opened');
	});

	$('.close-menu, .click-capture, .menu-list li a').on('click', function(){
		$('body').removeClass('menu-is-opened').addClass('menu-is-closed');
		$('.menu-list ul').slideUp(300);
	});

	$('.menu-list li a').on('click', function(){
		$('.menu-list li').removeClass('active');
		$(this).closest('li').addClass('active');

	});


	$('.col-resume').on('mouseover',function(){
		$('.section-bg.mask').addClass('hide');
	});

	$('.col-resume').on('mouseleave', function () {
	  $('.section-bg.mask').removeClass('hide');
	});


	if ($('.owl-carousel').length > 0){

	   $(".review-carousel").owlCarousel({
			responsive:{
		       0:{
		            items:1
		        },
		        720:{
		            items:1,
		            
		        },
		        1280:{
		            items:1
		        }
		    },
		    responsiveRefreshRate:0,
			nav:false,
			navText:[],

		 	dots:true
		});

	}

	function navbarFullpage(){
	 if ( $('.pp-section.active').scrollTop() > 0 ){
    	$('.navbar-fullpage').addClass('navbar-fixed');
      }
      else{
    	$('.navbar-fullpage').removeClass('navbar-fixed');
     }
    }

    navbarFullpage();

    function navbar(){
    $(window).scroll(function(){
    	if ( $(window).scrollTop() > 0 ){
	    	$('.navbar').addClass('navbar-fixed');
	      }
	      else{
	    	$('.navbar').removeClass('navbar-fixed');
	     }
    });
	 
    }

    navbar();

    if ($('.pagepiling').length > 0){
      	$('.pagepiling').pagepiling({
    		scrollingSpeed: 500,
		    loopBottom:true,
		    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
		    afterLoad: function(anchorLink, index){
	           navbarFullpage();
	            
  			}
		});

     }
	 

     $('.pp-scrollable').on('scroll', function () {
    	var scrollTop =$(this).scrollTop();
		if (scrollTop > 0 ) {
			$('.navbar-fullpage').addClass('navbar-fixed');
		}
		else{
			$('.navbar-fullpage').removeClass('navbar-fixed');
		}
	});

		$('#pp-nav').remove().appendTo('.animsition').addClass('white right-boxed hidden-xs');

		$('.pp-nav-up').on('click', function(){
			$.fn.pagepiling.moveSectionUp();
		});

		$('.pp-nav-down').on('click', function(){
			$.fn.pagepiling.moveSectionDown();
		});

})(jQuery);

$(document).ready(function () {
  $('.skill-icons').children('.active').each(function(i) {
    var row = $(this);
    setTimeout(function() {
      row.css('background','#E60965');
    }, 300*i);
  });
});

(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        680: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});

var links = document.querySelectorAll(".gallery li a");
var gallery = document.getElementsByClassName("gallery")[0];
var gallerSingleElem = document.getElementsByClassName("gallery-single")[0];
var btnClose = document.getElementById("btnClose");
var image = "";
var title = "";
var desc = "";

var filterBtns = document.querySelectorAll(".filter li button");
var items = document.querySelectorAll(".gallery li");
var filterSelected = "";
var itemsHidden;

filterBtns.forEach(function(filterBtn) {
  filterBtn.addEventListener("click", function(e) {
    filterBtns.forEach(function(item) {
      item.parentNode.classList.remove("active");
    });
    this.parentNode.classList.add("active");

    items.forEach(function(item) {
      item.classList.remove("hidden");
      setTimeout(function() {
        item.classList.add("shown");
      }, 700);
    });
    filterSelected = this.getAttribute("data-filter");

    if (filterSelected != "all" && filterSelected !== "") {
      itemsHidden = document.querySelectorAll(
        ".gallery li:not([data-filter='" + filterSelected + "'])"
      );
      itemsHidden.forEach(function(item) {
        item.classList.add("hidden");
        setTimeout(function() {
          item.classList.remove("shown");
        }, 700);
      });
    } else {
      items.forEach(function(item) {
        item.classList.remove("hidden");
        setTimeout(function() {
          item.classList.add("shown");
        }, 700);
      });
    }
  });
});

(function() {

    var slidersContainer = document.querySelector('.sliders-container');

    var msNumbers = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--numbers',
        range: [1, 5],
        rangeContent: function (i) {
            return '0' + i;
        },
        style: {
            transform: [{scale: [0.4, 1]}],
            opacity: [0, 1]
        },
        interactive: false
    });

    var titles = [
        'Illustration',
        '3D Modeling',
        'Photography',
        'Digital Marketing',
        'Video Editing'
    ];
    var msTitles = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--titles',
        range: [0, 4],
        rangeContent: function (i) {
            return '<h2>'+ titles[i] +'</h2>';
        },
        vertical: true,
        reverse: true,
        style: {
            opacity: [0, 1]
        },
        interactive: false
    });

    var msLinks = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--links',
        range: [0, 4],
        rangeContent: function () {
            return '<a class="ms-slide__link" href="portfolio.html">View</a>';
        },
        vertical: true,
        interactive: false
    });

    var pagination = document.querySelector('.pagination');
    var paginationItems = [].slice.call(pagination.children);

    var msImages = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--images',
        range: [0, 4],
        rangeContent: function () {
            return '<div class="ms-slide__image-container"><a href="portfolio.html"><div class="ms-slide__image"></div></a></div>';
        },
        sync: [msNumbers, msTitles, msLinks],
        style: {
            '.ms-slide__image': {
                transform: [{scale: [1.5, 1]}]
            }
        },
        change: function(newIndex, oldIndex) {
            if (typeof oldIndex !== 'undefined') {
                paginationItems[oldIndex].classList.remove('pagination__item--active');
            }
            paginationItems[newIndex].classList.add('pagination__item--active');
        }
    });

    pagination.addEventListener('click', function(e) {
        if (e.target.matches('.pagination__button')) {
            var index = paginationItems.indexOf(e.target.parentNode);
            msImages.select(index);
        }
    });

})();

$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});