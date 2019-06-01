import domUpdates from "./domUpdates";

class Hotel {
  constructor(bookingRepo) {
    this.currentDate = this.showTodaysDate();
    this.bookingRepo = bookingRepo;
  }

  showTodaysDate() {
    let today = new Date();
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let dd = String(today.getDate()).padStart(2, '0');
    let yyyy = today.getFullYear();
    return today = dd + '/' + mm + '/' + yyyy;
  }

  // to add revenue from room service



}

export default Hotel;