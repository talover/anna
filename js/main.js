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
		
});