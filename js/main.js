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