$(document).ready(function() {
  $('.ssm').slideAndSwipe();
  $('.switch-login-btn').on('click', function() {
    $('body').toggleClass('is-register');
  });
  $('.usrmobile-toggle-nav').on('click', function() {
    $('html').toggleClass('is-usrOpen');
  })
  $('.showpass-btn').on('click', function(e) {
    var elem = $(e.target).closest('div').find('input');
    elem.attr('type') == 'password' ? elem.attr('type', 'input') : elem.attr('type', 'password');
  })
});