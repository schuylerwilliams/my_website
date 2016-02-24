
// Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2t5d2lsbGlhbXMiLCJhIjoibUI4TlByNCJ9.9UuhBU3ElNiesrd-BcTdPQ';

// Initialize the map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v8',
    center: [-103.59179687498357, 40.66995747013945],
    zoom: 3,
});

// Map Controls
map.addControl(new mapboxgl.Navigation());


// Declare global variables
var scale;
var symbolColor;
// Cities array, holds information
var cities = [
	["Tokyo", 30, 40, 50, 60],
	["Delhi", 25, 35, 45, 55],
	["Shanghai", 20, 30, 40, 50],
	["Sao Paulo", 15, 25, 35, 45],
	["Mumbai", 30, 40, 50, 60],
	["Mexico City", 25, 35, 45, 55],
	["Beijing", 20, 30, 40, 50],
	["Osaka", 15, 25, 35, 45],
	["Cairo", 30, 40, 50, 60],
	["New York", 25, 35, 45, 55],
	["Dhaka", 20, 30, 40, 50],
	["Karachi", 15, 25, 35, 45],
	["Buenos Aires", 30, 40, 50, 60],
	["Calcutta", 25, 35, 45, 55],
	["Istanbul", 20, 30, 40, 50]
];

// array for holding layer ids
var id = [];
// variable for holding the currently selected feature
var feature;


// Add data
map.on('style.load', function(){
	map.addSource("megaCities", {
        type: "geojson",
        data: "/data/megaCities.geojson"
    });
	
	// Loop through the cities array
	for(i=0; i <= 14; i++){
		var cityName = cities[i][0];
		var multiplier = cities[i][1];
		crunchData(multiplier);
		var layerID = "Cities-" + cityName;
		
    	map.addLayer({
        	"id": layerID,
        	"interactive": true,
        	"type": "circle",
        	"source": "megaCities",
        	'paint': {
            	'circle-radius': scale,
            	'circle-color': symbolColor
        	},
        	"filter": ["==", "City", cityName]
    	});
    	
    	// add each layerid to id array
    	id.push(layerID);
    	
    };  
});


// Declare variable for range slider
var rangeInput = document.getElementById("slider");

// Event listener to call startUpdate function based on slider value
rangeInput.addEventListener('mouseup', function() {
    if (this.value == 1) {
        document.getElementById("sliderInfo").innerHTML = 1985;
    } else if (this.value == 2) {
        document.getElementById("sliderInfo").innerHTML = 1990;
    } else if (this.value == 3) {
    	document.getElementById("sliderInfo").innerHTML = 1995;
    } else if (this.value == 4) {
    	document.getElementById("sliderInfo").innerHTML = 2000;
    }
    startUpdate(this.value);
    determineData();
});


// On Click
map.on('click', function (e) {
    map.featuresAt(e.point, {
        radius: 7.5, // Half the marker size (15px).
        layer: id
    }, function (err, features) {
    
		feature = features[0];
		
		document.getElementById("infoClick").innerHTML = feature.properties.City;
		determineData();
    });
});


// On hover
map.on('mousemove', function(e) {
    map.featuresAt(e.point, {
        radius: 7.5, // Half the marker size (15px).
        layer: id
    }, function(err, features) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = (!err && features.length) ? 'pointer' : '';

        if (err || !features.length) {
            document.getElementById("infoHover").innerHTML = "";
            return;
        }
        var featureHover = features[0];
        document.getElementById("infoHover").innerHTML = featureHover.properties.City;
    });
});


// function to determine data to display
function determineData() {
	var val = rangeInput.value;
	
	if (val == 1) {
		document.getElementById("infoData").innerHTML = feature.properties.Pop_1985;
	} else if (val == 2) {
		document.getElementById("infoData").innerHTML = feature.properties.Pop_1990;
	} else if (val == 3) {
		document.getElementById("infoData").innerHTML = feature.properties.Pop_1995;
	} else if (val == 4) {
		document.getElementById("infoData").innerHTML = feature.properties.Pop_2000;
	}
};

// function to update symbol size and color
function startUpdate(x) {
	for(i=0; i <= 14; i++){
		var cityName = cities[i][0];
		var layerID = "Cities-" + cityName;
		var multiplier = cities[i][x];
		crunchData(multiplier);
		map.setPaintProperty(layerID, 'circle-radius', scale);
		map.setPaintProperty(layerID, 'circle-color', symbolColor);
	}
};


// Declare function to determine scale factor and color
function crunchData(x) {
	if (x >= 60) {
		scale = 8 * 2;
		symbolColor = 'rgba(256,102,102,1)'
	} else if (x < 60 && x >= 40) {
		scale = 8 * 1.2;
		symbolColor = 'rgba(255,255,102,1)'
	} else if (x < 40 && x >= 20) {
		scale = 8 * .8;
		symbolColor = 'rgba(178,255,102,1)'
	} else if (x < 20) {
		scale = 8 * .6;
		symbolColor = 'rgba(102,255,178,1)'
	}
};




/*
function getScale(x) {
	var origVal = x.features.properties.Pop_1985;
	var myScale = origVal * .8;
	map.setPaintProperty(x, 'circle-radius', origVal);
	map.setPaintProperty(x, 'circle-color', 'rgba(0,0,0,1)');
};
*/

	