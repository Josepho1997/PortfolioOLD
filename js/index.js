// JavaScript Document
$(document).ready(function(){
	setTiledBackground("tiledCanvas", "projectlist", 2, 2, "DARKS");
	
	var projectListHeight = $("#projectlist").css("height");
	
	/** JavaScript for the Project Dropdown List **/
	
	var sizeUpAnimationDone = true;
	/** Set the list invisble and height to 0 onLoad **/
	$("#projectlist").css("display", "none");
	$("#projectlist").css("height", "0");
	$("#projectdropbox").on({
   	   mouseenter: function () {
		  if(!$("#projectlist").is(':animated')) {
		  $("#projectlist").css("display", "block");
		  $("#projectlist").animate({height:projectListHeight},800);
		  }
	    },
   	   mouseleave: function () {
		  if(sizeUpAnimationDone) {
          $("#projectlist").animate({height:"0em"},800);
		  sizeUpAnimationDone = false;
		  $("#projectlist").promise().done(function() {
			    sizeUpAnimationDone = true;
			  	$("#projectlist").css("display", "none");
		  });
        }
	   }
	});
	/***************** END *************************/
});
