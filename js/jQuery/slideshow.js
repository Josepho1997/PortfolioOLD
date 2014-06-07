/*** My own custom written slide show that took me way too long to make ***/

$(document).ready(function(){
	 var images = $('ul.ssimages li');
	 var lastElem = images.length-1;
	 var target;
	 var initialMargin = parseInt($(".ssimages li").css("marginLeft"));
	 var position = 0;
	 var imageWidth = images.width() + 20;
	 alert(imageWidth);
	 var hasMoved = false;
	 var hasResized = false;
	 var windowWidth;
	 var windowHeight;
	 
	 //Set CSS Properties
	 $(".ssimages li").css("display", "inline-block");
	 $(".ssimages li").css("position", "absolute");
	 
	 images.first().addClass('selected');
	 
	 function slide(target) {
		 images.removeClass('selected').eq(target).addClass('selected');


		 for(var i = 0; i < images.length; i++) {
			 if(target != 0) { 
				if(i != target && i != target-1) {
				 	$(images[i]).css('opacity', '0');  
				} else {
					$(images[i]).css('opacity', '1');
				}
			 } else {
				 if(i != target && i != lastElem) {
					$(images[i]).css('opacity', '0');  
				} else {
					$(images[i]).css('opacity', '1'); 
				}
			 }
		  }


		 $(images[target]).fadeIn({queue: false, duration: 2000});
		 $(images[target]).animate({left: 0 + 'px'}, 2000);

		 
		 if(target != 0) {
			 $(images[target-1]).fadeOut({queue: false, duration: 2000});
			 $(images[target-1]).animate({left: -imageWidth + 'px'}, 2000);
			 $(images[target-1]).animate({left: imageWidth + 'px'}, 2000);
		 } else {
			 $(images[lastElem]).fadeOut({queue: false, duration: 2000});
			 $(images[lastElem]).animate({left: -imageWidth + 'px'}, 2000);
			 $(images[lastElem]).animate({left: imageWidth + 'px'}, 2000);
		 }
		 hasMoved = true;
	 }
	 
	 if(hasResized === false) {
		 windowWidth = $(window).width();
 		 windowHeight = $(window).height();
		 var imgWidth = $(images[1]).width();
		 var marginL = (((windowWidth/2) - (imgWidth/2)) / windowWidth) * 100;
		 $(".ssimages li").css("margin-left", '' + marginL + '%');
		 hasResized = true;
	 }
	 
	 $(window).resize(function(){
		 windowWidth = $(window).width();
 		 windowHeight = $(window).height();
		 var imgWidth = $(images[1]).width();
		 var marginL = (((windowWidth/2) - (imgWidth/2)) / windowWidth) * 100;
		 $(".ssimages li").css("margin-left", '' + marginL + '%');
	 });
	 
	 function sliderTiming() {
	   target = $('ul.ssimages li.selected').index();
	   target === lastElem ? target = 0 : target = target+1;
	   slide(target);
	 };
	 
	 if(hasMoved === false) {
		 for(var i = 0; i < images.length; i++) {
			  if(i === 0) {
				$(images[0]).css('opacity', '1');  
			  } else {
				  $(images[i]).animate({left: position+imageWidth + 'px'}, 2000);
				  $(images[i]).css('opacity', '0'); 
			  }
		  }
	 }	 
	 
	if(hasResized === false) {
		 windowWidth = $(window).width();
 		 windowHeight = $(window).height();
		 var imageWidth = $(images[1]).width();
		 var marginL = (((windowWidth/2) - (imageWidth/2)) / windowWidth) * 100;
		 $(".ssimages li").css("margin-left", '' + marginL + '%');
		 margin = parseInt($(".ssimages li").css("marginLeft"));
		 position = margin;
	 }

	var timingRun = setInterval(function() { sliderTiming(); },5000);
	function resetTiming() {
		clearInterval(timingRun);
		timingRun = setInterval(function() { sliderTiming(); },5000);
	};
});