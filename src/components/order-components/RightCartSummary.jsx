import React, { useState } from "react";
import TicketOrderKeyValuePairs from "./right-card-contents/TicketOrderKeyValuePairs";
import MeetingRoomOrderKeyValuePairs from "./right-card-contents/MeetingRoomOrderKeyValuePairs";
import CateringOrderKeyValuePairs from "./right-card-contents/CateringOrderKeyValuePairs";
import CafeOrderKeyValuePairs from "./right-card-contents/CafeOrderKeyValuePairs"
import { CATERING_ORDER, MEETING_ROOM_ORDER, TICKET_ORDER, CAFE_ORDER } from "../../constants/OrderType";

function RightCartSummary() {

  const [orderType, setOrderType] = useState(CATERING_ORDER);

  const findPairsContent = () => {
    let pairComponent = null;
    switch (orderType) {
      case TICKET_ORDER:
        pairComponent = <TicketOrderKeyValuePairs />;
        break;
      case MEETING_ROOM_ORDER:
        pairComponent = <MeetingRoomOrderKeyValuePairs />;
        break;
      case CATERING_ORDER:
        pairComponent = <CateringOrderKeyValuePairs />;
      case CAFE_ORDER:
        pairComponent = <CafeOrderKeyValuePairs />;
      default:
        break;
    }
    return pairComponent;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center fw-bold text-primary pt-1" style={{ fontSize: "22px" }}>Cart Summary</h5>
        <div className="d-flex flex-column">
          <div className="d-flex pt-3 pb-1">
            {findPairsContent()}
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between pb-1">
          <span>
            <strong>TOTAL:</strong>
          </span>
          <span>100₺</span>
        </div>
      </div>
    </div>
  );
}

export default RightCartSummary;
