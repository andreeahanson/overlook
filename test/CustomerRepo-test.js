var chai = require('chai');
var expect = chai.expect;
import CustomerRepo from '../src/CustomerRepo';

import spies from 'chai-spies';
import Customer from '../src/Customer';
chai.use(spies);

// import domUpdates from '../src/domUpdates.js';
// chai.spy.on(domUpdates, 'displayWords', () => true);

const customerSampleData = [
    {
    id: 1,
    name: "Autumn Toy"
    },
    {
    id: 2,
    name: "Jannie VonRueden"
    },
    {
    id: 3,
    name: "Anya Upton"
    },
    {
    id: 4,
    name: "Milo Ankunding"
    }];

describe('CustomerRepo', function() {
    let customerRepo;

  beforeEach(function() {
    customerRepo = new CustomerRepo(customerSampleData);
  });

    it('should be a function', function() {
      expect(CustomerRepo).to.be.a('function');
    });
  
    it('should be an instance of CustomerRepo', function() {
      expect(customerRepo).to.be.an.instanceof(CustomerRepo);
    })

    it('should create a new customer', function() {
        expect(customerSampleData.length).to.equal(4);
        customerRepo.addCustomer();
        expect(customerSampleData.length).to.equal(5); 
        expect(customerSampleData[4]).to.eql({
          id: 7000, 
          name: "Andreea Hanson"
          });    
      })

    it('should find a customer by name', function() {
      expect(customerRepo.findCustomerByName("Jannie VonRueden")).to.eql({
          id: 2,
          name: "Jannie VonRueden"
      });
    })

    it('should validate a customer', function() {
      expect(customerRepo.validateCustomer("Johny Bravo")).to.equal(false);
    })

});