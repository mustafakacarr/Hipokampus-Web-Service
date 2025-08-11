import React from "react";

const TicketOrderKeyValuePairs = ({ order }) => {
  const pairs = [
    { "Event Name": order.eventName},
    { "Ticket Price": order.totalPrice}
  ];
  return (
    <div className="w-100">
      {pairs.map((pair, index) => (
        <div key={index}>
          {Object.entries(pair).map(([key, value]) => (
            <div key={key} className="d-flex justify-content-between mt-1 mb-2">
              <span>
                <strong>{key}</strong>:
              </span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TicketOrderKeyValuePairs;
