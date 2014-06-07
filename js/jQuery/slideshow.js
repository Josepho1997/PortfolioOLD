/*** My own custom written slide show that took me way too long to make ***/

$(document).ready(function(){
	 var images = $('ul.ssimages li');
	 var lastElem = images.length-1;
	 var target;
	 var margin = parseInt($(".ssimages li").css("marginLeft"));
	 var position = margin /((margin/24)/2)
	 var imageWidth = images.width();
	 var hasMoved = false;
	 
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
		 $(images[target]).animate({left:position + 'px'}, 2000);		
		// alert(target);

		 
		 if(target != 0) {
			 $(images[target-1]).fadeOut({queue: false, duration: 2000});
			 $(images[target-1]).animate({left: position-imageWidth + 'px'}, 2000);
			 $(images[target-1]).animate({left:position+imageWidth + 'px'}, 2000);
		 } else {
			 $(images[lastElem]).fadeOut({queue: false, duration: 2000});
			 $(images[lastElem]).animate({left: position-imageWidth + 'px'}, 2000);
			 $(images[lastElem]).animate({left:position+imageWidth + 'px'}, 2000);
		 }
		 
		 
		 hasMoved = true;

	 }
	 
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

	var timingRun = setInterval(function() { sliderTiming(); },5000);
	function resetTiming() {
		clearInterval(timingRun);
		timingRun = setInterval(function() { sliderTiming(); },5000);
	};
});