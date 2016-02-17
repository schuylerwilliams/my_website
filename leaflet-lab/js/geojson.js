// my mabbox access token
L.mapbox.accessToken = 'pk.eyJ1Ijoic2t5d2lsbGlhbXMiLCJhIjoibUI4TlByNCJ9.9UuhBU3ElNiesrd-BcTdPQ';

// initialize the map, using mapbox streets default
var map = L.mapbox.map('map', 'mapbox.streets').setView([38, -95], 4);

// use the mapbox omnivore plugin to display csv data as a geojson
omnivore.csv('/mapbox.js/assets/data/airports.csv').addTo(map);

/* I couldn't find the megacities.geojson file at learn@uw, so I could used omnivore and mapbox instead of leaflet
	mapbox is actually built on top of leaflet, so almost every function is exactly the same, with a few added functions out
	of the box, I prefer working wit mapbox.js instead of leaflet as they make it much more simple to use
	with the mapbox styles
*/