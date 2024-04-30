import PersonalInformationForm from "./forms/PersonalInformationForm";
import MeetingRoomReservationForm from "./forms/MeetingRoomReservationForm";
import PaymentForm from "../payment-components/PaymentForm";
import OrderFailed from "./OrderFailed";
import OrderSuccess from "./OrderSuccess";
import MeetingRoomOrderSteps from "./services-order-steps/MeetingRoomOrderSteps";
import Done from "./forms/Done";
import { MEETING_ROOM_ORDER, VIRTUAL_OFFICE_ORDER, CAFE_ORDER } from "../../constants/OrderType";
import VirtualOfficeOrderSteps from "./services-order-steps/VirtualOfficeOrderSteps";
import CafeForm from "./forms/CafeForm";
import CafeOrderSteps from "./services-order-steps/CafeOrderSteps"
import PersonalInfoForm from "./forms/PersonalInfoForm";

const firstSteps = [
  {
    label: "Personal Info",
    path: "/order/personal-info",
    component: <PersonalInfoForm />,
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
    case CAFE_ORDER:
      orderCustomSteps = CafeOrderSteps;
      break;
    default:
      break;
  }
  return orderCustomSteps;
};

const customSteps = getCustomStep(CAFE_ORDER);

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
