// Get height of screen for header
$(document).ready(function () {
    $('.header').height($(window).height());
});

// Scroll to id from nav items
$(".navbar a").click(function () {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top - $('.navbar').height() - 10
    }, 1000)

});

// Header button -> scroll down
$(".header button").click(function () {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top - $('.navbar').height() - 10
    }, 1000)

});

// Reveal text on scroll through
window.sr = ScrollReveal({ reset: true });
sr.reveal('.reveal', { opacity: 0.1, duration:600 });
