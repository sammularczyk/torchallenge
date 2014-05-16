$(document).ready(function() {
  $('a.scroll').click( function() {
    var location = $(this).attr('href');    
    $.scrollTo({
        endY: $(location).offset().top - 30, // position to scroll to
        duration: 500 // duration of animation. 0 for no animation
      });
  });
  
  $("nav").sticky({topSpacing: 20});
});