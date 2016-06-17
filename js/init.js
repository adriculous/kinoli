(function($){
  $(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
     });
    $('.button-collapse').sideNav();
    $('.dropdown-button').dropdown();
    $('.parallax').parallax();
    $('#icon_message').val('Your message here.');
    $('#icon_message').trigger('autoresize');

  }); // end of document ready
})(jQuery); // end of jQuery name space