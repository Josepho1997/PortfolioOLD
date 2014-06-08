/*** Use jQuery to support all screen resolutions ***/

$(document).ready(function(){
	var contentHeight = $("#content").height();
	var footerHeight = $("#footer").height();
	var screenHeight =  screen.height;
	var difference = (screenHeight-contentHeight-footerHeight)/16;
	
	$("#push").css("height", difference + 'em');
	
	$(window).resize(function(){
		 contentHeight = $("#content").height();
		 footerHeight = $("#footer").height();
		 difference = (screenHeight-contentHeight-footerHeight)/16;
		$("#push").css("height", difference + 'em');
	 });
});