import React, { useEffect, useState } from "react";
import OrderLayout from "../layouts/OrderLayout";
import OrderSteps from "../components/order-components/OrderSteps";
import UserPanelLayout from "../layouts/UserPanelLayout";
import { postWithoutAuth } from "../api/apiCalls";
import TripleSpinner from "../components/spinner-components/TripleSpinner";
import { useSelector } from "react-redux";
import { initialPayloadByOrderType, setResponseByOrderType } from "../utils/OrderOperations";

const Order = () => {
  const user = useSelector((state) => state.user.userInfo);
  const orderInfo = useSelector((state) => state.order);

  const [order, setOrder] = useState({
    userId: user.userId,
    ...orderInfo,
  });
  
  const orderType = order.orderType;
  const steps = OrderSteps(orderType);
  const [currentStep, setCurrentStep] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const saveInitialOrder = async () => {

    let payload = {
      userId: order.userId,
      serviceType: order.orderType,
      paymentType: "BANK_TRANSFER",
    };

    initialPayloadByOrderType(order, orderType, payload);

    try {
      setIsLoading(true);

      const response = await postWithoutAuth("/api/v1.0/orders/cart", payload);

      const additionalResponse = setResponseByOrderType(orderType, response);
      setOrder((prevOrder) => ({
        ...prevOrder,
        ...additionalResponse,
        totalPrice: response.data.totalPrice,
      }));
    } catch (error) {
      console.error("Error while saving order:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    saveInitialOrder();
  }, []);

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
      )}
    </UserPanelLayout>
  );
};

export default Order;
