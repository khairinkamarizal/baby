( function($) {
  'use strict';


	$(window).on('load', function(){



		/*-------------------------------------------------------------------------------
		  Wow.js
		-------------------------------------------------------------------------------*/



		$('.loader').fadeOut(1000);
		var wow = new WOW({
		    offset: 150,          
		    mobile: false
		  }
		);
		
		wow.init();
	});



	/*-------------------------------------------------------------------------------
	   Animsition Loader
	-------------------------------------------------------------------------------*/



	$(".animsition").animsition({
	   inClass: 'fade-in',
       outClass: 'fade-out',
	   inDuration: 1000,
	   outDuration: 700,
	   linkElement: 'a.project-box',
	   // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
	   loading:true,
	   loadingParentElement: 'body', //animsition wrapper element
	   loadingClass: 'spinner',
	   loadingInner: '<div class="double-bounce1"></div><div class="double-bounce2"></div>', // e.g '<img src="loading.svg" />'
	   timeout: false,
	   timeoutCountdown:5000,
	   onLoadEvent: true,
	   browser: [ 'animation-duration', '-webkit-animation-duration'],
	   // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	   // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	   overlay : false,
	   overlayClass : 'animsition-overlay-slide',
	   overlayParentElement : 'body',
	   transition: function(url){ window.location.href = url; }
	});



	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-with-zoom',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
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
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});


	/*-------------------------------------------------------------------------------
	  Menu
	-------------------------------------------------------------------------------*/



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


	/*-------------------------------------------------------------------------------
	  Owl Carousel
	-------------------------------------------------------------------------------*/


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




	/*-------------------------------------------------------------------------------
	  Full screen sections 
	-------------------------------------------------------------------------------*/


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



	/*------------------------------------------------------------------------------
	   Scroller navigation
	/-------------------------------------------------------------------------------*/



		$('#pp-nav').remove().appendTo('.animsition').addClass('white right-boxed hidden-xs');

		$('.pp-nav-up').on('click', function(){
			$.fn.pagepiling.moveSectionUp();
		});

		$('.pp-nav-down').on('click', function(){
			$.fn.pagepiling.moveSectionDown();
		});
 



    /*-------------------------------------------------------------------------------
	  Change bacgkround on project section
	-------------------------------------------------------------------------------*/



    $('.project-row a').on('mouseover',function(){
    	var index = $('.project-row a').index(this)
    	$('.project-row a').removeClass('active');
    	$(this).addClass('active');
    	$('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
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

owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

var links = document.querySelectorAll(".gallery li a");
var gallery = document.getElementsByClassName("gallery")[0];
var gallerSingleElem = document.getElementsByClassName("gallery-single")[0];
var btnClose = document.getElementById("btnClose");
var image = "";
var title = "";
var desc = "";

// Filter starts here
var filterBtns = document.querySelectorAll(".filter li button");
var items = document.querySelectorAll(".gallery li");
var filterSelected = "";
var itemsHidden;

filterBtns.forEach(function(filterBtn) {
  filterBtn.addEventListener("click", function(e) {
    // Filter button active
    filterBtns.forEach(function(item) {
      item.parentNode.classList.remove("active");
    });
    this.parentNode.classList.add("active");

    // reset
    items.forEach(function(item) {
      item.classList.remove("hidden");
      setTimeout(function() {
        item.classList.add("shown");
      }, 700);
    });
    filterSelected = this.getAttribute("data-filter");

    // hide rest of the items
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
// Filter ends here

(function() {

    var slidersContainer = document.querySelector('.sliders-container');

    // Initializing the numbers slider
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

    // Initializing the titles slider
    var titles = [
        'Illustration',
        '3D Modelling',
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

    // Initializing the links slider
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

    // Get pagination items
    var pagination = document.querySelector('.pagination');
    var paginationItems = [].slice.call(pagination.children);

    // Initializing the images slider
    var msImages = new MomentumSlider({
        // Element to append the slider
        el: slidersContainer,
        // CSS class to reference the slider
        cssClass: 'ms--images',
        // Generate the 4 slides required
        range: [0, 4],
        rangeContent: function () {
            return '<div class="ms-slide__image-container"><a href="portfolio.html"><div class="ms-slide__image"></div></a></div>';
        },
        // Syncronize the other sliders
        sync: [msNumbers, msTitles, msLinks],
        // Styles to interpolate as we move the slider
        style: {
            '.ms-slide__image': {
                transform: [{scale: [1.5, 1]}]
            }
        },
        // Update pagination if slider change
        change: function(newIndex, oldIndex) {
            if (typeof oldIndex !== 'undefined') {
                paginationItems[oldIndex].classList.remove('pagination__item--active');
            }
            paginationItems[newIndex].classList.add('pagination__item--active');
        }
    });

    // Select corresponding slider item when a pagination button is clicked
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