/*** Use jQuery to support all screen resolutions ***/

$(document).ready(function(){
	/** Set variables **/
	setTimeout(function() {
	var contentHeight = $("#content").height();
	var footerHeight = $("#footer").height();
	var screenHeight = $(window).height();
	var intialScreenHeight = screenHeight;
	var difference = (screenHeight-contentHeight-footerHeight)/16;
	$("#push").css("height", difference + 'em');
	}, 300);
	
	/** Run slideshow **/
	runSlideShow(20, 300);
	
	var imgHeight = $("#imgreference").height()/16;
	$("#plasmacontent").css("margin-top", imgHeight + 'em');
	
	$(window).resize(function(){
		 screenHeight = $(window).height() + ($(window).height() - intialScreenHeight);
		 contentHeight = $("#content").height();
		 footerHeight = $("#footer").height();
		 difference = (screenHeight-contentHeight-footerHeight)/16;
		$("#push").css("height", difference + 'em');
	 });
});