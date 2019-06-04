import domUpdates from "./domUpdates";

class Hotel {
  constructor(bookingRepo, roomServiceRepo) {
    this.currentDate = this.showTodaysDate();
    this.bookingRepo = bookingRepo;
    this.roomServiceRepo = roomServiceRepo;
  }

  showTodaysDate() {
    let today = new Date();
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let dd = String(today.getDate()).padStart(2, '0');
    let yyyy = today.getFullYear();
    return today = dd + '/' + mm + '/' + yyyy;
  }

  calculateOverallBalancePerDate(date) {
    let overallHotelBalancePerDate = this.bookingRepo.showTotalBookingRevenueToday(date) + this.roomServiceRepo.returnTotalAmountSpentOnRoomServicePerDateForAllCustomers(date)
    return overallHotelBalancePerDate;
  }

  calculateATotalBillForOneCustomer(customerID) {
    let totalBill = this.bookingRepo.returnTotalBookingBalanceForOneCustomerAllDAys(customerID) + this.roomServiceRepo.returnTotalAmountSpentOnRoomServiceForOneCustomerAllDAys(customerID)
    return totalBill
}

}

export default Hotel;