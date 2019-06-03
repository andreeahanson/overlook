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


import fetch from 'cross-fetch';
import domUpdates from './domUpdates';

let bookingRepo;
let hotel;
let customerRepo;
let customer;
let booking;
let roomService;
let roomServiceRepo;


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

let roomServiceData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices')
    .then(dataFile => dataFile.json())
    .then(dataFile => roomServiceData = dataFile.roomServices);

    
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
        customerRepo = new CustomerRepo (customerData, bookingData);
        // customer = new Customer (id, name)
        roomServiceRepo = new RoomServiceRepo (roomServiceData, customer)
        domUpdates.showCurrentDate(hotel.currentDate);
        domUpdates.displayAvailability(hotel.bookingRepo.calculateAvailableRoomsByDate(hotel.currentDate))
        domUpdates.displayOccupancy(hotel.bookingRepo.calculateNumberOfOccupiedRoomsByDate(hotel.currentDate))
        domUpdates.displayRevenueToday(bookingRepo.showTotalBookingRevenueToday(hotel.currentDate))
        domUpdates.displayBookingDetailsPerDate(bookingRepo.returnBookingDetailsByDate(hotel.currentDate))
        
        domUpdates.displayHotelsMostPopularDate(bookingRepo.showMostPopularBookingDate());
        domUpdates.displayHotelsLeastPopularDate(bookingRepo.showLeastPopularBookingDate());

        checkForRoomService()



        function checkOccupancy() {
            if (hotel.bookingRepo.calculateNumberOfOccupiedRoomsByDate(hotel.currentDate) === 0) {
                $('.book-a-room-btn').removeClass('hidden')
            }
        }
        checkOccupancy();
        
        $('.book-a-room-btn').on('click', showRoomTypesInput)
        $('.book-a-room-btn').on('submit', showRoomTypesInput)

        function showRoomTypesInput(e) {
            e.preventDefault()
            if ($('.selected-customer').html() !== ""){
                $('.rooms-by-type').slideToggle().removeClass('hidden')
            }
        }
        
        
        $(".guest-search-button").on('click', searchGuest);
        $(".guest-search-button").on('submit', searchGuest);
        $(".guest-search-input").on('input', searchGuest);
        $('.add-customer-button').on('click', addGuest);
        $('.add-customer-button').on('submit', addGuest);
        $('.search-rooms-by-date-btn').on('click', searchAvailableRooms);
        $('.search-rooms-by-date-btn').on('submit', searchAvailableRooms);
        
        $('#room-type-list').on('change', displayAllTodaysAvailableRooms);


        function searchGuest(e) {
            e.preventDefault()
            let inputValue = $(".guest-search-input").val()
            
            let obj = customerRepo.findCustomerByName(inputValue)
            if(!obj) {
              domUpdates.displayErrorMsg()
            } else {
            $('.general-info').addClass('hidden')
            customer = new Customer(obj.id, obj.name)
            console.log(customer)
            domUpdates.displayName(obj)
            domUpdates.searchCustomerFilterAutofill()
            if (customerRepo.findOneCustomersBookings(obj.name).length === 0) {
                domUpdates.displayNoBookingsMessage();
            } else {
                domUpdates.displayAllOnesCustomerBookings(customerRepo.findOneCustomersBookings(obj.name))
            }
            }
            $(".guest-search-input").val('')
            $('.book-a-room-btn').removeClass('hidden')
            if (roomServiceRepo.returnCustomerServiceOrdersForOneCustomer(customer.id).length === 0) {
                domUpdates.displayNoCustomerServiceMessage()
            } else {
                domUpdates.showIndividualCustomersOrders(roomServiceRepo.returnCustomerServiceOrdersForOneCustomer(customer.id))
            }
          }

        function addGuest(e) {
            e.preventDefault()
            let inputValue = $(".add-customer-input").val()
            customer = new Customer(Date.now(), inputValue)
            $('.general-info').addClass('hidden')
            customerData.push(customer);
            domUpdates.displayNewName(customer)
            if (customerRepo.findOneCustomersBookings(customer.name).length === 0) {
                domUpdates.displayNoBookingsMessage();
            } else {
                domUpdates.displayAllOnesCustomerBookings(customerRepo.findOneCustomersBookings(customer.name))
            }
            if (roomServiceRepo.returnCustomerServiceOrdersForOneCustomer(customer.id).length === 0) {
                domUpdates.displayNoCustomerServiceMessage()
            } else {
                domUpdates.showIndividualCustomersOrders(roomServiceRepo.returnCustomerServiceOrdersForOneCustomer(customer.id))
            }
            $(".add-customer-input").val('')
            $('.book-a-room-btn').removeClass('hidden')
          }
        
        function searchAvailableRooms(e) {
            e.preventDefault()
            let inputValue = $(".search-date-input").val()
            let objs = bookingRepo.returnAvailableRooms(inputValue)
            if(!inputValue) {
              domUpdates.displayDateErrorMsg()
            } else {
            domUpdates.displayAvailableRoomsByDate(bookingRepo.returnAvailableRooms(inputValue))
            }
            $(".search-date-input").val('')
          }

          function displayAllTodaysAvailableRooms(e) {
            e.preventDefault()
            let inputValue = $("#room-type-list").val()
            if(bookingRepo.filterTodayAvailableRoomsByType(hotel.currentDate, inputValue).length === 0){
                domUpdates.appendRemainingRoomsAfterFilter(bookingRepo.returnAvailableRooms(hotel.currentDate))
            }
            domUpdates.filterAllRoomsByDateAndType(bookingRepo.filterTodayAvailableRoomsByType(hotel.currentDate, inputValue));           
        }
        

        $('#tab-3').on('click', createBookingforToday);
        $('#tab-3').on('submit', createBookingforToday);

        function createBookingforToday(e) {
                e.preventDefault()
                if(e.target.matches('#book-btn-today')){
                    let value = parseInt(e.target.parentNode.parentNode.childNodes[1].childNodes[0].innerHTML)  
                    console.log(value)       
                    if ($('.selected-customer').html() !== "" && e.target.matches('#book-btn-today')){
                        booking = new Booking (customer.id, hotel.currentDate, value)
                        bookingData.push(booking)
                        console.log(bookingRepo.returnAvailableRooms(hotel.currentDate).length)
                        domUpdates.displayAvailability(bookingRepo.returnAvailableRooms(hotel.currentDate).length)
                        let name = $('.selected-customer').html();
                        domUpdates.displayAllOnesCustomerBookings(customerRepo.findOneCustomersBookings(customer.name))
                    }
                    e.target.closest('li').remove();
                    $('.order-room-service-btn').removeClass('hidden')
                }
        }

        $('.order-room-service-btn').on('click', displayRoomServiceMenu);

        function displayRoomServiceMenu(e) {
            e.preventDefault();
           $('.order-room-service').slideToggle().removeClass('hidden')
        }

        $('.item').on('click', placeOrder) 

        function placeOrder(e) {
            e.preventDefault();
            if(e.target.matches('.name-item')){
                let order = $(e.target).html()
                let price = parseFloat($(e.target).siblings().html());
                console.log(order)
                roomService = new RoomService(customer.id, hotel.currentDate, order, price)
                roomServiceData.push(roomService)
                console.log(roomServiceData.length)
                domUpdates.showIndividualCustomersOrders(roomServiceRepo.returnCustomerServiceOrdersForOneCustomer(customer.id))
            }
        }

        $('.search-orders-by-date-btn').on('click', displayAllTodaysRoomServiceOrders);
        $('.search-orders-by-date-btn').on('submit', displayAllTodaysRoomServiceOrders);

        function displayAllTodaysRoomServiceOrders(e) {
            e.preventDefault();
            let inputValue = $(".search-date-input-room-service").val()
            console.log("HEY!!!!!", roomServiceRepo.returnAllCustomerServiceOrdersForOneDate(inputValue).length)
            if(roomServiceRepo.returnAllCustomerServiceOrdersForOneDate(inputValue).length === 0){
                domUpdates.displayNoCustomerServiceMessage()
            }
            domUpdates.displayAllRoomServiceOrdersByDate(roomServiceRepo.returnAllCustomerServiceOrdersForOneDate(inputValue));           
        }
        
        function checkForRoomService() {
            if(roomServiceRepo.returnAllCustomerServiceOrdersForOneDate(hotel.currentDate).length === 0){
                domUpdates.displayNoCustomerServiceMessage()
            } else {
                domUpdates.displayAllRoomServiceOrdersByDate(roomServiceRepo.returnAllCustomerServiceOrdersForOneDate(hotel.currentDate))   
            }
        }

    }
    
    setTimeout(timer, 800);
    
    
    
    
    
    

        

    })
    