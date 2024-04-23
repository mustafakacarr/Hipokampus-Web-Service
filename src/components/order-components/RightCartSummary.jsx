import React, { useState } from "react";
import TicketOrderKeyValuePairs from "./right-card-contents/TicketOrderKeyValuePairs";
import MeetingRoomOrderKeyValuePairs from "./right-card-contents/MeetingRoomOrderKeyValuePairs";
import { MEETING_ROOM_ORDER, TICKET_ORDER } from "../../constants/OrderType";
function RightCartSummary() {
  const [orderType, setOrderType] = useState(MEETING_ROOM_ORDER);

  const findPairsContent = () => {
    let pairComponent = null;
    switch (orderType) {
      case TICKET_ORDER:
        pairComponent = <TicketOrderKeyValuePairs />;
        break;
      case MEETING_ROOM_ORDER:
        pairComponent = <MeetingRoomOrderKeyValuePairs />;

        break;
      default:
        break;
    }
    return pairComponent;
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">Cart Summary</h5>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between py-2">
            {findPairsContent()}
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <span>
            <strong>TOPLAM:</strong>
          </span>
          <span>100 $</span>
        </div>
      </div>
    </div>
  );
}

export default RightCartSummary;
