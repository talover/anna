$(document).ready(function() {
	$('#btn-mob').click(function(e){
		e.preventDefault();

		$('.main-nav').toggleClass('active');
		$('#overlay').fadeIn();
	});

	$('#overlay').click(function(){
		$('#overlay').fadeOut();
		$('.main-nav').removeClass('active');
		$('#header .main-container .f-right').removeClass("active")
	});

	$('.back_btn').click(function(){
		$('#overlay').fadeOut();
		$('.main-nav').removeClass('active');
		$('#header .main-container .f-right').removeClass("active")
	});

	$('#btn-phone').click(function(e){
		e.preventDefault();
		$('#overlay').fadeIn();
		$('#header .phone-block').toggleClass("active")
	});

	$(".main-nav .dropdown-btn").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(".dropdown").slideToggle();
	});

	$(".products .dropdown-btn").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).next('ul').slideToggle();		
	});


	//fancybox 

	$(".fancybox-popup").click(function(e){
		e.preventDefault();
	})

	$(".fancybox-popup").fancybox({
		wrapCSS:'popup-wrap',
		padding:0
	});


	$('.drop-list li > p').click(function(){
		if(!$(this).hasClass('active')){	
			$('.drop-list li p').removeClass('active').next('p').slideUp(); 
			$(this).addClass('active');	
			$(this).next('p').slideDown(200);	
		} else {
			$(this).removeClass('active').next('p').slideUp();
		}
	});

	

	$(".main-slider").owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		navigation:true,
		addClassActive:true
	});

	
	$('.dresses-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: false,
	  asNavFor: '.slider-nav'
	});

	$('.slider-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.dresses-slider',
	  dots: true,
	  centerMode: true,
	  focusOnSelect: true
	});
		

	$('.photo-slider').slick({
	  slidesToShow:8,
	  slidesToScroll: 8,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  adaptiveHeight: true,
	});

	$('input, select').styler();



	$(window).scroll(function(){
		if($(window).scrollTop() > $("#header").innerHeight() ){
			$('.fixed-wrap').addClass("fixed-top");			
		}	

		else {$('.fixed-wrap').removeClass("fixed-top");}
	});
});