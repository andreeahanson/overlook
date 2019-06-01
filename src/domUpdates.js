import $ from 'jquery';
import Hotel from './Hotel'
import BookingRepo from './BookingRepo'

const domUpdates = {

showCurrentDate(date) {
  $('.date').html(date)
},

displayAvailability(availability) {
  $('.available-rooms').html(availability)
}, 

displayOccupancy(occupancy) {
  $('.occupation-rate').html(occupancy)
}, 

displayRevenueToday(revenue) {
  $('.total-revenue-today').html(revenue)
},

displayBookingDetailsPerDate(bookingInfo) {
  bookingInfo.push({
    userID: 55,
    date: "01/06/2019",
    roomNumber: 133
    })
  bookingInfo.forEach(room => $('.today-bookings').append(`<li class="room-number">Room: ${room.roomNumber}</li>`))
},

displayRoomServiceDetailsPerDate(roomService) {
  roomService.push({
    userID: 34,
    date: "01/06/2019",
    food: "Generic Plastic Sandwich",
    totalCost: 9.48
    })
  roomService.forEach(order => $('.today-orders').append(`<li class="room-number">Item: ${order.food}, Price: ${order.totalCost}</li>`))
}


}


 //MAIN
  //Display today's date - DONE
  //Display today's bookings - DONE
  //Display today's total rooms occupied - DONE
  //Display today's room service orders -DONE
 //Display today's rooms avaiable - DONE

  //CUSTOMER

  //Display customer name once selected - 
  //Search input for customer by name - 
  //button to search and make enter work
  //input to create a new customer 
  //Update all tabs to include info for that user

  //ROOMS
  //GENERAL
  //Display Most popular booking date
  //Display date with most rooms available

  //ROOMS BY CUSTOMER
//Display summary of all past and current bookings
//Book a room button
//Drop down menu with all available room types
//if not available display room types that are available
//Once booked - Order room service button

// ORDERS
//GENERAL
//Search input for all orders by DATE

//BY CUSTOMER
//breakdown of dates and orders for customer
//total spent by date
//total spent for all days
//error if no orders found



export default domUpdates;