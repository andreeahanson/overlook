import Customer from "./Customer";
import domUpdates from "./domUpdates";

class CustomerRepo {
    constructor(customerData, bookingData){
        this.customerData = customerData;
        this.bookingData = bookingData;
    }

    addCustomer() {
        let customer = new Customer(7000, "Andreea Hanson");
        this.customerData.push(customer);
        console.log("NEW", this.customerData.length)
        domUpdates.displayNewName(customer.name)
    }


    findCustomerByName(currentName) {
        let searchedCustomer =  this.customerData.filter(customer => customer.name.toUpperCase().includes(currentName.toUpperCase()))
        console.log("ME", searchedCustomer)
        if (searchedCustomer.length > 0) {
            domUpdates.searchCustomerFilterAutofill(searchedCustomer)
        } else {
            // domUpdates.displayErrorMsg()
            console.log("NO")
        }
        return searchedCustomer
    }
    
    // displayCustomerName(currentName) {
    //     domUpdates.displayName(findCustomerByName(currentName))
    // }

    validateCustomer(name){
        let allNames = this.customerData.map(el => el.name.toUpperCase());
        return allNames.includes(name.toUpperCase()) ? true : false;
    }

    findOneCustomersBookings(currentName) {
        return this.bookingData.filter(booking => booking.userID === this.findCustomerByName(currentName).id)
    }

    // displayCustomerBookings(currentName) {
    //     domUpdates.displayAllOnesCustomerBookings(findOneCustomersBookings(currentName))
    // }

}

export default CustomerRepo;