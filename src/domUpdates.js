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
  <p><span class="room-number-display">${room.number}</span></p> 
  <p><span class="room-type-display">${room.roomType}</span></p>
  <p><span class="number-of-beds-display">${room.numBeds}</span></p> 
  <p><span class="bed-size-display">${room.bedSize}</span></p>  
  <p><span class="bidet-display">${room.bidet}</span></p> 
  <p><span class="room-price-display">${room.costPerNight}</span>$</p>
  <p><button id="book-btn-today">Book Room</button></p>
</li>`)  
})
}, 

showIndividualCustomersOrders(orders) {
  $(".hotels-customer-service-message-per-date").addClass('hidden')
  $('.every-order-for-indivitual-customer').removeClass('hidden')
  $('.room-service-heads').removeClass('hidden')
  $('.every-order-for-indivitual-customer').html('')
  $('.room-service-message').html('Here are this customer\'s orders')
  orders.forEach(order => {
    $('.every-order-for-indivitual-customer').append(`<li class="align-horizontally">
    <p><span class="order-date-display">${order.date}</span></p> 
    <p><span class="order-food-display">${order.food}</span></p>
    <p><span class="order-price-display">${order.totalCost}</span></p> 
  </li>`)
  })
}, 

displayNoCustomerServiceMessage() {
  $('.customer-service-ul').html('')
  $(".hotels-customer-service-message-per-date").removeClass('hidden')
  $(".hotels-customer-service-message-per-date").html("No orders for current date")
  $(".search-date-input-room-service").val('')
},


displayAllRoomServiceOrdersByDate(allDates) {
  $('.customer-service-ul').html('')
  $(".hotels-customer-service-message-per-date").html("Here are the orders for the current date")
  allDates.forEach (date => {
    $('.customer-service-ul').append(`<li class="align-horizontally">
      <p><span class="order-display">${date.date}</span></p> 
      <p><span class="order-display">${date.food}</span></p> 
      <p><span class="price-display">${date.totalCost}</span></p>
    </li>`)  
  })
}, 

displayOnMainTabAllRoomServiceOrdersByDate(allDates) {
  $('.today-orders').html('')
  allDates.forEach (date => {
    $('.today-orders').append(`<li class="align-horizontally">
      <p><span class="order-display">${date.date}</span></p> 
      <p><span class="order-display">${date.food}</span></p> 
      <p><span class="price-display">${date.totalCost}</span></p>
    </li>`)  
  })
},


clearInputs() {
  $('.every-order-for-indivitual-customer').html('')
  $('.room-service-message').html('')
  $('.room-service-heads').addClass('hidden')
  $('.today-customer-balance-message').html('')
}, 

displayCustomerRoomServiceChargeForOneDay(amount) {
  $('.today-customer-balance-message').html("Total balance for the selected date for this customer: " + amount +"$")
}, 

// displayNoInfoAmountPerCustomer() {
//   $('.total-customer-balance-message').html('')
//   // $('.today-customer-balance-message').html("No customer balance information for this date yet")
// },

displayTotalBalanceAllDaysPerCustomer(total) {
  $('.verify-customer-room-service-balance').removeClass('hidden')
  $('.room-service-form-for-balance').removeClass('hidden')
  $('.total-customer-balance-message').html('')
  $('.total-customer-balance-message').html("Total room service balance for this customer: " + total +"$")
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
  //Update all tabs to include info for that user - DONE

  //ROOMS
  //GENERAL
  //Display Most popular booking date - DONE
  //Display date with most rooms available - DONE

  //ROOMS BY CUSTOMER
//Display summary of all past and current bookings -DONE
//Book a room button- DONE
//Drop down menu with all available room types -DONE
//if not available display room types that are available - DONE
//Once booked - Order room service button - DONE

// ORDERS
//GENERAL
//Search input for all orders by DATE - DONE

//BY CUSTOMER
//breakdown of dates and orders for customer - DONE
//total spent by date - DONE
//total spent for all days - DONE
//error if no orders found - DONE

}

export default domUpdates;