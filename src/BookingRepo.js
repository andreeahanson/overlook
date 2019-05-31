import Booking from "./Booking";

class BookingRepo {
  constructor(bookingRepoData, roomData){
    this.bookingRepoData = bookingRepoData; 
    this.roomData = roomData;
    this.totalRooms = this.roomData.length;
  }

  calculateOccupiedRoomsByDate(date) {
    return this.bookingRepoData.filter(room => room.date === date).length
  }

  calculateAvailableRoomsByDate(date) {
    return this.totalRooms - this.bookingRepoData.filter(room => room.date === date).length
  }

  filterRoomsByType(type) {
    return this.roomData.filter(room => room.roomType === type)
  }
  
  addNewBooking() {
    let booking = new Booking(555, "25/08/2019", 143)
    this.bookingRepoData.push(booking)
  }

  removeBooking(book) {
    let indexOfBooking = this.bookingRepoData.findIndex(booking => booking.userID === book.userID && booking.date === book.date && booking.roomNumber === book.roomNumber)
    this.bookingRepoData.splice(indexOfBooking, 1)
  }

  showMostPopularBookingDate() {
    let dates = this.bookingRepoData.map(book => book.date)
    let popularDate = dates.reduce((acc, date) => {
      acc[date] = ++ acc[date] || 1
      return acc
    },{})
    let mostPopularDate = Object.entries(popularDate).sort((a, b) => a[1] - b[1]).pop()[0]
    return mostPopularDate
  }

  showLeastPopularBookingDate() {
    let dates = this.bookingRepoData.map(book => book.date)
    let nonPopularDate = dates.reduce((acc, date) => {
      acc[date] = ++ acc[date] || 1
      return acc
    },{})
    let leastPopularDate = Object.entries(nonPopularDate).sort((a, b) => a[1] - b[1]).shift()[0]
    return leastPopularDate
  } 
  
  showCustomersBookings(customerID) {
    return this.bookingRepoData.filter(book => book.userID === customerID);
  }

  noDataMessage(customerID) {
    if (this.bookingRepoData.filter(book => book.userID === customerID).length === 0){
      return "No data for this customer"
    }
  }

}

export default BookingRepo;