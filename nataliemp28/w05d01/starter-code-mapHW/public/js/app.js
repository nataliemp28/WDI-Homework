"use strict";

// You will need to get your GoogleMaps API key
// Make a request to the API to get all of the restaurants
// Display then on the page with GMaps
// BONUS: Mark your current location on the map
// BONUS BONUS: Add restul routes

$(function () {

  var $mapDiv = $('#map-canvas');

  //constructor function creating a new Map object.
  var map = new google.maps.Map($mapDiv[0], {
    center: { lat: 51, lng: -0.1 },
    zoom: 14
  });
  console.log("JS loaded");

  //gets current location provided user says yes.
  navigator.geolocation.getCurrentPosition(function (position) {
    var latLng = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    console.log(latLng);
    map.panTo(latLng);
    map.setZoom(16);

    //constructor function creating a new Marker object.
    var marker = new google.maps.Marker({
      position: latLng,
      animation: google.maps.Animation.DROP,
      draggable: true,
      map: map //refers to map object we've created above

    });
  });
});