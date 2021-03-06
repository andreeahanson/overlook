import RoomService from './RoomService'

class RoomServiceRepo {
  constructor(roomServiceData, customer){
    this.roomServiceData = roomServiceData;
    this.customer = customer;
  }

  orderRoomService(userID, date) {
    let roomService = new RoomService(userID, date, "Rustic Hey Sandwich", 5.97)
    this.roomServiceData.push(roomService)
  }

  returnCustomerServiceOrdersForOneCustomer(customerID) {
    return this.roomServiceData.filter(order => order.userID === customerID)
  }

  returnAllCustomerServiceOrdersForOneDate(orderDate) {
    return this.roomServiceData.filter(order => order.date === orderDate)
  }

  returnTotalAmountSpentOnRoomServicePerDateForOneCustomer(userID, date) {
    let ordersPerDatePerCustomer = this.roomServiceData.filter(order => order.userID === userID && order.date === date)
    return ordersPerDatePerCustomer.reduce((total, order) => {
      total += order.totalCost;
      return total
    }, 0)
  }

  returnTotalAmountSpentOnRoomServiceForOneCustomerAllDAys(userID) {
    let ordersPerDatePerCustomer = this.roomServiceData.filter(order => order.userID === userID)
    return ordersPerDatePerCustomer.reduce((total, order) => {
      total += order.totalCost;
      return total
    }, 0)
  }

  returnTotalAmountSpentOnRoomServicePerDateForAllCustomers(orderDate) {
    return this.roomServiceData.filter(order => order.date === orderDate).reduce((total, eachOrder) => {
      total += eachOrder.totalCost;
      return total
    }, 0)
  }
  

}

export default RoomServiceRepo; 