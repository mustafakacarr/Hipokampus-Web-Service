import { CAFE_ORDER, CATERING_ORDER, PACKAGE_ORDER_TYPES, EVENT } from "../constants/OrderType";

export const initialPayloadByOrderType = (order, orderType, payload) => {
  if (orderType === CAFE_ORDER) {
    const orderedProducts = order.basket.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {});

    payload.orderedProducts = orderedProducts;
  } else if (PACKAGE_ORDER_TYPES.includes(orderType)) {
    payload.packageId = order.packageId;
    payload.periodId = order.periodId;
  } else if (orderType === CATERING_ORDER) {
    payload.dailyMealId = order.dailyMealId;
    payload.firstGroupFoodId = order.firstMealId;
    payload.secondGroupFoodId = order.secondMealId;
    payload.thirdGroupFoodId = order.thirdMealId;
  } else if (orderType === EVENT) {
    payload.eventId = order.eventId;
  } else {
    console.warn("Unsupported order type:", orderType);
    return;
  }
};

export const setResponseByOrderType = (orderType, response) => {
  if (orderType === CAFE_ORDER) {
    return {
      basket: response.data.orderedProducts,
      totalPrice: response.data.totalPrice,
    }
  } else if (PACKAGE_ORDER_TYPES.includes(orderType)) {
    return {
      packageName: response.data.packageName,
      packageDescription: response.data.packageDescription,
      periodName: response.data.periodName,
    }
  } else if (orderType === CATERING_ORDER) {
    return {
      firstGroupFoodName: response.data.firstGroupFood.productName,
      secondGroupFoodName: response.data.secondGroupFood.productName,
      thirdGroupFoodName: response.data.thirdGroupFood.productName
    }
  } else if (orderType === EVENT) {
    return {
      eventName: response.data.eventName
    }
  }
};
