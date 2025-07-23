import React, {  } from "react";
import CheckoutSteps from "../components/checkout-stepper-components/CheckoutSteps";
import RightCartSummary from "../components/order-components/RightCartSummary";

function OrderLayout(props) {

  return (
      <div className="container">
        <CheckoutSteps currentStep={(props.currentStep)} steps={props.steps} />
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
            <RightCartSummary order={props.order} />
            {props.currentStep !== props.steps.length - 1 && (
              <button
                className="btn btn-success mb-5 mb-lg-0 col-12 mt-2"
                onClick={props.onContinue}
                disabled={props.buttonDisabled}
              >
                Continue
              </button>
            )}
          </div>
        </div>
      </div>

  );
}

export default OrderLayout;
