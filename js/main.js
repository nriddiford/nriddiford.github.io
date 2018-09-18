// Get height of screen for header
$(document).ready(function(){
    $('.header').height($(window).height());
});


// Scroll to id
$(".navbar a").click(function(){
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)

});

// Header button -> scroll down
$(".header button").click(function(){
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)

});



// // navbar collapse
// $(document).ready(function () {
//
//     $(window).on('scroll', function () {
//         if ($(window).scrollTop() >= 25) { // use any value lower than the navbar height, [20] is an example
//
//             $('.navbar').css({ // reducing the vertical padding from 25px to 10px
//                 'padding-top': '10px',
//                 'padding-bottom': '10px'
//             });
//
//         } else {
//
//             $('.navbar').css({ // reset the vertical padding to its initial value [25px]
//                 'padding-top': '25px',
//                 'padding-bottom': '25px'
//             });
//
//         }
//     });
//
// });