"use strict";

//this is the front end javascript that will create what is shown on the page "client" side view

console.log("JS loaded!");

$(init);

function init() {
  getWines();
  $("form").on("submit", createWine);
}

function getWines() {
  if (event) event.preventDefault();
  return $.ajax({
    method: "GET",
    url: "http://localhost:8000/wines"
  }).done(function (data) {
    console.log(data);
    $.each(data, function (index, wine) {
      addWine(wine);
    });
  });
}

var addWine = function addWine(wine) {
  $('#wines').prepend("<li><img src=\"" + wine.image + "\" alt=\"ooops!\" />" + wine.variety + " - <em>" + wine.origin + "</em> - <em>" + wine.year + "</em> - <em>" + wine.vineyard + "</em></li>");
};

var createWine = function createWine(e) {
  e.preventDefault();
  $.ajax({
    method: 'POST',
    url: "http://localhost:8000/wines",
    data: $('form').serialize()
  }).done(function (data) {
    addWine(data);
  });
};

$.ajax({
  url: "http://localhost:8000/wines",
  method: "DELETE"

});