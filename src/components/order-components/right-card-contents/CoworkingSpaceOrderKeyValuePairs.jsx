import React from "react";

const CoworkingSpaceOrderKeyValuePairs = ({ order }) => {
  const pairs = [
    { "Username": order.username },
    { "Office Name ": "GARDEN B1" },
    { "Office Quota ": "100 Person" },
    { "Package ": "Coworking Space" },
    { "Period ": "DAILY" },
  ];
  return (
    <div className="w-100">
      {pairs.map((pair, index) => (
        <div key={index}>
          {Object.entries(pair).map(([key, value]) => (
            <div className="d-flex justify-content-between mt-1 mb-2" key={key}>
              <span>
                <strong style={{ whiteSpace: "nowrap" }}>{key + ":"}</strong>
              </span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CoworkingSpaceOrderKeyValuePairs;
