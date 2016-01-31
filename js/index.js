$('#shownav').on('click', function(e) {
  $('#nav').toggleClass('show');
})

$('#subscribe').on('click', function(e) {
  e.preventDefault();
  $.post('https://www.posttestserver.com/post.php', {
    mail: $('#email').val()
  }, function() {
    alert('GEILO');
  });
})

$('#nav a').on('click', function(e) {
  e.preventDefault();
  window.location.hash = $(this).data('section');
});

$('#showinfo').on('click', function(e) {
  $('#info').toggleClass('show');
});

$('#gallery img').on('click', function() {
  var img = $('<img>');
  img.attr('src', $(this).data('big'));
  $('#container').html(img);
  $('#overlay').addClass('show');
});

$('#close').on('click', function(e) {
  $('#overlay').removeClass('show');
})