var chai = require('chai');
var expect = chai.expect;
import RoomService from '../src/RoomService';

import spies from 'chai-spies';
chai.use(spies);

// import domUpdates from '../src/domUpdates.js';
// chai.spy.on(domUpdates, 'displayWords', () => true);



describe('RoomService', function() {
    let roomService;

  beforeEach(function() {
    roomService = new RoomService(34, "21/10/2019", "Generic Plastic Sandwich", 9.48);
  });

    it('should be a function', function() {
      expect(RoomService).to.be.a('function');
    });
  
    it('should be an instance of Room', function() {
      expect(roomService).to.be.an.instanceof(RoomService);
    })

    it('should have a date', function() {
      expect(roomService.date).to.equal("21/10/2019");
    })

    it('should select a food item from the menu', function() {
      expect(roomService.food).to.equal("Generic Plastic Sandwich");
    })

    it('should show the price of the item', function() {
      expect(roomService.totalCost).to.equal(9.48);
    })

    
});