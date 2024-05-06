import PaymentForm from "../payment-components/PaymentForm";
import OrderFailed from "./OrderFailed";
import OrderSuccess from "./OrderSuccess";
import MeetingRoomOrderSteps from "./services-order-steps/MeetingRoomOrderSteps";
import Done from "./forms/Done";
import { MEETING_ROOM_ORDER, VIRTUAL_OFFICE_ORDER, CATERING_ORDER, CAFE_ORDER, TICKET_ORDER, COWORKING_SPACE_ORDER }
  from "../../constants/OrderType";
import VirtualOfficeOrderSteps from "./services-order-steps/VirtualOfficeOrderSteps";
import CateringOrderSteps from "./services-order-steps/CateringOrderSteps"
import InvoiceInformationForm from "./forms/InvoiceInformationForm";
import CafeOrderSteps from "./services-order-steps/CafeOrderSteps";

const firstSteps = [
  {
    label: "Invoice Info",
    path: "/order/invoice-information",
    component: <InvoiceInformationForm />,
  }
];

const getCustomStep = (orderType) => {

  let orderCustomSteps;

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
    case CAFE_ORDER:
      orderCustomSteps = CafeOrderSteps;
      break;
    case TICKET_ORDER:
      {/* There is no extra step(s) for Ticket Order */ }
      orderCustomSteps = false;
      break;
    case COWORKING_SPACE_ORDER:
      {/* There is no extra step(s) for Coworking Space Order */ }
      orderCustomSteps = false;
      break;
    default:
      {/* Bypass extra step(s) for default */}
      orderCustomSteps = false;
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

if (customSteps) {
  var OrderSteps = firstSteps.concat(customSteps, lastSteps);
} else {
  var OrderSteps = firstSteps.concat(lastSteps);
}

export default OrderSteps;
