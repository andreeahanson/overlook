import Booking from "./Booking";

class BookingRepo {
  constructor(bookingData, roomData){
    this.bookingData = bookingData; 
    this.roomData = roomData;
    this.totalRooms = this.roomData.length; 
  }

  calculateNumberOfOccupiedRoomsByDate(date) {
    return this.bookingData.filter(room => room.date === date).length
  }

  calculateOccupationPercentageForDate(date) {
    return this.calculateNumberOfOccupiedRoomsByDate(date)/this.totalRooms * 100
  }

  
  returnAvailableRooms(date) {
    let bookingsByDate = this.bookingData.filter(book => book.date === date).map(el => el.roomNumber)
    let availableRooms = this.roomData.filter(room => !bookingsByDate.includes(room.number))
    return availableRooms
  }
  

  returnBookingDetailsByDate(date) {
    return this.bookingData.filter(room => room.date === date)
  }

  calculateAvailableRoomsByDate(date) {
    let availableRooms = this.totalRooms - this.bookingData.filter(room => room.date === date).length;
    return availableRooms
  }

  filterRoomsByType(type) {
    return this.roomData.filter(room => room.roomType === type)
  }
  
  filterTodayAvailableRoomsByType(date, type) {
    return this.returnAvailableRooms(date).filter(room => room.roomType === type)
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

  returnTotalBookingBalanceForOneCustomerAllDAys(customerID) {
    let balance = this.showCustomersBookings(customerID).reduce((total, booking) => {
      this.roomData.forEach(room => {
        if(room.number === booking.roomNumber) {
          total +=room.costPerNight
        }
      })
      return total
    }, 0)
    return balance
  }


  returnBookingBalanceForOneCustomerPerDay(customerID, date) {
    let balancePerDate = this.showCustomersBookings(customerID).filter(book => book.date === date).reduce((total, booking) => {
      this.roomData.forEach(room => {
        if(room.number === booking.roomNumber) {
          total += room.costPerNight
        }
      })
      return total
    }, 0)
    return balancePerDate
  }



  noDataMessage(customerID) {
    if (this.bookingData.filter(book => book.userID === customerID).length === 0){
      return "No data for this customer"
    }
  }

  showTotalBookingRevenueToday(date) {
    let bookingCash = this.bookingData.reduce((acc, booking) => {
      this.roomData.forEach(room => {
        if(booking.date === date && room.number === booking.roomNumber) {
          acc += room.costPerNight
        }
      })
      return acc
    }, 0)
    return bookingCash;
  } 
  
  
  upgradeRoom (customerID, date) {
    let singleRooms = this.roomData.filter(room => room.roomType === "single room").map(room => room.number)
    let juniorSuites = this.roomData.filter(room => room.roomType === "junior suite").map(room => room.number)
    let suites = this.roomData.filter(room => room.roomType === "suite").map(room => room.number)
    let residentialSuites = this.roomData.filter(room => room.roomType === "residential suite").map(room => room.number)
    
    let singleRoom = {
      count: 1,
      type: "single room",
      roomNumbers: singleRooms
    }
    let juniorSuite = {
      count: singleRoom.count + 1,
      type: "junior suite",
      roomNumbers: juniorSuites
    }
    let suite = {
      count: juniorSuite.count + 1,
      type: "suite",
      roomNumbers: suites
    }
    let residentialSuite = {
      count: suite.count + 1,
      type: "residential suite",
      roomNumbers: residentialSuites
    }
    
    let sortedRoomNumbers = [singleRoom, juniorSuite, suite, residentialSuite]
    let match = this.bookingData.filter(book => book.userID === customerID && book.date === date).reduce((acc, bookingA) => {
      sortedRoomNumbers.forEach((roomType, index) => {
        if (roomType.roomNumbers.includes(bookingA.roomNumber) && sortedRoomNumbers[index].count <= 3){
          this.removeBooking(bookingA)
          let plus = sortedRoomNumbers[index+1].type
          let increase = this.filterTodayAvailableRoomsByType(date, plus)[0]
          let numberT = increase.number
          let booking = new Booking(customerID, date, numberT)
          this.bookingData.push(booking)
          acc = booking
        } 
      })
      return acc
    }, {})
    return match
  }

  
  

}

export default BookingRepo;