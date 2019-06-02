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
  bookingInfo.forEach(room => $('.today-bookings').append(`<li class="room-number">Room: ${room.roomNumber}</li>`))
},

displayRoomServiceDetailsPerDate(roomService) {
  roomService.forEach(order => $('.today-orders').append(`<li class="room-number">Item: ${order.food}, Price: ${order.totalCost}</li>`))
},

displayErrorMsg() {
  alert('No guest by that name')
},

displayName(name) {
  $('.selected-customer').html(name.name)
},

displayNoBookingsMessage() {
  $('.one-customers-bookings').removeClass('hidden')
  $('.individual-customers-bookings').html('No bookings for this customer yet.')
  $('.customer-list-ul').html('')
},

displayAllOnesCustomerBookings(allBookings) {
  $('.customer-list-ul').html('')
  $('.one-customers-bookings').removeClass('hidden')
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
  rooms.forEach(room => {
    if (room.bidet === false){
      room.bidet = "no"
    } else {
      room.bidet = "yes"
    }
    $('.availability-ul').append(`<li class="align-horizontally">
  <p><span class="room-number-display">${room.number}</span> 
  <p><span class="room-type-display">${room.roomType}</span></p>
  <p><span class="number-of-beds-display">${room.numBeds}</span></p> 
  <p><span class="bed-size-display">${room.bedSize}</span></p>  
  <p><span class="bidet-display">${room.bidet}</span></p> 
  <p><span class="room-price-display">${room.costPerNight}</span>$</p>
</li>`)  
})
},

filterAllRoomsByDateAndType(rooms) {
  $('.filter-today-rooms').children().remove();
  rooms.forEach(room => {
    if (room.bidet === false){
      room.bidet = "no"
    } else {
      room.bidet = "yes"
    }
    $('.filter-today-rooms').append(`<li class="align-horizontally">
  <p><span class="room-number-display">${room.number}</span> 
  <p><span class="room-type-display">${room.roomType}</span></p>
  <p><span class="number-of-beds-display">${room.numBeds}</span></p> 
  <p><span class="bed-size-display">${room.bedSize}</span></p>  
  <p><span class="bidet-display">${room.bidet}</span></p> 
  <p><span class="room-price-display">${room.costPerNight}</span>$</p>
  <p><button id="book-btn-today">Book Room</button></p>
</li>`)
})
},

appendRemainingRoomsAfterFilter(rooms) {
  $('.message-after-filter-no-results').html("There are no rooms available of that type at the moment for the current date. Here are all the rooms available.")
  $('.filter-today-rooms').children().remove();
  rooms.forEach(room => {
    if (room.bidet === false){
      room.bidet = "no"
    } else {
      room.bidet = "yes"       
    }
    $('.filter-today-rooms').append(`<li class="align-horizontally">
  <p><span class="room-number-display">${room.number}</span> 
  <p><span class="room-type-display">${room.roomType}</span></p>
  <p><span class="number-of-beds-display">${room.numBeds}</span></p> 
  <p><span class="bed-size-display">${room.bedSize}</span></p>  
  <p><span class="bidet-display">${room.bidet}</span></p> 
  <p><span class="room-price-display">${room.costPerNight}</span>$</p>
  <p><button id="book-btn-today">Book Room</button></p>
</li>`)  
})
}

// displayNewBooking(name, booking) {
//   console.log("Name", name)
//   console.log("Booking", booking)
//   $('.room-booking-list-ul').append(`<li class="align-horizontally">
//   <p class="room-booking-list room-date">${name}</p>
//   <p class="room-booking-list room-date">${booking.date}</p>
//   <p class="room-booking-list room-booking">${booking.roomNumber}</p>
//   <div class="room-service-menu">
//       <button>Order Room Service</button>
//       <h2 class="room-service-menu">Menu</h2>
//       <ul>
//         <!-- <li class="align-horizontally">
//           <p>Concrete sandwich</p>
//           <p><span class="room-service-price"></span>$</p>
//         </li> -->
//       </ul>
//     </div>
// </li>`)
// }


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
//Book a room button- DONE
//Drop down menu with all available room types -DONE
//if not available display room types that are available - DONE
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