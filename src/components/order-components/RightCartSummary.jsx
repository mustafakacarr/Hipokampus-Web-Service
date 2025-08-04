import React, { useState } from "react";
import TicketOrderKeyValuePairs from "./right-card-contents/TicketOrderKeyValuePairs";
import MeetingRoomOrderKeyValuePairs from "./right-card-contents/MeetingRoomOrderKeyValuePairs";
import CateringOrderKeyValuePairs from "./right-card-contents/CateringOrderKeyValuePairs";
import CafeOrderKeyValuePairs from "./right-card-contents/CafeOrderKeyValuePairs";
import {
  CATERING_ORDER,
  MEETING_ROOM_ORDER,
  EVENT,
  CAFE_ORDER,
} from "../../constants/OrderType";

function RightCartSummary({ order }) {
  if (typeof order === "undefined")
    console.log("Order is undefined in RightCartSummary");
  const [orderType, setOrderType] = useState(order.orderType);

  const findPairsContent = () => {
    let pairComponent = null;
    switch (orderType) {
      case EVENT:
        pairComponent = <TicketOrderKeyValuePairs order={order} />;
        break;
      case MEETING_ROOM_ORDER:
        pairComponent = <MeetingRoomOrderKeyValuePairs order={order} />;
        break;
      case CATERING_ORDER:
        pairComponent = <CateringOrderKeyValuePairs order={order} />;
        break;
      case CAFE_ORDER:
        pairComponent = <CafeOrderKeyValuePairs order={order} />;
        break;
      default:
        break;
    }
    return pairComponent;
  };

  return (
      <div className="order-card rounded-3 p-3">
        <h5
          className="card-title text-center fw-bold text-primary pt-1 mb-3"
          style={{ fontSize: "22px" }}
        >
          Cart Summary
        </h5>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between mt-2 mb-2">
            <span>
              <strong style={{ whiteSpace: "nowrap" }}>Order Code:</strong>
            </span>
            <span className="fw-bolder mb-2">{order.orderCode}</span>
          </div>{" "}
          <div className="d-flex pt-1 pb-1">{findPairsContent()}</div>
        </div>
        <hr />
        <div className="pb-1">
          <hr />

          <div className="d-flex justify-content-between">
            <strong>TOTAL:</strong>
            <strong>{order.totalPrice} $</strong>
          </div>
        </div>
      </div>
  );
}

export default RightCartSummary;
