var chai = require('chai');
var expect = chai.expect;
import Hotel from '../src/Hotel';

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

describe('Hotel', function() {
    let bookingRepo
    let hotel;

  beforeEach(function() {
    bookingRepo = new BookingRepo(bookingRepoSampleData, roomDataSample);
    hotel = new Hotel(bookingRepo);
  });

    it('should be a function', function() {
      expect(Hotel).to.be.a('function');
    });
  
    it('should be an instance of Hotel', function() {
      expect(hotel).to.be.an.instanceof(Hotel);
    })

    it.skip('should show the current date', function() {
      expect(hotel.currentDate).to.equal("31/05/2019");
    })

    
    
});