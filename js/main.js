// Get height of screen for header
$(document).ready(function () {
    $('.header').height($(window).height());
});


// Generic scrolling animation
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            var element = this.hash;
            var nav_offset = $('.navbar').height() + 15
            $('html, body').animate({
                scrollTop: $(element).offset().top-nav_offset}, 1000, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                // THis was causing problems 13.11.18
                // window.location.hash = element;
            });
        }
    });
});

// ScrollReveal().reveal('.reveal', {reset: true})
