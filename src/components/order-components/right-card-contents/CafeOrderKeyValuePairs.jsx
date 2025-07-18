import React, { useState } from "react";

const CafeOrderKeyValuePairs = () => {
  const abc = {
    name: "John Doe",
    items: ["Tea", "Coffee"],
    fourthItem: "Salad",
  };

  const [orderInfo, setOrderInfo] = useState(abc);

  const pairs = [
    { "Name Surname": orderInfo.name },
    { Items: orderInfo.items.join(", ") },
  ];
  console.log("🚀 ~ CafeOrderKeyValuePairs ~ pairs:", pairs);
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

export default CafeOrderKeyValuePairs;
