import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentForm from "../components/payment-components/PaymentForm";
import CheckoutSteps from "../components/checkout-stepper-components/CheckoutSteps";
import UserPanelLayout from "./UserPanelLayout";
import RightCartSummary from "../components/order-components/RightCartSummary";
import OrderSteps from "../components/order-components/OrderSteps";

function OrderLayout(props) {
  const history = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const steps = OrderSteps;

  useEffect(() => {
    if (!props.children) {
      history(steps[0].path);
    }
  }, [props, history]);

  useEffect(() => {
    // Check the current location and find the corresponding step index
    const currentStepIndex = steps.findIndex(
      (step) => step.path === location.pathname
    );
    if (currentStepIndex !== -1) {
      setCurrentStep(currentStepIndex);
    } else {
      // Handle invalid location, maybe redirect to a default path
    }
  }, [location.pathname, steps]);

  const handleOnClick = () => {
    if (currentStep < steps.length - 1) {
    
      const nextStepPath = steps[currentStep + 1].path;
      setCurrentStep(currentStep + 1);
      history(nextStepPath);
    } else {
      // This is the last step, handle completion or redirection
      // Example: history.push("/checkout/complete");
    }
  };

  return (
    <UserPanelLayout>
      <div className="container">
        <CheckoutSteps currentStep={currentStep} steps={steps} />
        <h3 className="text-center mt-3">{props.pageName}</h3>
        <div className="row mt-3">
          <div className="col-md-12 col-lg-8 col-sm-12 mb-4 mb-lg-0">
            <div className="card">
              <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                {props.children}
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 col-sm-12 justify-content-end">
            <RightCartSummary />
            {currentStep !== steps.length - 1 && (
              <button
                className="btn btn-success mb-5 mb-lg-0 col-12 mt-2"
                onClick={handleOnClick}
                disabled={props.buttonDisabled}
              >
                Continue
              </button>
            )}
          </div>
        </div>
      </div>
    </UserPanelLayout>
  );
}

export default OrderLayout;
