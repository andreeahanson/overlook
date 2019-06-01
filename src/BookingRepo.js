import Booking from "./Booking";
import domUpdates from "./domUpdates"

class BookingRepo {
  constructor(bookingData, roomData){
    this.bookingData = bookingData; 
    this.roomData = roomData;
    this.totalRooms = this.roomData.length; 
  }

  calculateOccupiedRoomsByDate(date) {
    return this.bookingData.filter(room => room.date === date).length
  }

  calculateAvailableRoomsByDate(date) {
    let availableRooms = this.totalRooms - this.bookingData.filter(room => room.date === date).length;
    domUpdates.displayAvailability(availableRooms)
  }

  filterRoomsByType(type) {
    return this.roomData.filter(room => room.roomType === type)
  }
  
  addNewBooking() {
    let booking = new Booking(555, "25/08/2019", 143)
    this.bookingData.push(booking)
  }

  removeBooking(book) {
    let indexOfBooking = this.bookingData.findIndex(booking => booking.userID === book.userID && booking.date === book.date && booking.roomNumber === book.roomNumber)
    this.bookingData.splice(indexOfBooking, 1)
  }

  showMostPopularBookingDate() {
    let dates = this.bookingData.map(book => book.date)
    let popularDate = dates.reduce((acc, date) => {
      acc[date] = ++ acc[date] || 1
      return acc
    },{})
    let mostPopularDate = Object.entries(popularDate).sort((a, b) => a[1] - b[1]).pop()[0]
    return mostPopularDate
  }

  showLeastPopularBookingDate() {
    let dates = this.bookingData.map(book => book.date)
    let nonPopularDate = dates.reduce((acc, date) => {
      acc[date] = ++ acc[date] || 1
      return acc
    },{})
    let leastPopularDate = Object.entries(nonPopularDate).sort((a, b) => a[1] - b[1]).shift()[0]
    return leastPopularDate
  } 
  
  showCustomersBookings(customerID) {
    return this.bookingData.filter(book => book.userID === customerID);
  }

  noDataMessage(customerID) {
    if (this.bookingData.filter(book => book.userID === customerID).length === 0){
      return "No data for this customer"
    }
  }

}

export default BookingRepo;