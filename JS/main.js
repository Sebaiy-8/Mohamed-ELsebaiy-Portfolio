jQuery(document).ready(function($){
    $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 500) { // If user scrolls down 500px...
      $('#target').fadeOut(5000);
    }
    });
  });


