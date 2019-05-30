var chai = require('chai');
var expect = chai.expect;
import Room from '../src/Room';

import spies from 'chai-spies';
chai.use(spies);

// import domUpdates from '../src/domUpdates.js';
// chai.spy.on(domUpdates, 'displayWords', () => true);

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


describe('Room', function() {
    let room;

  beforeEach(function() {
    room = new Room(1, "residential suite", false, "twin", 2, 344.58);
  });

    it('should be a function', function() {
      expect(Room).to.be.a('function');
    });
  
    it('should be an instance of Room', function() {
      expect(room).to.be.an.instanceof(Room);
    })

    it('should have a number', function() {
      expect(room.number).to.equal(1);
    })

    it('should have a room type', function() {
      expect(room.roomType).to.equal("residential suite");
    })

    it('should have a bidet in some rooms', function() {
      expect(room.bidet).to.equal(false);
    })

    it('should have a bed size', function() {
      expect(room.bedSize).to.equal("twin");
    })

    it('should have a number of beds', function() {
      expect(room.numBeds).to.equal(2);
    })

    it('should have a cost per night', function() {
      expect(room.costPerNight).to.equal(344.58);
    })
    
});