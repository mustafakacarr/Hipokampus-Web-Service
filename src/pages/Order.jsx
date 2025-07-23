import React, { useEffect, useState } from "react";
import OrderLayout from "../layouts/OrderLayout";
import OrderSteps from "../components/order-components/OrderSteps";
import { CAFE_ORDER } from "../constants/OrderType";
import UserPanelLayout from "../layouts/UserPanelLayout";
import { getWithoutAuth, postWithoutAuth } from "../api/apiCalls";
import ErrorWhileLoadingAlert from "../components/alert-component/ErrorWhileLoadingAlert";
import TripleSpinner from "../components/spinner-components/TripleSpinner";

const Order = () => {
  const orderType = CAFE_ORDER;
  const steps = OrderSteps(orderType);
  const [currentStep, setCurrentStep] = useState(0);
  const [order, setOrder] = useState({
    userId: 1,
    basket: [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 1 },
    ],
    orderType,
  });
  const [isLoading, setIsLoading] = useState(false);

  const saveInitialOrder = async () => {
    const orderedProducts = order.basket.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {});
    setIsLoading(true);
    const request = await postWithoutAuth("/api/v1.0/orders/cart", {
      userId: order.userId,
      orderedProducts,
      serviceType: order.orderType,
      paymentType: "BANK_TRANSFER",
    });
    console.log("🚀 ~ saveInitialOrder ~ request:", request);

    setOrder((prevOrder) => ({
      ...prevOrder,
      basket: request.data.orderedProducts,
      totalPrice: request.data.totalPrice,
    }));
    setIsLoading(false);
  };

  useEffect(() => {
    saveInitialOrder();
  }, []);

  const [body, setBody] = useState(null);
  const handleOnClick = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle completion or redirect
    }
  };

  return (
    <UserPanelLayout>
      {isLoading ? (
        <TripleSpinner />
      ) : (
        <OrderLayout
          pageName={steps[currentStep].label}
          buttonDisabled={false}
          onContinue={handleOnClick}
          currentStep={currentStep}
          order={order}
          steps={steps}
        >
          {steps[currentStep].component}
        </OrderLayout>
      )}{" "}
    </UserPanelLayout>
  );
};

export default Order;
