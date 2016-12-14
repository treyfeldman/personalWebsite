$(window).ready(function() {
	$("link-bar").scroll(function() {
		console.log("hey");
		if($(this).scrollTop() >= 150) {
		    $('link-bar').addClass('stick');
		}
		else {
		    $('link-bar').removeClass('stick');
		}
	    });

	$("p").click(function() {
		$("p").hide();
		console.log("hi");
	    });
	
    });
