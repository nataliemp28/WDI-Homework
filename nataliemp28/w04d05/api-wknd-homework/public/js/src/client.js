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

$('body').on('click', 'button', function() {
  // Do the 'delete' AJAX call here
  $.ajax({
    method: "DELETE",
    url: "http://localhost:8000/wines/580ba17427287829ca2a197d",
  });
});
