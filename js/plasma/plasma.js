/*** Use jQuery to support all screen resolutions ***/

$(document).ready(function(){
	var contentHeight = $("#content").height();
	var screenHeight =  screen.height;
	var difference = (screenHeight-contentHeight)/16;
	
	$(window).resize(function(){
		 contentHeight = $("#content").height();
		 windowHeight =  $(window).height();
		 difference = (screenHeight-contentHeight)/16;
		$("#push").css("height", difference + 'em');
	 });
});