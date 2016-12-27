$(window).ready(function() {
	console.log("page loaded");
	$(window).scroll(function() {
		if($(this).scrollTop() >= 135) {
		    $('.link-bar').addClass('stick');
		    $('#resume').addClass('stick-content');
		    $('#photos').addClass('stick-content');
		    if($(this).scrollTop() < 170) {
			$('.mini-trey-logo').css({'left':$(this).scrollTop()-135});
		    }
		    
		    $('.mini-trey-logo').css({'opacity':(($(this).scrollTop()-135)/25)});
		}
		else {
		    $('.link-bar').removeClass('stick');
		    $('#resume').removeClass('stick-content');
		    $('#photos').removeClass('stick-content');
		    $('.mini-trey-logo').css('opacity', 0);
		}
	    });

	
    });
