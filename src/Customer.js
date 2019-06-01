class Customer {
    constructor(id, name){
        this.id = id || Date.now();
        this.name = name;
        // this.roomServiceBalance = 0;
        // this.roomChargeBalance = 0;
        // this.totalBalance = this.roomServiceBalance + this.roomChargeBalance;
    }


}

export default Customer;