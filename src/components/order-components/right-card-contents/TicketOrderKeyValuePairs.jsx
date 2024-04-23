import React from "react";

const TicketOrderKeyValuePairs = () => {
  const pairs = [
    { "Event Date: ": "28.03.2024 22:34" },
    { "Ticket Price: ": "100 TRY" },
    { "VAT: ": "342" },
  ];
  return (
    <div>
      {pairs.map((pair, index) => (
        <div key={index}>
          {Object.entries(pair).map(([key, value]) => (
            <div key={key}>
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
