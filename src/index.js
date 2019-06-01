// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import Hotel from './Hotel';
import BookingRepo from './BookingRepo';
import Customer from './Customer';
import CustomerRepo from './CustomerRepo'
import Booking from './Booking';
import RoomServiceRepo from './RoomServiceRepo';
import RoomService from './RoomService';


// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

import fetch from 'cross-fetch';
import domUpdates from './domUpdates';

let bookingRepo;
let hotel;
let customer;
let customerRepo;
let booking;
let roomService;
// let RoomServiceRepo;


// let userData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users').then(function(response){
//     return response.json()});
//  let roomServiceData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices').then(function(response){
//     return response.json()});
//  let bookingData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings').then(function(response){
//     return response.json()});
//  let roomData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms').then(function(response){
//     return response.json()});
// let combinedData = {'userData':{}, 'roomServiceData':{}, 'bookingData':{}, 'roomData':{}}
// // let request;

// Promise.all([userData, roomServiceData, bookingData, roomData])
//     .then(function(values) {
//         combinedData['userData'] = values[0];
//         combinedData['roomServiceData'] = values[1];
//         combinedData['bookingData'] = values[2];
//         combinedData['roomData'] = values[3];
//         return combinedData;
//     })
//     .catch(error => console.log(`Error in promises ${error}`))
$(document).ready(function(){
let customerData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users')
  .then(dataFile => dataFile.json())
  .then(dataFile => customerData = dataFile.users);

let roomData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms')
    .then(dataFile => dataFile.json())
    .then(dataFile => roomData = dataFile.rooms);

let bookingData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings')
    .then(dataFile => dataFile.json())
    .then(dataFile => bookingData = dataFile.bookings);

let roomServicesData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices')
    .then(dataFile => dataFile.json())
    .then(dataFile => roomServicesData = dataFile.roomServices);

    
    function timer() {
        // console.log(bookingData)
        $('ul.tabs li').click(function(){
            var tab_id = $(this).attr('data-tab');
            
            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');
            
            $(this).addClass('current');
            $("#"+tab_id).addClass('current');
        })
        bookingRepo = new BookingRepo (bookingData, roomData)
        hotel = new Hotel(bookingRepo);
        domUpdates.showCurrentDate(hotel.currentDate);
        domUpdates.displayAvailability(hotel.bookingRepo.calculateAvailableRoomsByDate(hotel.currentDate))
        domUpdates.displayOccupancy(hotel.bookingRepo.calculateOccupiedRoomsByDate(hotel.currentDate))
        domUpdates.displayRevenueToday(bookingRepo.showTotalRevenueToday(hotel.currentDate))
        
    }
    
    setTimeout(timer, 500);
    
    
    
    
    
    

        

    })
    