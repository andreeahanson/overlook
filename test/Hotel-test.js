var chai = require('chai');
var expect = chai.expect;
import Hotel from '../src/Hotel';

import spies from 'chai-spies';
import Room from '../src/Room';
chai.use(spies);

import domUpdates from '../src/domUpdates.js';
// chai.spy.on(domUpdates, 'displayWords', () => true);


describe('Hotel', function() {
    let hotel;

  beforeEach(function() {
    hotel = new Hotel();
  });

    it('should be a function', function() {
      expect(Hotel).to.be.a('function');
    });
  
    it('should be an instance of Hotel', function() {
      expect(hotel).to.be.an.instanceof(Hotel);
    })

    it('should show the current date', function() {
      expect(hotel.currentDate).to.equal("31/05/2019");
    })

    
    
});