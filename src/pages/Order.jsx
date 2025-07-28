import React, { useEffect, useState } from "react";
import OrderLayout from "../layouts/OrderLayout";
import OrderSteps from "../components/order-components/OrderSteps";
import { CAFE_ORDER } from "../constants/OrderType";
import UserPanelLayout from "../layouts/UserPanelLayout";
import { getWithoutAuth, postWithoutAuth } from "../api/apiCalls";
import ErrorWhileLoadingAlert from "../components/alert-component/ErrorWhileLoadingAlert";
import TripleSpinner from "../components/spinner-components/TripleSpinner";
import { useDispatch, useSelector } from "react-redux";
import { use } from "react";

const Order = () => {

  const user = useSelector((state) => state.user.userInfo);
  const orderInfo = useSelector((state) => state.order);
  console.log("🚀 ~ Order ~ orderInfo:", orderInfo)

  const [order, setOrder] = useState({
    userId: user.userId,
    ...orderInfo,
  });
  const orderType = order.orderType;
  const steps = OrderSteps(orderType);
  const [currentStep, setCurrentStep] = useState(0);

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

  if (order.basket.length > 0) 
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
