class Customer {
    constructor(id, name){
        this.id = id || Date.now();
        this.name = name;
    }

}

export default Customer;