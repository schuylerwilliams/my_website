<<<<<<< HEAD



// Define function "initialize"
function initialize(){
    // Define variable "mydata" to store data
    var mydata;

    // basic  jQuery ajax method to get data
    $.ajax("map.geojson", {
        // Set the datatype to json
        dataType: "json",
        // On success, call function with response as parameter
        success: function(response){
            // Set "mydata" variable equal to the "response" variable parameter
            // Change so it displays the data correctly
            // Debug statement, it seems the function on success is not being called. I don't know how or why this is happening.
            console.log('hello');
            mydata = JSON.stringify(response);

            // Check the "mydata" variable; should return response parameter
            // Data can be accessed here
            console.log(response);
        }
    });
    // Check the "mydata" variable; should be undefined because function(response) has not run
    // Data cannot be accessed here
    console.log(mydata);
};


$(document).ready(initialize);

=======
// jquery hello world text
$('#mydiv').html('Hello World');

// .attr jquery
var theid = $('mydiv').attr('id');
$('#mydiv').append(theid);
$('#mydiv').attr('class', 'foo');

// .css jquery
$('#mydiv').css({
	'font-size': '2em',
	'text-align': 'left'
});

// .on jquery
$('#mydiv').on('click', function(){
	alert('Ouch! What gives?');
});

var cityPop;

//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(addSize){
    //define two arrays for cities and population
    var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
    
    // Also, actually call the addColumns function, or it does nothing
    addColumns(cityPop);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);

// Also, actually call the addColumns function, or it does nothing
addColumns(cityPop);
// function call for addEvents function
addEvents();
>>>>>>> origin/master




<<<<<<< HEAD
// DEBUG section
// define function "debugCallback" with 1 parameter, "response"
// change parameter "response" to x to avoid confusion with response from Ajax function
function debugCallback(x){
    // use jQuery to get mydiv id and add string, as well as display the geojson data from previous function
    // fix mydiv to '#mydiv' to access id
    // also, change mydata parameter for stringify to "response" variable parameter
    // also, add ")" after response, maybe I deleted it who knows
    $('#mydiv').append('GeoJSON data: ' + JSON.stringify(x));
};

// define function "debugAjax"
function debugAjax(){
    // define variable "mydata"
    var mydata;
    // jQuery ajax to get geojson data
    $.ajax('map.geojson', {
        // set datatype to json
        dataType: "json",
        // on success run function with response as parameter
        success: function(response){
            // add statement to make mydata equal to response
            mydata = response;
            // run debugCallback function with mydata as parameter
            debugCallback(mydata);
        }
    });
    // this is uneccessary as the data cannot be accessed here
    // $(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};
// this is also unnecessary as the data has already been appended and cannot be accessed
// I don't know what you want me to do with this?
//$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));

//finally, add function call to run debugAjax function
$(document).ready(debugAjax);
=======
// DEBUG SECTION
// create a function addColumns that takes 1 parameter, cityPop
// what this function is attempting to do is add a city size header, and give that header values for each city
// change parameter name for confusion
function addColumns(x){
	// declare local variable i
	var i = 0;
	// loop through each element of heading
    $("tr").each(function(i){
    	// conditional if i is equal to 0...
    	if (i == 0){
    		// then add City Size header
    		$(this).append('<th>City Size</th>');
    	} else {
    		// if i is not 0, then define variable citySize
    		var citySize;
    		// if cityPop population is less than 100,000...
    		if (x[i-1].population < 100000){
    			// then set citySize variable equal to 'Small' string
    			citySize = 'Small';
			// else, if cityPop population is less than 500000...
    		} else if (x[i-1].population < 500000){
    			// then set citySize variable equal to 'Medium' string
    			// also fix citySize syntax
    			citySize = 'Medium';
			// if none of those, then set citySize variable to 'Large' string
    		} else {
    			citySize = 'Large';
    		};
			// finally, add the citySize variable containing cities population size string
    		$(this).append('<td>' + citySize + '</td>');
    		
    	};
    };
};



// define a function named addEvents, takes no parameters
function addEvents(){
	// these shouldn't be in a function
	// on table mouseover, run function
	$('table').mouseover(function(){
		// when mouseouver declare a color variable and make it equal to a string
		var color = "rgb(";
		// conditional statement defining local var i and setting to 0, saying if i is less than three do something, then incrementing i by 1 each loop
		for (var i=0; i<3; i++){
			// defining var named random, and setting it equal to a built in function, causing a random value to be output, and multiplying that random number by 255
			var random = Math.round(Math.random() * 255);
			// getting the color variable and setting it equal to the random variable
			// also, fix syntax, get rid of quotations when calling variable
			color += random;
			// conditional saying if i is less than 2, then...
			if (i<2){
				// add a comma to the color variable to separate number for rgb
				color += ",";
				// all else fails
			} else {
				// add the closing marks to the rgb color variable
				color += ")";
		};
		// after all this is done, change the color css of table to the random color variable just generated
		$(this).css('color', color);
	});
	// define a function named clickme that takes no parameters
	// also changed naming syntax of function
	function clickMe(){
		// pass alert that says a string
		alert('Hey, you clicked me!');
	};
	// on table click, call clickMe function
	$('table').on('click', clickMe);
};
>>>>>>> origin/master
