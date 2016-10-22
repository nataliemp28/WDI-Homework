"use strict";

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

// json.data.forEach((wine,i) => {
//   $container.append(`<img src="${wine.image.fixed_height.url}">`);
// });


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
//
// const deleteWine = (wine) => {
//     $("#remove").on("click", removeWine);
// };
// const removeWine = (e) => {
//   e.preventDefault();
//   $.ajax({
//     method: 'DELETE',
//     url: "http://localhost:8000/wines",
//     data: $('form').serialize()
//   }).done((data) => {
//     deleteWine(data);
//   });
// };