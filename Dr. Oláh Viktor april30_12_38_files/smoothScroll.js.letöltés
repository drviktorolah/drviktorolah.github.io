$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    const navMain = $(".navbar-collapse");
    const width = $(window).width();

    if(width > 720) {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top 
        }, 1000);
    } else {
        navMain.collapse('hide');

        let headerHeight = $('header').height() - navMain.height();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - headerHeight
        }, 1000);
    }

});

$('#link-up').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});