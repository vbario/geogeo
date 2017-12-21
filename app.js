require("!style-loader!css-loader!./style.css");
var $ = require('jquery');
var firebase = require('firebase');
var geolocation = require('geolocation');
import GeoFire from 'geofire';
var loadGoogleMapsAPI = require('load-google-maps-api');

var config = {
    apiKey: "AIzaSyBsiMg_Fd_IpecYV1bKABQ_EBL5cjOEmo4",
    authDomain: "geogeo-23e44.firebaseapp.com",
    databaseURL: "https://geogeo-23e44.firebaseio.com",
    projectId: "geogeo-23e44",
    storageBucket: "",
    messagingSenderId: "490757059012"
  };
 
 var FBApp = firebase.initializeApp(config);
 var firebaseRefLocations = FBApp.database().ref();
 var geoFireLocations = new GeoFire(firebaseRefLocations);
 var geoQuery = geoFireLocations.query({
							 	center: [0, 0],
							 	radius: 0
							 })

var user = prompt("Please enter a username");

loadGoogleMapsAPI({key: "AIzaSyAAVf3l48-mD__Uv-Aw8pioRDTOxyWWDiI"}).then(function(googleMaps){
	initializeMap(googleMaps);
})

var initializeMap = function(Maps) {
	var markers = {};

	var placeMarker = function(user, location) {
		markers[user] ? markers[user].setMap(null) : null;
		markers[user] = new Maps.Marker({
			position: location,
			map: map,
			icon: './images/drone.png'
		})
	}

	var newGeoQuery = function(location, distance) {
		geoQuery = geoFireLocations.query({center: location, radius: distance});
		geoQuery.on("key_entered", (key, location, distance)=>{
			placeMarker(key, {lat: location[0], lng: location[1]})
		})
		geoQuery.on("key_moved", (key, location, distance)=>{
			placeMarker(key, {lat: location[0], lng: location[1]})
		})
		geoQuery.on("key_exited", (key, location, distance)=>{
			removeMarker(key)
		})
	}

	var removeMarker = function(user) {
		markers[user].setMap(null);
	}
	
	var getCurrentPosition = function(noQuery) {
		geolocation.getCurrentPosition((err, position)=> {
	    if (err) { throw err }
	    	// console.log("location", position)
	    	// geoFireLocations.remove(user);
		  	geoFireLocations.set(user, [position.coords.latitude, position.coords.longitude]).then(function() {
				noQuery ? null : newGeoQuery([position.coords.latitude, position.coords.longitude], 250);
		  });
	  })
	}

	var mapDiv = document.getElementById('map');
	var map = new Maps.Map(mapDiv, {
		center: new Maps.LatLng(43.7437, -79.4562),
		zoom: 11
	})

	getCurrentPosition();
	setInterval(()=>{getCurrentPosition(true)}, 2500)
}


















