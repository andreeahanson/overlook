var chai = require('chai');
var expect = chai.expect;
import Hotel from '../src/Hotel';
import Customer from '../src/Customer';
import RoomServiceRepo from '../src/RoomServiceRepo';

import spies from 'chai-spies';
import Room from '../src/Room';
chai.use(spies);

import domUpdates from '../src/domUpdates.js';
import BookingRepo from '../src/BookingRepo';
// chai.spy.on(domUpdates, 'displayWords', () => true);

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
  userID: 83,
  date: "15/01/2020",
  roomNumber: 1
  },
  {
  userID: 61,
  date: "07/02/2020",
  roomNumber: 158
  },
  {
    userID: 83,
    date: "19/01/2020",
    roomNumber: 2
    },

  {
  userID: 98,
  date: "07/02/2020",
  roomNumber: 159
  }]

  const roomDataSample= [
    {
    number: 1,
    roomType: "residential suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 344.58
    },
    {
    number: 2,
    roomType: "single room",
    bidet: true,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 462.7
    },
    {
    number: 3,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 344.89
    },
    {
    number: 4,
    roomType: "junior suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 192.48
    }];

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
      userID: 83,
      date: "15/01/2020",
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

describe('Hotel', function() {
    let bookingRepo
    let customer
    let roomServiceRepo
    let hotel;

  beforeEach(function() {
    bookingRepo = new BookingRepo(bookingRepoSampleData, roomDataSample);
    customer = new Customer(4, "Milo Ankunding");
    roomServiceRepo = new RoomServiceRepo(roomServiceSampleData, customer);
    hotel = new Hotel(bookingRepo, roomServiceRepo);
  });

    it('should be a function', function() {
      expect(Hotel).to.be.a('function');
    });
  
    it('should be an instance of Hotel', function() {
      expect(hotel).to.be.an.instanceof(Hotel);
    })

    it('should calculate the overal total balance per one date', function() {
      expect(hotel.calculateOverallBalancePerDate("15/01/2020")).to.equal(357.65);
    })

    it('should calculate the total bill for one customer for all services for all dates', function() {
      expect(hotel.calculateATotalBillForOneCustomer(83)).to.equal(820.35);
    })
    
});