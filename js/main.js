$(document).ready(function() {
	$('#btn-mob').click(function(e){
		e.preventDefault();

		$('.main-nav').toggleClass('active');
		$('#overlay').fadeIn();
	});

	$('#overlay').click(function(){
		$('#overlay').fadeOut();
		$('.main-nav').removeClass('active');
	});

	$('#btn-phone').click(function(e){
		e.preventDefault();

		$('.phone-num').toggleClass("active")
	});
});