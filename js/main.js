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
});