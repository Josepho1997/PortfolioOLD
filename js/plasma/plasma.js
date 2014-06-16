/*** Use jQuery to support all screen resolutions ***/

$(document).ready(function(){
	/** Set variables **/
	var contentHeight = $("#content").height();
	var footerHeight = $("#footer").height();
	var screenHeight = $(window).height();
	var initialHeight = screenHeight;
	var difference = (screenHeight-contentHeight-footerHeight)/16;
	
	if(difference < 50) {
		difference += 300;	
	}
	$("#push").css("height", difference + 'em');
	
	/** Run slideshow **/
	runSlideShow(20, 300);
	
	var imgHeight = $("#imgreference").height()/16;
	$("#plasmacontent").css("margin-top", imgHeight + 'em');
	
	$(window).resize(function(){
		 contentHeight = $("#content").height();
		 footerHeight = $("#footer").height();
		 if(screenHeight < initialHeight) {
		 	screenHeight = $(window).height();
		 }
		 difference = (screenHeight - contentHeight - footerHeight)/16;
		 $("#push").css("height", difference + 'em');
	 });
});