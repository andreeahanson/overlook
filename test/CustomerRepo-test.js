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

    const bookingRepoSampleData = [
      {
      userID: 78,
      date: "21/08/2019",
      roomNumber: 143
      },
      {
      userID: 43,
      date: "05/10/2019",
      roomNumber: 108
      },
      {
      userID: 5,
      date: "31/08/2019",
      roomNumber: 8
      },
      {
      userID: 14,
      date: "17/07/2019",
      roomNumber: 192
      },
      {
      userID: 3,
      date: "15/01/2020",
      roomNumber: 118
      },
      {
      userID: 61,
      date: "07/02/2020",
      roomNumber: 158
      },
      {
        userID: 83,
        date: "19/01/2020",
        roomNumber: 120
        },
    
      {
      userID: 98,
      date: "07/02/2020",
      roomNumber: 159
      }]

describe('CustomerRepo', function() {
    let customerRepo;

  beforeEach(function() {
    customerRepo = new CustomerRepo(customerSampleData, bookingRepoSampleData);
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

    it('should find all bookings one customer has made', function() {
      expect(customerRepo.findOneCustomersBookings("Anya Upton")).to.eql([{userID: 3, date: "15/01/2020", roomNumber: 118}])
  })

});