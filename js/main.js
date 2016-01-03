$(document).ready(function() {

	$('#btn-mob').click(function(e){
	  	e.preventDefault();

	  	$('#menu-dropdown').slideToggle();
	 });

	 $('#menu-dropdown .close').click(function(e){
	  	e.preventDefault();

	  	$('#menu-dropdown').slideUp();
	});
	

	
	$('#btn-phone').click(function(e){
	  	e.preventDefault();

	  	$('.phone-num').toggleClass("active")
  	});	  

})