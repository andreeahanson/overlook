var chai = require('chai');
var expect = chai.expect;
import Customer from '../src/Customer';

import spies from 'chai-spies';
chai.use(spies);

// import domUpdates from '../src/domUpdates.js';
// chai.spy.on(domUpdates, 'displayWords', () => true);


describe('Customer', function() {
    let customer;

  beforeEach(function() {
    customer = new Customer(4, "Milo Ankunding");
  });

    it('should be a function', function() {
      expect(Customer).to.be.a('function');
    });
  
    it('should be an instance of Customer', function() {
      expect(customer).to.be.an.instanceof(Customer);
    })

    it('should have a customer id', function() {
      expect(customer.id).to.equal(4);
    })

    it('should have a name', function() {
      expect(customer.name).to.equal("Milo Ankunding");
    })


    //CALCULATE TOTAL BALANCE OR ADD DIRECTLY TO THE PROPERTY?
    // it('should calculate the total balance of a customer', function() {
    //   expect(customer.balance).to.equal(0);
    //   customer.calculateTotalBalance();

    // })

});