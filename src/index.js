// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

import fetch from 'cross-fetch';

let userData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users').then(function(response){
    return response.json()});
 let roomServiceData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices').then(function(response){
    return response.json()});
 let bookingData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings').then(function(response){
    return response.json()});
 let roomData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms').then(function(response){
    return response.json()});
let combinedData = {'userData':{}, 'roomServiceData':{}, 'bookingData':{}, 'roomData':{}}
// let request;

Promise.all([userData, roomServiceData, bookingData, roomData])
    .then(function(values) {
        combinedData['userData'] = values[0];
        combinedData['roomServiceData'] = values[1];
        combinedData['bookingData'] = values[2];
        combinedData['roomData'] = values[3];
        return combinedData;
    })
    .catch(error => console.log(`Error in promises ${error}`))

function timer() {
    console.log(combinedData)
}

setTimeout(timer, 2000);

$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
})

