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
    url: "http://localhost:8000/wines",
  })
  .done((data) => {
    console.log(data);
    $.each(data, (index, wine) => {
      addWine(wine);
    });
  });
}

const addWine = (wine) => {
  $('#wines').prepend(`<li><img src="${wine.image}" alt="ooops!" />${wine.variety} - <em>${wine.origin}</em> - <em>${wine.year}</em> - <em>${wine.vineyard}</em></li>`);
};

// json.data.forEach((wine,i) => {
//   $container.append(`<img src="${wine.image.fixed_height.url}">`);
// });


const createWine = (e) => {
  e.preventDefault();
  $.ajax({
    method: 'POST',
    url: "http://localhost:8000/wines",
    data: $('form').serialize()
  }).done((data) => {
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
