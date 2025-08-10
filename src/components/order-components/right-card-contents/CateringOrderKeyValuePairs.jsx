import React from "react";

const CateringOrderKeyValuePairs = ({ order }) => {
  const pairs = [
    { "Name Surname": order.userId },
    { "First Meal": order.firstMealId },
    { "Second Meal": order.secondMealId },
    { "Third Meal": order.thirdMealId },
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

export default CateringOrderKeyValuePairs;
