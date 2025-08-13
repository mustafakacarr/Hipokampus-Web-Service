import React from "react";
import { useSelector } from "react-redux";

const CafeOrderKeyValuePairs = ({ order }) => {


  if (!order || !order.basket || order.basket.length === 0) {
    return <div>No order data yet...</div>;
  }
    const user= useSelector((state) => state.user.userInfo);
  const pairs = [
    { "Name": user.firstName + " " + user.lastName },
    {
      Basket: order.basket
        .map((item) => `${item.quantity}x ${item.cafeProductName}`)
        .join(", "),
    },
    { "Order Type": order.orderType },
  ];

  return (
    <div className="w-100">
      {pairs.map((pair, index) => (
        <div key={index}>
          {Object.entries(pair).map(([key, value]) => (
            <div className="d-flex justify-content-between mt-1 mb-2" key={key}>
              <span>
                <strong style={{ whiteSpace: "nowrap" }}>{key}:</strong>
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
