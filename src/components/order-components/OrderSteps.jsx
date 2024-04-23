import PersonalInformationForm from "./forms/PersonalInformationForm";
import MeetingRoomReservationForm from "./forms/MeetingRoomReservationForm";
import PaymentForm from "../payment-components/PaymentForm";
import OrderFailed from "./OrderFailed";
import OrderSuccess from "./OrderSuccess";
import MeetingRoomOrderSteps from "./services-order-steps/MeetingRoomOrderSteps";
import Done from "./forms/Done";
import { MEETING_ROOM_ORDER } from "../../constants/OrderType";

const firstSteps = [
  {
    label: "Personal Info",
    path: "/order/personal",
    component: <PersonalInformationForm />,
  },
];

const getCustomStep = (orderType) => {
  let orderCustomSteps = null;
  switch (orderType) {
    case MEETING_ROOM_ORDER:
      orderCustomSteps = MeetingRoomOrderSteps;
      break;

    default:
      break;
  }
  return orderCustomSteps;
};
const customSteps = getCustomStep(MEETING_ROOM_ORDER);

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
