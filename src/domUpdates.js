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
},

displayErrorMsg() {
  alert('No guest by that name')
},

displayName(name) {
  $('.selected-customer').html(name.name)
},

displayNoBookingsMessage() {
  $('.individual-customers-bookings').html('No bookings for this customer yet.')
  $('.customer-list-ul').html('')
},

displayAllOnesCustomerBookings(allBookings) {
  $('.individual-customers-bookings').html('Here are this customer\'s bookings')
  allBookings.forEach(booking => $('.customer-list-ul').append(`<li class="customer-list customer-date">${booking.date} <span class="booking-room-number">Room: ${booking.roomNumber}</span></li>`))
},

displayNewName(name) {
  $('.selected-customer').html(name.name)
},

displayHotelsMostPopularDate(bestDate){
  $('.top-booking-date').html(bestDate)
},

displayHotelsLeastPopularDate(worstDate) {
  $('.bottom-booking-date').html(worstDate)
},

displayDateErrorMsg() {
  alert('Please enter a valid date!')
},

displayAvailableRoomsByDate(rooms) {
  rooms.forEach(room => $('.availability-ul').append(`<li class="align-horizontally">
  <p><span class="room-number-display">${room.number}</span> 
  <p><span class="room-type-display">${room.roomType}</span></p>
  <p><span class="number-of-beds-display">${room.numBeds}</span></p> 
  <p><span class="bed-size-display">${room.bedSize}</span></p>  
  <p><span class="bidet-display">${room.bidet}</span></p> 
  <p><span class="room-price-display">${room.costPerNight}</span>$</p>
</li>`))
  
}


 //MAIN
  //Display today's date - DONE
  //Display today's bookings - DONE
  //Display today's total PERCENTAGE rooms occupied
  //Display today's room service orders -DONE
 //Display today's rooms avaiable - DONE

  //CUSTOMER

  //Display customer name once selected - DONE
  //Search input for customer by name - DONE
  //button to search and make enter work - DONE
  //input to create a new customer - DONE
  //Update all tabs to include info for that user

  //ROOMS
  //GENERAL
  //Display Most popular booking date - DONE
  //Display date with most rooms available - DONE

  //ROOMS BY CUSTOMER
//Display summary of all past and current bookings -DONE
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

}

export default domUpdates;