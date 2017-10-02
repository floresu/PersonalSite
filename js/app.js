$(document).ready(function() {

  // Mobile Function
  $('#hamburger,#close').click(function() {
      $('#hamburger,#close').toggle();
      $('.custom-navigation #left-links').toggleClass('visible');
      $('.custom-navigation #right-links').toggleClass('visible');
  });

});
