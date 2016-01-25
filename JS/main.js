//create an array using the following values: "NYC", "SF", "LA", "ATX", "SYD"
//use array to add values to <select> menu using a for loop in JS (don't do in HTML!)
//update background when user changes drop-down input
//use $.append() in your iteration of drop-down menu
//use $.attr() function to update HTML classes 
//get value of user input with $.val()
//use the $.change event handler to capture user actions 
//use if/else if/else conditionals 
//show pseudocode 
$(document).ready(function() {
});

//grabbing the html ID 'city-type'
  //creating an array for my options
var city = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];
 
jQuery.each( city, function( i, val ) { 

var option = '<option value' + val + '>' + val + '</option>'
	$('#city-type').append(option);	
});
 //making a function to pull from the array index; 
 //for(var i = 0; i < city.length; i++) { 
 	// var opt = city[i]
 	// var el = document.createElement('option');
 	// el.textContent = opt;
 	// el.value = opt;
 	// select.appendChild(el); 
 //}

//creating a variable, calling it var city and setting it to ID #city-type


//making a function for when user submits the form, using var city 
$('form').change(function(event) {
	event.preventDefault(); 
	var city = $('#city-type').val();
	
	if (city == 'NYC'){
		$('body').attr('class', 'nyc');}

	else if (city == 'SF'){
		$('body').attr('class', 'sf');}

	else if (city == 'LA') 
		$('body').attr('class', 'la');
	
	else if (city == 'ATX')
		$('body').attr('class', 'austin');
	
	else if (city == 'SYD')	
		$('body').attr('class', 'sydney');
	
})


