
$(function(){

  var $ol = $('ol');

  $.each(window.tweets, function(i, tweet) {

    $ol.append('<li class="stream-item">' +
    '<div class="tweet">' +
    '<a href="#">' +
    '<img src="' + tweet.user_thumbnail + '"alt="User image goes here">' + '</a>'+
    '<div class="content">' +
    '<strong class="fullname">' + tweet.name + '</strong>' +
    '<span>&rlm;</span>' +
    '<span>@</span><b>' + tweet.screen_name + '</b>' +
    '&nbsp;&middot;&nbsp;' +
    '<small class="time">' + tweet.created_at + '</small>' +
    '<p>'+ tweet.text +'</p>' +
    '</div>' +
    '</div>' +
    '</li>'
  );
});

var $input = $('#new-tweet-input');

$("#button").on("click", function(event) {
  event.preventDefault();
  var $thumbnail = $('#thumbnail');
  var $input = $('#new-tweet-input');
  var $name = $('#user-name');
  var $screen_name = $('#screen-name');

  $ol.prepend(

    '<li class="stream-item">' +
    '<div class="tweet">' +
    '<a href="#">' +
    '<img src="http://facehoff.herokuapp.com/50/50"' + $thumbnail + '"alt="User image goes here.">' +
    '</a>' +
    '<div class="content">' +
    '<strong class="fullname">' + $name.text() + ' ' + '</strong>' +
    '<span>&rlm;</span>' +
    '<span>@</span><b>' + $screen_name.text() + '</b>' +
    '&nbsp;&middot;&nbsp;' +
    '<small class="time">' +
    '11m' +
    '</small>' +
    '<p>' + $input.val() + '</p>' +
    '</div>' +
    '</div>' +
    '</li>'
  );
  $input.val('');

  var $input = $('#new-tweet-input');

  $("#button").on("click", function(event) {
    event.preventDefault();
    var $thumbnail = $('#thumbnail');
    var $input = $('#new-tweet-input');
    var $name = $('#user-name');
    var $screen_name = $('#screen-name');

    $ol.prepend(

      '<li class="stream-item">' +
      '<div class="tweet">' +
      '<a href="#">' +
      '<img src="http://facehoff.herokuapp.com/50/50"' + $thumbnail + '"alt="User image goes here.">' +
      '</a>' +
      '<div class="content">' +
      '<strong class="fullname">' + $name.text() + ' ' + '</strong>' +
      '<span>&rlm;</span>' +
      '<span>@</span><b>' + $screen_name.text() + '</b>' +
      '&nbsp;&middot;&nbsp;' +
      '<small class="time">' +
      '11m' +
      '</small>' +
      '<p>' + $input.val() + '</p>' +
      '</div>' +
      '</div>' +
      '</li>'
    );
    $input.val('');

  });
});
});
