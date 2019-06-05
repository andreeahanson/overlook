var chai = require('chai');
var expect = chai.expect;

import RoomServiceRepo from '../src/RoomServiceRepo';
import Customer from '../src/Customer';

import spies from 'chai-spies';
chai.use(spies);


const roomServiceSampleData = [
  {
  userID: 34,
  date: "21/10/2019",
  food: "Generic Plastic Sandwich",
  totalCost: 9.48
  },
  {
  userID: 37,
  date: "24/12/2019",
  food: "Generic Soft Sandwich",
  totalCost: 24.24
  },
  {
  userID: 9,
  date: "15/07/2019",
  food: "Tasty Fresh Sandwich",
  totalCost: 13.07
  },
  {
  userID: 22,
  date: "01/01/2020",
  food: "Rustic Soft Sandwich",
  totalCost: 18.63
  },
  {
  userID: 90,
  date: "09/01/2020",
  food: "Sleek Concrete Sandwich",
  totalCost: 15.97
  },
  {
  userID: 98,
  date: "19/07/2019",
  food: "Rustic Wooden Sandwich",
  totalCost: 5.86
  }];


describe('RoomServiceRepo', function() {
    let customer;
    let roomServiceRepo;

  beforeEach(function() {
    customer = new Customer(4, "Milo Ankunding");
    roomServiceRepo = new RoomServiceRepo(roomServiceSampleData, customer);
  });

    it('should be a function', function() {
      expect(RoomServiceRepo).to.be.a('function');
    });
  
    it('should be an instance of RoomServiceRepo', function() {
      expect(roomServiceRepo).to.be.an.instanceof(RoomServiceRepo);
    })


    it('should be able to create a new room service order', function() {
      expect(roomServiceSampleData.length).to.equal(6);
      roomServiceRepo.orderRoomService(98, "19/07/2019");
      expect(roomServiceSampleData.length).to.equal(7);
      expect(roomServiceSampleData[roomServiceSampleData.length-1]).to.eql( {
        userID: 98,
        date: "19/07/2019",
        food: "Rustic Hey Sandwich",
        totalCost: 5.97
        })
    })

    it('should show all orders of a customer', function() {
      expect(roomServiceRepo.returnCustomerServiceOrdersForOneCustomer(98)).to.eql([{ userID: 98,
        date: '19/07/2019',
        food: 'Rustic Wooden Sandwich',
        totalCost: 5.86 },
      {
        userID: 98,
        date: '19/07/2019',
        food: 'Rustic Hey Sandwich',
        totalCost: 5.97 } ]);
    })

    it('should show the total of all orders by date', function() {
      expect(roomServiceRepo.returnAllCustomerServiceOrdersForOneDate("24/12/2019")).to.eql([{
        userID: 37,
        date: "24/12/2019",
        food: "Generic Soft Sandwich",
        totalCost: 24.24
        }]);
    })

    it('should calculate the total amount spent on roomService by one customer per date', function() {
      expect(roomServiceRepo.returnTotalAmountSpentOnRoomServicePerDateForOneCustomer(90, "09/01/2020")).to.equal(15.97);
    })
   
    it('should calculate the total amount spent on roomService by all customers per date', function() {
      expect(roomServiceRepo.returnTotalAmountSpentOnRoomServicePerDateForAllCustomers("09/01/2020")).to.equal(15.97);
    })
    
});