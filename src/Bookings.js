class Bookings {
  constructor(bookingsData, roomData){
    this.bookingsData = bookingsData; 
    this.roomData = roomData;
    this.totalRooms = this.roomData.length;
  }

  calculateOccupiedRoomsByDate(date) {
    return this.bookingsData.filter(room => room.date === date).length
  }

  calculateAvailableRoomsByDate(date) {
    return this.totalRooms - this.bookingsData.filter(room => room.date === date).length
  }

  filterRoomsByType(type) {
    return this.roomData.filter(room => room.roomType === type)
  }
  
  addNewBooking() {
    
  }

}

export default Bookings;