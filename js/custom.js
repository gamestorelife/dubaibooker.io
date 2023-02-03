/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Home Slider
4. Init Menu
5. Init Search
6. Init CTA Slider
7. Init Testimonials Slider
8. Init Search Form


******************************/




/** document.getElementById("villas-smenu").style.display = "visible";
document.getElementById("hotels-smenu").style.display = "none";
document.getElementById("apparts-smenu").style.display = "none";
*/

/**Adults   */





















$(function() { 
	$('.menu2').addClass('hiddenm');
	$('.mkids-age1').hide();
	$('.mkids-age2').hide();
	$('.mkids-age3').hide();
	$('.mkids-age4').hide();
	$('.mkids-age5').hide();
	$('.mkids-age6').hide();
	$('.red-notification').hide();
 });










$(document).ready(function()
{
		

		$('.selec-Children').on('change', function() {
    
			if ( $('.selec-Children').val() == '0' ) kidz();
			else if ( $('.selec-Children').val() == '1' ) kid1();
			else if ( $('.selec-Children').val() == '2' ) kid2();
			else if ( $('.selec-Children').val() == '3' ) kid3();
			else if ( $('.selec-Children').val() == '4' ) kid4();
			else if ( $('.selec-Children').val() == '5' ) kid5();
			else if ( $('.selec-Children').val() == '6' ) kid6();
		  });


		  


		$('.1stkid').on('change', function(){
			if ($('.1stkid').val() == '0') doAge();
			else if ($('.1stkid').val() >= '1') agelogic1();
			
		});
		function agelogic1() {
			if ($('.selec-Children').val() >= '2'  &  $('.2kid').val() == '0') doAge();
			if ($('.selec-Children').val() == '1') ageDone();
			if ($('.selec-Children').val() == '2') re1l2();
			if ($('.selec-Children').val() == '3') re1l3();
			if ($('.selec-Children').val() == '4') re1l4();
			if ($('.selec-Children').val() == '5') re1l5();
			if ($('.selec-Children').val() == '6') re1l6();	
		}
		function re1l2() {
			if ($('.2kid').val() == '0') doAge();
			else if ($('.2kid').val() >= '1'  &&  $('.1stkid').val() >= '1') ageDone();
		}
		function re1l3() {
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.3rdkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&  $('.1stkid').val() >= '1') ageDone();
		}
		function re1l4() {
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			else if ($('.4rthkid').val() >= '1'  &&  $('.3rdkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&  $('.1stkid').val() >= '1') ageDone();
		}
		function re1l5() {
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			else if ($('.5kid').val() >= '1'  &&  $('.4rthkid').val() >= '1'  &&  $('.3rdkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&  $('.1stkid').val() >= '1') ageDone();
		}
		function re1l6() {
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			if ($('.6kid').val() == '0') doAge();
			else if ($('.6kid').val() >= '1'  &&  $('.5kid').val() >= '1'  &&  $('.4rthkid').val() >= '1'  &&  $('.3rdkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&  $('.1stkid').val() >= '1') ageDone();
		}



		$('.2kid').on('change', function(){
			if ($('.2kid').val() == '0') doAge();
			else if ($('.2kid').val() >= '1') agelogic2();
			
		})
		function agelogic2() {
			if ($('.selec-Children').val() >= '2'  &  $('.1stkid').val() == '0') doAge();
			else if ($('.selec-Children').val() == '2' &  $('.1stkid').val() >= '1' ) ageDone();
			if ($('.selec-Children').val() == '3') re2l3();
			if ($('.selec-Children').val() == '4') re2l4();
			if ($('.selec-Children').val() == '5') re2l5();
			if ($('.selec-Children').val() == '6') re2l6();
		}
		function re2l3() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.3rdkid').val() >= '1' &&  $('.2kid').val() >= '1'  &&  $('.1stkid').val() >= '1' ) ageDone();
		}
		function re2l4() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			else if ($('.1stkid').val() >= '1'  &&  $('.3rdkid').val() >= '1' &&  $('.4rthkid').val() >= '1' ) ageDone(); 

		}
		function re2l5() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			else if ($('.5kid').val() >= '1' && $('.1stkid').val() >= '1'  &&  $('.3rdkid').val() >= '1' &&  $('.4rthkid').val() >= '1') ageDone();
		}
		function re2l6() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			if ($('.6kid').val() == '0') doAge();
			else if ($('.6kid').val() >= '1' && $('.5kid').val() >= '1' && $('.1stkid').val() >= '1'  &&  $('.3rdkid').val() >= '1' &&  $('.4rthkid').val() >= '1') ageDone();
		}



		$('.3rdkid').on('change', function(){
			if($('.3rdkid').val() == '0' ) doAge();
			else if ($('.3rdkid').val() >= '1' ) agelogic3();
		})
		function agelogic3() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			else if ($('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1') ageDone();
			if ($('.selec-Children').val() == '4') re3l4();
			if ($('.selec-Children').val() == '5') re3l5();
			if ($('.selec-Children').val() == '6') re3l6();
		}
		
		function re3l4() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			else if ($('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&   $('.4rthkid').val() >= '1') agedone();
			
		}
		function re3l5() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			else if ($('.5kid').val() >= '1'  &&  $('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&   $('.4rthkid').val() >= '1') ageDone();
		}
		function re3l6() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			if ($('.6kid').val() == '0') doAge();
			else if ($('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'   &&     $('.4rthkid').val() >= '1'    &&  $('.5kid').val() >= '1' &&  $('6kid').val() >= '1' ) ageDone();
			
		}


		$('.4rthkid').on('change', function(){
			if($('.4rthkid').val() == '0') doAge();
			else if($('.4rthkid').val() >= '1') agelogic4();
		})
		function agelogic4() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			else if ($('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&  $('.3rdkid').val() >= '1') ageDone();
			if ($('.selec-Children').val() == '5') re4l5();
			if ($('.selec-Children').val() == '6') re4l6();
			
		}
		function re4l5() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			else if ($('.5kid').val() >= '1'  &&  $('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&   $('.3rdkid').val() >= '1') ageDone();
			
		}
		function re4l6() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			if ($('.6kid').val() == '0') doAge();
			else if ($('6kid').val() >= '1'  &&  $('.5kid').val() >= '1'  &&  $('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&   $('.3rdkid').val() >= '1') ageDone();
		}


		$('.5kid').on('change', function(){
			if ($('.5kid').val() == '0') doAge();
			else if ($('.5kid').val() >= '1') agelogic5();
		})
		function agelogic5() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			else if ( $('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&   $('.3rdkid').val() >= '1'  &&  $('.4rthkid').val() >= '1'  ) ageDone();
			if ($('.selec-Children').val() == '6') re5l6();
		}
		function re5l6() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.6kid').val() == '0') doAge();
			else if ( $('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&   $('.3rdkid').val() >= '1'  &&  $('.4rthkid').val() >= '1'  &&  $('6kid').val() >= '1' ) ageDone();
		}

		
		$('.6kid').on('change', function(){
			if ($('.6kid').val() == '0') doAge();
			else if ($('.6kid').val()  >= '1') agelogic6();
		})
		function agelogic6() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			else if ($('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&   $('.3rdkid').val() >= '1' &&  $('.4rthkid').val() >= '1'  &&   $('.5kid').val() >= '1') ageDone();
			else if ($('.selec-Children').val() == '6') re6l6();
		}
		function re6l6() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			else if ( $('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&   $('.3rdkid').val() >= '1'  &&  $('.4rthkid').val() >= '1'   &&  $('.5kid').val() >= '1' ) ageDone();
		}




		function doAge() {
			$('.red-notification').show();
			
		}

		function ageDone() {
			$('.red-notification').hide();
			
		}

		function hero1 () {
		if ($('.1stkid').val() == '0' & $('.selec-Children').val() == '0' ) hideAll();
		else if ($('.1stkid').val() == '0' & $('.selec-Children').val() >= '1' ) staystill();
		else if ($('.1stkid').val() >= '1' & $('.selec-Children').val() >= '1' ) hideAll();
		}
		function hero2 () {
			if ($('.2kid').val() == '0' & $('.selec-Children').val() >= '2' ) staystill();
			else if ($('.2kid').val() >= '1' & $('.selec-Children').val() >= '2' ) hideAll();
			
			}
		function hero3 () {
			if ($('.3rdkid').val() == '0' & $('.selec-Children').val() >= '3' ) staystill();
		}	

		function hero4 () {
			if ($('.4rthkid').val() == '0' & $('.selec-Children').val() >= '4') staystill();
		}
		function hero5() {
			if ($('.5kid').val() == '0' & $('.selec-Children').val() >= '5') staystill();
		}
		
		function hero5() {
			if ($('.6kid').val() == '0'  &  $('.selec-Children').val() >= '6') staystill();
		}		



		


		$('.done-close').click(function(){
			hero1();
			hero2();
			hero3();
			hero4();
			hero5();
			allpersons();
		});

		function allpersons() {
			var tradults = $("#qty1").val();
			var allkids = $(".selec-Children").val();

			document.getElementById("aladults").innerHTML = tradults;
			document.getElementById("alkids").innerHTML = allkids;
			
		}








		function hideAll(){
			$('.menu2').hide();
		}

		function staystill() {
			$('.menu2').show();
		}





		function kidz() {
		$('.mkids-age1').hide()
		$('.mkids-age2').hide()
		$('.mkids-age3').hide()
		$('.mkids-age4').hide()
		$('.mkids-age5').hide()
		$('.mkids-age6').hide()
		$('.red-notification').hide();
		
		
		  }
		function kid1() {
			$('.mkids-age1').show()
			$('.mkids-age2').hide()
			$('.mkids-age3').hide()
			$('.mkids-age4').hide()
			$('.mkids-age5').hide()
			$('.mkids-age6').hide()
			ageNote1()
		  }

		function ageNote1() {
			if($('.1stkid').val() >= '1') ageDone();
			else if($('.1stkid').val() == '0') doAge();
		}

		function kid2() {
			$('.mkids-age1').show();
			$('.mkids-age2').show();
			$('.mkids-age3').hide();
			$('.mkids-age4').hide();
			$('.mkids-age5').hide();
			$('.mkids-age6').hide();
			
			ageNote1();
			ageNote2();
			
		}

		function ageNote2() {
			if ($('.2kid').val() == '0') doAge();
			else if($('.2kid').val() >= '1') ageDone();
			 
			
		}


		

		function kid3() {
			$('.mkids-age1').show()
			$('.mkids-age2').show()
			$('.mkids-age3').show()
			$('.mkids-age4').hide()
			$('.mkids-age5').hide()
			$('.mkids-age6').hide()
			ageNote3();
		}
		function ageNote3() {
			ageNote1();
			ageNote2();
			if($('.3rdkid').val() == '0') doAge();
			else if ($('.3rdkid').val() >= '1') ageDone();

		}



		function kid4() {
			$('.mkids-age1').show()
			$('.mkids-age2').show()
			$('.mkids-age3').show()
			$('.mkids-age4').show()
			$('.mkids-age5').hide()
			$('.mkids-age6').hide()
			ageNote4();
		}
		function ageNote4() {
			ageNote1();
			ageNote2();
			ageNote3();
			if ($('.4rthkid').val() == '0') doAge();
			else if ($('.4rthkid').val() >= '1') ageDone();
		};


		function kid5() {
			$('.mkids-age1').show();
			$('.mkids-age2').show();
			$('.mkids-age3').show();
			$('.mkids-age4').show();
			$('.mkids-age5').show();
			$('.mkids-age6').hide();
			ageNote5();
		}
		function ageNote5() {
			ageNote1();
			ageNote2()
			ageNote3();
			ageNote4();
			if ($('.5kid').val() == '0') doAge();
			else if ($('.5kid').val() >= '1') ageDone();

		};


		function kid6() {
			$('.mkids-age1').show()
			$('.mkids-age2').show()
			$('.mkids-age3').show()
			$('.mkids-age4').show()
			$('.mkids-age5').show()
			$('.mkids-age6').show()
			ageNote6();
		};
		function ageNote6() {
			ageNote1();
			ageNote2();
			ageNote3();
			ageNote4();
			ageNote5();
			if ($('.6kid').val() == '0') doAge();
			else if ($('.6kid').val() >= '1') ageDone();
		}



		
		$('.hamburger2').click(function(){
			$('.menu2').show();
			
		});
		
		







		$("#villas-smenu").show();
		$("#hotels-smenu").hide();
		$("#apparts-smenu").hide();

	$("#vill-action").click(function(){
		
		$("#villas-smenu").show(500);
		$("#hotels-smenu").hide();
		$("#apparts-smenu").hide();
	  });

	  $("#hotel-action").click(function(){
		
		$("#villas-smenu").hide();
		$("#hotels-smenu").show(500);
		$("#apparts-smenu").hide();
	  });


	  $("#appart-action").click(function(){
		$("#apparts-smenu").show(500);
		$("#villas-smenu").hide();
		$("#hotels-smenu").hide();
	  });





	  $("#roundedk1").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".box").hide();
            }
        });
    }).change();
	  

	$('#roundedk-in').Zebra_DatePicker({
		direction: true,
		pair: $('#roundedk-out')
	}); 
	$('#roundedk-out').Zebra_DatePicker({
		direction: 1
	});
	  

	
	$('#roundedk-hotl-in').Zebra_DatePicker({
		direction: true,
		pair: $('#roundedk-hotl-out')
	}); 
	$('#roundedk-hotl-out').Zebra_DatePicker({
		direction: 1
	});


	$('#roundedk-apart-in').Zebra_DatePicker({
		direction: true,
		pair: $('#roundedk-apart-out')
	}); 
	$('#roundedk-apart-out').Zebra_DatePicker({
		direction: 1
	});


		
	$('#roundedk-activity').Zebra_DatePicker();



	$('#roundedk-serv-in').Zebra_DatePicker({
		direction: true,
		pair: $('#roundedk-serv-out')
	}); 
	$('#roundedk-serv-out').Zebra_DatePicker({
		direction: 1
	});


	$('#roundedk-trans-in').Zebra_DatePicker({
		format: 'Y-m-d H:i',
		direction: true,
		pair: $('#roundedk-trans-out')
	}); 
	$('#roundedk-trans-out').Zebra_DatePicker({
		direction: 1,
		format: 'Y-m-d H:i',
	});


	$('#roundedk-reservaton').Zebra_DatePicker({
		format: 'Y-m-d H:i',
	});



	
	"use strict";

	/* 

	1. Vars and Inits

	*/





	var menu = $('.menu');
	var menuActive = false;
	var header = $('.header');
	var searchActive = false;

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initHomeSlider();
	initMenu();
	initSearch();
	initCtaSlider();
	initTestSlider();
	initSearchForm();

	/* 
	2. Set Header
	*/

	function setHeader()
	{
		if(window.innerWidth < 992)
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		else
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
	}

	/* 

	3. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');

			homeSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:false,
				smartSpeed:1200,
				dotsContainer:'main_slider_custom_dots'
			});

			/* Custom nav events */
			if($('.home_slider_prev').length)
			{
				var prev = $('.home_slider_prev');

				prev.on('click', function()
				{
					homeSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.home_slider_next').length)
			{
				var next = $('.home_slider_next');

				next.on('click', function()
				{
					homeSlider.trigger('next.owl.carousel');
				});
			}

			/* Custom dots events */
			if($('.home_slider_custom_dot').length)
			{
				$('.home_slider_custom_dot').on('click', function()
				{
					$('.home_slider_custom_dot').removeClass('active');
					$(this).addClass('active');
					homeSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
				});
			}

			/* Change active class for dots when slide changes by nav or touch */
			homeSlider.on('changed.owl.carousel', function(event)
			{
				$('.home_slider_custom_dot').removeClass('active');
				$('.home_slider_custom_dots li').eq(event.page.index).addClass('active');
			});	

			// add animate.css class(es) to the elements to be animated
			function setAnimation ( _elem, _InOut )
			{
				// Store all animationend event name in a string.
				// cf animate.css documentation
				var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

				_elem.each ( function ()
				{
					var $elem = $(this);
					var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

					$elem.addClass($animationType).one(animationEndEvent, function ()
					{
						$elem.removeClass($animationType); // remove animate.css Class at the end of the animations
					});
				});
			}

			// Fired before current slide change
			homeSlider.on('change.owl.carousel', function(event)
			{
				var $currentItem = $('.home_slider_item', homeSlider).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-out]");
				setAnimation ($elemsToanim, 'out');
			});

			// Fired after current slide has been changed
			homeSlider.on('changed.owl.carousel', function(event)
			{
				var $currentItem = $('.home_slider_item', homeSlider).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-in]");
				setAnimation ($elemsToanim, 'in');
			})
		}
	}

	/* 

	4. Init Menu

	*/

	function initMenu()
	{
		if($('.hamburger').length && $('.menu').length)
		{
			var hamb = $('.hamburger');
			var close = $('.menu_close_container');

			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

			close.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

	
		}
	}





	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	5. Init Search

	*/

	function initSearch()
	{
		if($('.search_tab').length)
		{
			$('.search_tab').on('click', function()
			{
				$('.search_tab').removeClass('active');
				$(this).addClass('active');
				var clickedIndex = $('.search_tab').index(this);

				var panels = $('.search_panel');
				panels.removeClass('active');
				$(panels[clickedIndex]).addClass('active');
			});
		}


		  if($('.search_tab_lil').length)
		{
			$('.search_tab_lil').on('click', function()
			{
				$('.search_tab_lil').removeClass('active');
				$(this).addClass('active');
				var clickedIndex = $('.search_tab_lil').index(this);

				var panes = $('.menu-nav');
				panes.removeClass('active');
				$(panes[clickedIndex]).addClass('active');
			});
		}
		

		

















	}

	/* 

	6. Init CTA Slider

	*/

	function initCtaSlider()
	{
		if($('.cta_slider').length)
		{
			var ctaSlider = $('.cta_slider');

			ctaSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:false,
				nav:false,
				dots:false,
				smartSpeed:1200
			});

			/* Custom nav events */
			if($('.cta_slider_prev').length)
			{
				var prev = $('.cta_slider_prev');

				prev.on('click', function()
				{
					ctaSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.cta_slider_next').length)
			{
				var next = $('.cta_slider_next');

				next.on('click', function()
				{
					ctaSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	7. Init Testimonials Slider

	*/

	function initTestSlider()
	{
		if($('.test_slider').length)
		{
			var testSlider = $('.test_slider');

			testSlider.owlCarousel(
			{
				loop:true,
				nav:false,
				dots:false,
				smartSpeed:1200,
				margin:30,
				responsive:
				{
					0:{items:1},
					480:{items:1},
					768:{items:2},
					992:{items:3}
				}
			});

			/* Custom nav events */
			if($('.test_slider_prev').length)
			{
				var prev = $('.test_slider_prev');

				prev.on('click', function()
				{
					testSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.test_slider_next').length)
			{
				var next = $('.test_slider_next');

				next.on('click', function()
				{
					testSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	8. Init Search Form

	*/

	function initSearchForm()
	{
		if($('.search_form').length)
		{
			var searchForm = $('.search_form');
			var searchInput = $('.search_content_input');
			var searchButton = $('.content_search');

			searchButton.on('click', function(event)
			{
				event.stopPropagation();

				if(!searchActive)
				{
					searchForm.addClass('active');
					searchActive = true;

					$(document).one('click', function closeForm(e)
					{
						if($(e.target).hasClass('search_content_input'))
						{
							$(document).one('click', closeForm);
						}
						else
						{
							searchForm.removeClass('active');
							searchActive = false;
						}
					});
				}
				else
				{
					searchForm.removeClass('active');
					searchActive = false;
				}
			});	
		}
	}
});