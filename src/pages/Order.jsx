import React, { useEffect, useState } from "react";
import OrderLayout from "../layouts/OrderLayout";
import OrderSteps from "../components/order-components/OrderSteps";
import { CAFE_ORDER } from "../constants/OrderType"; // or pass this as prop
import UserPanelLayout from "../layouts/UserPanelLayout";

const Order = () => {
  const steps = OrderSteps(CAFE_ORDER); // hardcoded or passed as prop/context
  const [currentStep, setCurrentStep] = useState(0);
  const order = {
    order: "abc",
    orderType: CAFE_ORDER,
  };
  const [body,setBody]=useState(null);
  const handleOnClick = () => {
    if (currentStep < steps.length - 1) {

      setCurrentStep(currentStep + 1);
    } else {
      // Handle completion or redirect
    }
  };

  return (
    <UserPanelLayout>
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
    </UserPanelLayout>
  );
};

export default Order;
