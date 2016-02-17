

/* *************** */
/* Leaflet Quick Start Guide */

// create a variable name map
// set map variable equal to a map object, and set the view to specific coordinates
// with 13 zoom level
var map = L.map('map').setView([51.505, -0.09], 13);

// create a tilelayer that we will ".addTo" the map variable
// using mapbox default tiles
// also specifying certain features such as attribution, max zoom level
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	id: 'your.mapbox.project.id',
	accessToken: 'your.mapbox.public.access.token'
}).addTo(map);

// declare variable named marker and use "l.marker" function object and ".addTo" map variable
var marker = L.marker([51.5, -0.09]).addTo(map);

// declare a variable named circle
// use the circle function to add a circle at location, with specific radius
// also add attributes such as color, fillcolor, and opacity
// finally, use ".addTo" function to add circle to the map
// anything you can to be added to the map, you will use ".addto"
var circle = L.circle([51.508, -0.11], 500, {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5
}).addTo(map);

// declare a variable named polygon
// we use the ".polygon" function to add a polygon at specified points
var polygon = L.polygon([
	[51.509, -0.08],
	[51.503, -0.06],
	[51.51, -0.047]
]).addTo(map);

// let's bind a popup with ".bindPopup" function to our marker variable
// use ".openPopup" to call that bound popup immediately
marker.bindPopup("<b>Hello world!</b><br>I am a popup, hear me roar.").openPopup();

// also add popup to circle and polygon
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

// add our own popup layer, and set its position and content
var popup = L.popup()
	.setLatLng([51.5, -0.09])
	.setContent("I am a standalone popup.")
	// we use openOn because it handles automatic closing of previously opened popup
	.openOn(map);

// now lets add a function for when we click on the map
// first, declare a new popup variable
var newPop = L.popup();

// now define function that takes 1 parameter, e, and set the popup variables location and content to where we just clicked (e)
function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(map);
	}

	// call function so when we click map, function runs
	map.on('click', onMapClick);
}

/* *************** */
/* /Leaflet Quick Start Guide */






/* *************** */
/* Using Geojson with Leaflet */

// declare a variable which stores a geojson feature layer
var geojsonFeature = {
	// Declare the type
	"type": "Feature",
	// Declare the properties of the geojson, giving it a name and characteristics
	"properties": {
		"name": "Coors Field",
		"amenity": "Baseball Stadium",
		"popupContent": "This is where the Rockies play!"
	},
	// define the geometry involved, and where it is located
	"geometry": {
		"type": "Point",
		"coordinates": [-104.99404, 39.75621]
	}
};

// use the geoJson function to add geojsonFeature variable to map
L.geoJson(geojsonFeature).addTo(map);

// Create geojson objects as an array of objects
var myLines = [{
	"type": "LineString",
	"coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
	"type": "LineString",
	"coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];

// Create empty geojson object, so we can can more features to it later
var myLayer = L.geoJson().addTo(map);
myLayer.addData(geojsonFeature);

// create a variable to hold style attributes
var myStyle = {
	"color": "#ff7800",
	"weight": 5,
	"opacity": 0.65
};

// Use the style option to pass the style variable attributes to the myLines geojson object
L.geoJson(myLines, {
	style: myStyle
}).addTo(map);


// Declare states geojson object with a special party property
var states = [{
    "type": "Feature",
    "properties": {"party": "Republican"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-104.05, 48.99],
            [-97.22,  48.98],
            [-96.58,  45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"party": "Democrat"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}];

// Use the style option to style the states layer based on the specific party property
L.geoJson(states, {
    style: function(feature) {
        switch (feature.properties.party) {
            case 'Republican': return {color: "#ff0000"};
            case 'Democrat':   return {color: "#0000ff"};
        }
    }
}).addTo(map);

// Declare style options for a geojson object
var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// Use the pointToLayer to receive a lat and lng and style the layer accordingly
L.geoJson(someGeojsonFeature, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);


// onEachFeature function gets called on each feature before adding ti to a GeoJson layer
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

// declare geojson object
var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};

// call the on each feature function for a specific popup
L.geoJson(geojsonFeature, {
    onEachFeature: onEachFeature
}).addTo(map);



// Declare geojson Object
var someFeatures = [{
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "show_on_map": true
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Busch Field",
        "show_on_map": false
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.98404, 39.74621]
    }
}];


// use the filter option to control the visibility of Geojson features. Gets called for each feature in your geojson
L.geoJson(someFeatures, {
    filter: function(feature, layer) {
        return feature.properties.show_on_map;
    }
}).addTo(map);

/* ************* */
/* Using Geojson with leaflet */
