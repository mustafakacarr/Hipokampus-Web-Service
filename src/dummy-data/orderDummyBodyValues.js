const cafeOrder = {
  //Cafe order mockup
  userId: 1,
  basket: [
    { id: 1, quantity: 2 },
    { id: 2, quantity: 1 },
  ],
  orderType,
};

const cateringOrder = {
  //Cafe order mockup
  userId: 1,
  priGroupFoodId: 1,
  secGroupFoodId: 1,
  thirdGroupFoodId: 1,
};

const packageOrder = {
  userId: 1,
  packageId: 1,
  periodId: 1,
};

const ticketOrder = {
  userId: 1,
  eventId: 1,
};

//These objects are necessary to fill RightCartSummary and for regarding actions. 
//It should not be forgotten that they are not exactly body values which are expected by API.
//It can be checked on the Swagger by going to the endpoints starting with /api/v1.0/orders to see all required fields.