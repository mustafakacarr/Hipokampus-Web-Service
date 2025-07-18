import React from 'react';
import PaymentForm from '../components/payment-components/PaymentForm';
import OrderFailed from '../components/order-components/OrderFailed';
import OrderSuccess from "../components/order-components/OrderSuccess";
import OrderLayout from '../layouts/OrderLayout';
import OrderSteps from '../components/order-components/OrderSteps';
import { CAFE_ORDER } from '../constants/OrderType';

const orderStatusPages = [
  {
    label: "Failed",
    path: "/checkout/success",
    component: <OrderSuccess />,
  },
  {
    label: "Success",
    path: "/checkout/failed",
    component: <OrderFailed />,
  },
];
const baseOrderSteps = OrderSteps(CAFE_ORDER); 
const OrderRoutes = baseOrderSteps.concat(orderStatusPages);


export default OrderRoutes;