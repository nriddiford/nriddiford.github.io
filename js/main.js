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

// // Reveal text on scroll through
// window.sr = ScrollReveal({
//     reset: true,
//     easing: 'ease-in'
// });
// sr.reveal('.reveal', { opacity: 0.1, duration:600 });
ScrollReveal().reveal('.reveal', {reset: true})
// ScrollReveal().reveal('.reveal', { reset: true, easing: 'ease-in', opacity: 0.1, duration:600 });