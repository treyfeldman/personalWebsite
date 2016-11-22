$(window).ready(function() {
    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() >= 150) {
                $('link-bar').addClass('stick');
            }
            else {
                $('link-bar').removeClass('stick');
            }
        });
    });
}
