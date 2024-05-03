import React from "react";

const CafeOrderKeyValuePairs = () => {
  const pairs = [
    { "Name Surname": "John Doe" },
    { "First Item": "Tea" },
    { "Second Item": "Coffee" },
    { "Third Item": "Toast" },
    { "Fourth Item": "Salad" }
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

export default CafeOrderKeyValuePairs;
