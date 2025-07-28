import React from "react";

const CafeOrderKeyValuePairs = ({ order }) => {

  if (!order || !order.basket || order.basket.length === 0) {
    return <div>No order data yet...</div>;
  }
  console.log("🚀 ~ CafeOrderKeyValuePairs ~ order:", order.basket);
  const pairs = [
    { "Name Surname": order.userId },
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
