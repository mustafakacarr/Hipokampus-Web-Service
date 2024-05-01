import PersonalInformationForm from "./forms/PersonalInformationForm";
import MeetingRoomReservationForm from "./forms/MeetingRoomReservationForm";
import PaymentForm from "../payment-components/PaymentForm";
import OrderFailed from "./OrderFailed";
import OrderSuccess from "./OrderSuccess";
import MeetingRoomOrderSteps from "./services-order-steps/MeetingRoomOrderSteps";
import Done from "./forms/Done";
import { MEETING_ROOM_ORDER, VIRTUAL_OFFICE_ORDER, CATERING_ORDER } from "../../constants/OrderType";
import VirtualOfficeOrderSteps from "./services-order-steps/VirtualOfficeOrderSteps";
import CateringForm from "./forms/CateringForm";
import CateringOrderSteps from "./services-order-steps/CateringOrderSteps"
import InvoiceInformationForm from "./forms/InvoiceInformationForm";

const firstSteps = [
  {
    label: "Personal Info",
    path: "/order/personal-info",
    component: <InvoiceInformationForm />,
  },
];

const getCustomStep = (orderType) => {
  let orderCustomSteps = null;
  switch (orderType) {
    case MEETING_ROOM_ORDER:
      orderCustomSteps = MeetingRoomOrderSteps;
      break;
    case VIRTUAL_OFFICE_ORDER:
      orderCustomSteps = VirtualOfficeOrderSteps;
      break;
    case CATERING_ORDER:
      orderCustomSteps = CateringOrderSteps;
      break;
    default:
      break;
  }
  return orderCustomSteps;
};

const customSteps = getCustomStep(CATERING_ORDER);

const lastSteps = [
  {
    label: "Payment",
    path: "/checkout/payment",
    component: <PaymentForm />,
  },
  {
    label: "Done",
    path: "/checkout/done",
    component: <Done />,
  },
];

const OrderSteps = firstSteps.concat(customSteps, lastSteps);

export default OrderSteps;
