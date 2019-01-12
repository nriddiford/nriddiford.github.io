// Get height of screen for header
$(document).ready(function () {
    $('.header').height($(window).height());
});


// Generic scrolling animation
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var element = this.hash;
            var nav_offset = $('.navbar').height() + 15

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(element).offset().top-nav_offset}, 1000, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                // THis was causing problems 13.11.18
                // window.location.hash = element;
            });
        } // End if
    });
});


ScrollReveal().reveal('.reveal', {reset: true})

// Function to move logo from one column to the next on medium screen sizes
function moveCol(x) {
    if (x.matches) { // If media query matches
        document.getElementById('next_col').prepend(
            document.getElementById('logo')
        );
    } else {
        if ($("#next_col").children("#logo").length > 0) {
            document.getElementById('current_col').prepend(
                document.getElementById('logo')
            );
        }
    }
}

var x = window.matchMedia("(max-width: 992px)")
moveCol(x) // Call listener function at run time
x.addListener(moveCol) // Attach listener function on state changes

