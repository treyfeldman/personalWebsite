$(window).ready(function() {
    console.log("page loaded");
    $(window).scroll(function() {
        if($(this).scrollTop() >= 138) {
            $('.link-bar').addClass('stick');
//            $('.gradient_line').addClass('stick');
        }
        else {
            $('.link-bar').removeClass('stick');
        }
    });
});
