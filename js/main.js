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


	//Dropdowns

	$(".main-nav .dropdown-btn").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(".dropdown").slideToggle();
	});

	var btn=$(".products .dropdown-btn");
	btn.click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		btn.not(this).next('ul').slideUp();
		btn.not(this).removeClass('active');

		$(this).next('ul').slideToggle();
	});

	var btn=$(".products_top .dropdown-btn");
	btn.click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		btn.not(this).next('ul').slideUp();
		btn.not(this).removeClass('active');

		$(this).next('ul').slideToggle();
	});

	var preview_text=$('.drop-list li > .preview-text');
	var drop_text=$('.drop-list li > .full-text');
	preview_text.click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass("active");

		preview_text.not(this).next('.full-text').slideUp();
		preview_text.not(this).parent().removeClass('active');

		$(this).next('.full-text').slideToggle();
	});

	//fancybox 

	$(".fancybox-popup").click(function(e){
		e.preventDefault();
	})

	$(".fancybox-popup").fancybox({
		wrapCSS:'popup-wrap',
		padding:0
	});

	
	// Sliders

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

	$(window).scroll(function(){
		if($(window).scrollTop() > 0){			
			$('.products ul').slideUp();
			btn.removeClass('active');		
		}	
	});


	function setEqualHeight(columns) { 
		var tallestcolumn = 0; 
		columns.each( function() { 
			currentHeight = $(this).innerHeight(); 
			if(currentHeight > tallestcolumn) { tallestcolumn = currentHeight; } 
		}); 
		columns.height(tallestcolumn); 
	}

	setEqualHeight($(".eq-height"));

	// m-menu


	$("#mob-menu").mmenu();
	
	var API = $("#my-menu").data( "mmenu" );

	$("#mob-btn").click(function() {
		API.open();
	});
});