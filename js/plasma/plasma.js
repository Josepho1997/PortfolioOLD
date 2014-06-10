/*** Use jQuery to support all screen resolutions ***/

$(document).ready(function(){
	/** Set variables **/
	var contentHeight = $("#content").height();
	var footerHeight = $("#footer").height();
	var screenHeight =  screen.height;
	var difference = (screenHeight-contentHeight-footerHeight)/16;
	
	/** Run slideshow **/
	runSlideShow(20, 300);
		
	$("#push").css("height", difference + 'em');

	
	var imgHeight = $("#imgreference").height()/16;
	$("#plasmacontent").css("margin-top", imgHeight + 'em');
	
	$(window).resize(function(){
		 contentHeight = $("#content").height();
		 footerHeight = $("#footer").height();
		 difference = (screenHeight-contentHeight-footerHeight)/16;
		$("#push").css("height", difference + 'em');
		alert(difference);
	 });
});