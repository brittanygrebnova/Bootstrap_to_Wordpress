$(function() {
  // Cache the window object
  const $window = $(window);

  // Parallax background effect
  $('section[data-type="background"]').each(function() {
    const $bgobj = $(this); // assigning the Object

    $(window).scroll(function() {
      // scroll the background a var speed
      // the yPos is a negative value because we're scrolling it UP!

      const yPos = -($window.scrollTop() / $bgobj.data("speed"));

      // Put together our final background position
      const coords = "50% " + yPos + "px";

      // Move the background
      $bgobj.css({ backgroundPosition: coords });
    }); // end window scroll
  });
});
