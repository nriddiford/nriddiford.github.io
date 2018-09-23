// Get height of screen for header
$(document).ready(function () {
    $('.header').height($(window).height());
});

// // Get height of screen for container sizing
// $(document).ready(function(){
//     $('.container').height($(window).height());
// });


// Scroll to id
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




// GENERAL SETTING


// // Custom Settings
// sr.reveal('.foo-1', { duration: 200 });
//
// sr.reveal('.foo-2', {
//     origin: 'right',
//     duration: 2000
// });
//
// sr.reveal('.foo-3', {
//     rotate: { x: 100, y: 100, z: 0 },
//     duration: 1000
// });
//
// sr.reveal('.foo-4', {
//     viewFactor: 0.5
// });
//
// sr.reveal('.foo-5', {
//     duration: 200
// });