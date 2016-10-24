// You will need to get your GoogleMaps API key
// Make a request to the API to get all of the restaurants
// Display then on the page with GMaps
// BONUS: Mark your current location on the map
// BONUS BONUS: Add restul routes
//
// $(() => {

var googleMap = googleMap || {};

//create the marker for each restaurant, drop the animation in.
googleMap.createMarkerForRestaurant = (restaurant) => {
  let latLng = new google.maps.LatLng(restaurant.lat, restaurant.lng);
  let marker = new google.maps.Marker({
    position: latLng,
    map: googleMap.map,
    animation: google.maps.Animation.DROP
  });
  //CALL the addInfoWindow function here
  googleMap.addInfoWindowForRestaurant(restaurant, marker);
};
//function to add the info window onclick
googleMap.addInfoWindowForRestaurant = function(restaurant, marker) {
  google.maps.event.addListener(marker, 'click', () => {

//if there is already an info window open, close the existing one
    if (typeof this.infowindow !== "undefined") {
      this.infowindow.close();
    }
//Info to display on the info window, telling in what to attach to 'this' clicked element
    this.infowindow = new google.maps.InfoWindow({
      content: `<img src="${restaurant.image}">
      <h4>${restaurant.name}</h4>`
    });
    //open 'this' clicked on window
    this.infowindow.open(this.map, marker);
  });
};
//loop through the restaurants and for each restaurant, create marker (call create marker function)
googleMap.loopThroughRestaurants = (data) => {
  $.each(data.restaurants, (index, restaurant) => {
    googleMap.createMarkerForRestaurant(restaurant);
  });
};
//get restaurants API. When that's done, loop through the restaurants, so call loopThrough function.
googleMap.getRestaurants = function() {
  $.get('http://localhost:3000/api/restaurants')
  .done(this.loopThroughRestaurants);
};

//setting up the map initially, centering it so we can see some restaurants immediately.
googleMap.mapSetup = function() {
  console.log("setting up the map!");
  let $mapDiv = $('#map-canvas');
  console.log($mapDiv);
  //constructor function creating a new Map object.
  this.map = new google.maps.Map($mapDiv[0], {
    center: { lat: 51.52, lng: -0.08 },
    zoom: 14
  });
//call get restaurants to display the restaurants
  this.getRestaurants();
};

  $(googleMap.mapSetup.bind(googleMap));


//gets current location provided user says yes.
navigator.geolocation.getCurrentPosition((position) => {
  let latLng = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
  console.log(latLng);

  // constructor function creating a new Marker object, which drops at users current location
  //based on the above
    let marker = new google.maps.Marker({
      position: latLng,
      animation: google.maps.Animation.DROP,
      draggable: true,
      map: googleMap.map

    });
  });
