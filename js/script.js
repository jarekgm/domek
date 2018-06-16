$(document).ready(function() {
  $(".js--oferta").waypoint(function(direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
      $(".js--nav-icon").addClass("sticky-icon");

    } else {
      $("nav").removeClass("sticky");
      $(".js--nav-icon").removeClass("sticky-icon");
    }
  }, {
    offset: "60px;"
  });


// Scrolling to the element

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

$(".js--nav-icon").click(function(){
  var nav = $(".js--main-nav");
  var icon = $('.js--nav-icon i');

  nav.slideToggle(200);

  if (icon.hasClass('fa-bars')) {
      icon.addClass('fa-times');
      icon.removeClass('fa-bars');
  } else {
      icon.addClass('fa-bars');
      icon.removeClass('fa-times');
  }

});

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'imageFadeDuration':200,
      'alwaysShowNavOnTouchDevices':true
    });

});
