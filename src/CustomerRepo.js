import Customer from "./Customer";

class CustomerRepo {
    constructor(customerData){
        this.customerData = customerData;
    }

    addCustomer() {
        let customer = new Customer(7000, "Andreea Hanson");
        this.customerData.push(customer);
    }

    findCustomerByName(currentName) {
        return this.customerData.find(customer => customer.name.toUpperCase() === currentName.toUpperCase())
    }

    validateCustomer(name){
        let allNames = this.customerData.map(el => el.name.toUpperCase());
        return allNames.includes(name.toUpperCase()) ? true : false;
    }



}

export default CustomerRepo;