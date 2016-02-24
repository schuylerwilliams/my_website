


/*



// !!!!!!!!!!!!!!!!!

REFER TO geojsonGL.js 

// !!!!!!!!!!!!!!!!!






*/












/*

// my mabbox access token
L.mapbox.accessToken = 'pk.eyJ1Ijoic2t5d2lsbGlhbXMiLCJhIjoibUI4TlByNCJ9.9UuhBU3ElNiesrd-BcTdPQ';

// initialize the map, using mapbox streets default
var map = L.mapbox.map('map', 'mapbox.dark').setView([38, -95], 4);

// style the marker symbols
var markerOptions = {
		radius: 8,
		fillColor: "orange",
		color: "#000",
		weight: 1,
		opacity: 1,
		fillOpacity: 0.8
};


// add megaCities geojson feature to map
L.geoJson(megaCities, {
	// use pointToLayer to make circles from points
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, markerOptions);
	}
}).addTo(map);




// use .loadURL to use AJAX to add geojson feature to map

var featureLayer = L.mapbox.featureLayer()
	.loadURL('/data/megaCities.geojson', {
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, markerOptions);
		}
	})
	.addTo(map);

*/

