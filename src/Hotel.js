import domUpdates from "./domUpdates";

class Hotel {
  constructor() {
    this.currentDate = this.showTodaysDate();
  }

  showTodaysDate() {
    let today = new Date();
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let dd = String(today.getDate()).padStart(2, '0');
    let yyyy = today.getFullYear();
    return today = dd + '/' + mm + '/' + yyyy;
}

}

export default Hotel;