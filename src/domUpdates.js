import $ from 'jquery';

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
  $('.total-revenue-today').html('')
  $('.total-revenue-today').html(revenue)
},

displayBookingDetailsPerDate(bookingInfo) {
  $('.today-bookings').html('')
  bookingInfo.forEach(room => $('.today-bookings').append(`<li class="room-number">Room: ${room.roomNumber}</li>`))
},

displayErrorMsg() {
  alert('No guest by that name')
},

displayName(name) {
  $('.selected-customer').html(name.name)
},

displayCustomerTotalBill(amount) {
  $('.bill').html('')
  $('.bill').html('Total Bill: ' + amount + '$')
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
  allBookings.forEach(booking => $('.customer-list-ul').append(`<li class="customer-list customer-date ${booking.date} ${booking.roomNumber}"><button class="upgrade-button ${booking.date} ${booking.roomNumber}">Upgrade Room</button>${booking.date} <span class="booking-room-number">Room: ${booking.roomNumber} </span></li>`))
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
    $('.availability-ul').append(`<tr>
    <td>${room.number}</td>
    <td>${room.roomType}</td>
    <td>${room.numBeds}</td>
    <td>${room.bedSize}</td>
    <td>${room.bidet}</td>
    <td>${room.costPerNight}</td></tr>`) 
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
    $('.filter-today-rooms').append(`<tr>
    <td>${room.number}</td>
    <td>${room.roomType}</td>
    <td>${room.numBeds}</td>
    <td>${room.bedSize}</td>
    <td>${room.bidet}</td>
    <td>${room.costPerNight}</td>
    <td><button id="book-btn-today" class="${room.number}">Book Room</button></td></tr>`)
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
  $('.every-order-for-indivitual-customer').html('')
  $(".hotels-customer-service-message-per-date").addClass('hidden')
  $('.every-order-for-indivitual-customer').removeClass('hidden')
  $('.room-service-heads').removeClass('hidden')
  $('.room-service-message').html('Here are this customer\'s room service orders')
  orders.forEach(order => {
    $('.every-order-for-indivitual-customer').append(`<tr><td>${order.date}</td><td>${order.food}</td><td>${order.totalCost}</td></tr>`)
  })
}, 

displayNoCustomerServiceMessage() {
  $('.customer-service-ul').html('')
  $(".hotels-customer-service-message-per-date").removeClass('hidden')
  $(".hotels-customer-service-message-per-date").html("No orders for current date")
  $(".search-date-input-room-service").val('')
},


displayAllRoomServiceOrdersByDate(allDates) {
  $(".hotels-customer-service-message-per-date").html("Here are the orders for the current date")
  allDates.forEach (date => {
    $('.customer-service-ul').append(`<tr><td>${date.date}</td><td>${date.food}</td><td>${date.totalCost}</td></tr>`)
  })
  $(".search-date-input-room-service").val('')
}, 

displayOnMainTabAllRoomServiceOrdersByDate(allDates) {
  allDates.forEach (date => {
    $('.today-orders').append(`<tr><td>${date.date}</td><td>${date.food}</td><td>${date.totalCost}</td></tr>`)
  })
},

clearInputs() {
  $('.every-order-for-indivitual-customer').html('')
  $('.room-service-message').html('')
  $('.room-service-heads').addClass('hidden')
  $('.today-customer-balance-message').html('')
  $('.general-info').addClass('hidden')
  $('.order-room-service-btn').addClass('hidden')
  $('.order-room-service').addClass('hidden')
  $('.rooms-by-type').addClass('hidden')
  $('.book-a-room-btn').addClass('hidden')
}, 

displayCustomerRoomServiceChargeForOneDay(amount) {
  $('.today-customer-balance-message').html("Total balance for the selected date for this customer: " + amount +"$")
}, 

displayTotalBalanceAllDaysPerCustomer(total) {
  $('.verify-customer-room-service-balance').removeClass('hidden')
  $('.room-service-form-for-balance').removeClass('hidden')
  $('.total-customer-balance-message').html('')
  $('.total-customer-balance-message').html("Total room service balance for this customer: " + total +"$")
}

}

export default domUpdates;