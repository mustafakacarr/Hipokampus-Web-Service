import React from 'react';
import PaymentForm from '../components/payment-components/PaymentForm';
import OrderFailed from '../components/order-components/OrderFailed';
import OrderSuccess from "../components/order-components/OrderSuccess";
import OrderLayout from '../layouts/OrderLayout';
import Steps from '../components/order-components/OrderSteps';

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
const OrderRoutes = Steps.concat(orderStatusPages)


export default OrderRoutes;