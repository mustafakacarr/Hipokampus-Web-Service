// components/order-components/OrderSteps.js

import PaymentForm from "../payment-components/PaymentForm";
import Done from "./forms/Done";
import InvoiceInformationForm from "./forms/InvoiceInformationForm";
import MeetingRoomOrderSteps from "./services-order-steps/MeetingRoomOrderSteps";
import VirtualOfficeOrderSteps from "./services-order-steps/VirtualOfficeOrderSteps";
import CateringOrderSteps from "./services-order-steps/CateringOrderSteps";
import CafeOrderSteps from "./services-order-steps/CafeOrderSteps";

import {
  MEETING_ROOM_ORDER,
  VIRTUAL_OFFICE_ORDER,
  CATERING_ORDER,
  CAFE_ORDER,
  EVENT,
  COWORKING_SPACE_ORDER,
} from "../../constants/OrderType";

const OrderSteps = (orderType) => {
  const customSteps = getCustomStep(orderType);
  return customSteps
    ? firstSteps.concat(customSteps, lastSteps)
    : firstSteps.concat(lastSteps);
};
const firstSteps = [
  {
    label: "Invoice Info",
    component: <InvoiceInformationForm />,
  },
];

const getCustomStep = (orderType) => {
  switch (orderType) {
    case MEETING_ROOM_ORDER:
      return MeetingRoomOrderSteps;
    case VIRTUAL_OFFICE_ORDER:
      return VirtualOfficeOrderSteps;
    case CATERING_ORDER:
      return CateringOrderSteps;
    case CAFE_ORDER:
      return CafeOrderSteps;
    case EVENT:
    case COWORKING_SPACE_ORDER:
    default:
      return false;
  }
};

const lastSteps = [
  {
    label: "Payment",
    component: <PaymentForm />,
  },
  {
    label: "Done",
    component: <Done />,
  },
];



export default OrderSteps;
