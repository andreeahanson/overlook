var chai = require('chai');
var expect = chai.expect;
import Booking from '../src/Booking';

import spies from 'chai-spies';
import Room from '../src/Room';
chai.use(spies);

// import domUpdates from '../src/domUpdates.js';
// chai.spy.on(domUpdates, 'displayWords', () => true);

const bookingsSampleData = [
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

describe('Booking', function() {
    let booking;

  beforeEach(function() {
    booking = new Booking(78, "21/08/2019", 143);
  });

    it('should be a function', function() {
      expect(Booking).to.be.a('function');
    });
  
    it('should be an instance of Booking', function() {
      expect(booking).to.be.an.instanceof(Booking);
    })

    it('should show the userID', function() {
      expect(booking.userID).to.equal(78);
    })

    it('should show the date of the booking', function() {
      expect(booking.date).to.equal("21/08/2019");
    })

    it('should show the booked room number', function() {
      expect(booking.roomNumber).to.equal(143);
    })

    
});