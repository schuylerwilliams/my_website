


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
