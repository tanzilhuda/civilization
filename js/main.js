$(document).ready(function(){
	$(".main_carousel").owlCarousel({
		items:6,
		pagination:false,
		navigation:true,
		slideSpeed:2000,
		theme:"shahali-theme",
		autoPlay:3000,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});
	
});