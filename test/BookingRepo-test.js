var chai = require('chai');
var expect = chai.expect;
import BookingRepo from '../src/BookingRepo';

import spies from 'chai-spies';
import Booking from '../src/Booking';
chai.use(spies);

import domUpdates from '../src/domUpdates.js';
chai.spy.on(domUpdates, 'displayAvailability', () => true);

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
  roomNumber: 4
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
    roomType: "junior suite",
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
    roomType: "suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 192.48
    }, 
    {
      number: 5,
      roomType: "residential suite",
      bidet: false,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 344.89
      }];

describe('BookingRepo', function() {
    let bookingRepo;

  beforeEach(function() {
    bookingRepo = new BookingRepo(bookingRepoSampleData, roomDataSample);
  });

    it('should be a function', function() {
      expect(BookingRepo).to.be.a('function');
    });
  
    it('should be an instance of Bookings', function() {
      expect(bookingRepo).to.be.an.instanceof(BookingRepo);
    })

    it('should have a total number of rooms', function() {
      expect(bookingRepo.totalRooms).to.equal(roomDataSample.length);
    })
    
    it('should calculate the number of occupied rooms based on the date', function() {
      expect(bookingRepo.calculateNumberOfOccupiedRoomsByDate("07/02/2020")).to.equal(2);
    })

    it('should calculate the percentage of occupied rooms based on the date', function() {
      expect(bookingRepo.calculateOccupationPercentageForDate("07/02/2020")).to.equal(40);
    })

    it('should return the available rooms based on the date', function() {
      expect(bookingRepo.returnAvailableRooms("17/07/2019")).to.eql([{
        number: 1,
        roomType: "junior suite",
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
          number: 5,
          roomType: "residential suite",
          bidet: false,
          bedSize: "queen",
          numBeds: 1,
          costPerNight: 344.89
          }]);
    })


    it('should return the available rooms based on the date and the type of room', function() {
      expect(bookingRepo.filterTodayAvailableRoomsByType("17/07/2019", "single room")).to.eql([
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
        }]);
    })

    it('should return the details of the occupied rooms based on the date', function() {
      expect(bookingRepo.returnBookingDetailsByDate("07/02/2020")).to.eql([{
        userID: 61,
        date: "07/02/2020",
        roomNumber: 158
        },
        {
        userID: 98,
        date: "07/02/2020",
        roomNumber: 159
        }]);
    })

    it('should calculate the number of available rooms based on the date', function() {
      expect(bookingRepo.calculateAvailableRoomsByDate("07/02/2020")).to.equal(3);
    })

    it('should filter rooms by type', function() {
      expect(bookingRepo.filterRoomsByType("single room")).to.eql([{
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
        }]);
    })

  it('should create a new booking', function() {
    expect(bookingRepoSampleData.length).to.equal(8);
    bookingRepo.addNewBooking();
    expect(bookingRepoSampleData.length).to.equal(9);
  })

  it('should delete a booking', function() {
    expect(bookingRepoSampleData.length).to.equal(9);
    bookingRepo.removeBooking(  {
      userID: 43,
      date: "05/10/2019",
      roomNumber: 108
      });
    expect(bookingRepoSampleData.length).to.equal(8);
  })

  it('should show the date with the most bookings', function() {
    expect(bookingRepo.showMostPopularBookingDate()).to.equal("07/02/2020");
  })

  it('should show the date with the least bookings', function() {
    expect(bookingRepo.showLeastPopularBookingDate()).to.equal("21/08/2019");
  })

  it('should show all of a customer\'s bookings', function() {
    expect(bookingRepo.showCustomersBookings(83)).to.eql([{
      userID: 83,
      date: "15/01/2020",
      roomNumber: 1
      },
      {
        userID: 83,
        date: "19/01/2020",
        roomNumber: 2
        }]);
  })

  // it('should show all of a customer\'s bookings by date', function() {
  //   expect(bookingRepo.showCustomersBookingsByDate(83, "19/01/2020")).to.eql([
  //     {
  //       userID: 83,
  //       date: "19/01/2020",
  //       roomNumber: 2
  //       }]);
  // })
  
  it('should calculate the total amount a customer has to pay for all their bookings', function() {
    expect(bookingRepo.returnTotalBookingBalanceForOneCustomerAllDAys(83)).to.equal(807.28);
  })

  it('should calculate the total amount a customer has to pay for one day for booking', function() {
    expect(bookingRepo.returnBookingBalanceForOneCustomerPerDay(83, "15/01/2020")).to.equal(344.58);
  })


  it('should return the requested info for a customer, or a message saying there is no data for that customer', function() {
    expect(bookingRepo.noDataMessage(24)).to.equal("No data for this customer");
  })

  it('should upgrate a customer\'s room for a specific date', function() {
    // roomDataSample.push({
    //   number: 5,
    //   roomType: "residential suite",
    //   bidet: false,
    //   bedSize: "queen",
    //   numBeds: 1,
    //   costPerNight: 344.89
    //   })
    expect(bookingRepo.showCustomersBookings(83)).to.eql([{
      userID: 83,
      date: "15/01/2020",
      roomNumber: 1
      },
      {
        userID: 83,
        date: "19/01/2020",
        roomNumber: 2
        }]);
    
    bookingRepo.upgradeRoom(83, "19/01/2020")
    expect(bookingRepo.showCustomersBookings(83)).to.eql([{
      userID: 83,
      date: "15/01/2020",
      roomNumber: 1
      },
      {
        userID: 83,
        date: "19/01/2020",
        roomNumber: 1
        }]);
  })
    
});