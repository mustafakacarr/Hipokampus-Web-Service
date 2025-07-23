import React from "react";
import "./CheckoutSteps.css"
function CheckoutSteps({ currentStep, steps }) {
  return (
    <div>
      <div className="justify-content-center stepwizard col-md-offset-2">
        <div className="stepwizard-row setup-panel">
          {steps.map((step) => (
            <div className="stepwizard-step" key={steps.indexOf(step)}>
              <a
                href={steps.indexOf(step) <= currentStep ? step.path : "#"}
                type="button" style={{ fontWeight: 900, fontSize: "15px", paddingTop: "4px" }}
                className={`btn ${steps.indexOf(step) < currentStep
                  ? "btn-success"
                  : steps.indexOf(step) > currentStep
                    ? "btn-secondary"
                    : "btn-primary"
                  } btn-circle`}
                disabled={steps.indexOf(step) > currentStep}
              >
                {steps.indexOf(step) + 1}
              </a>
              <p>{step.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CheckoutSteps;
