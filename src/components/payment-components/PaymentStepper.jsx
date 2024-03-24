import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faChevronLeft, faChevronRight, faCreditCard, faUser } from "@fortawesome/free-solid-svg-icons";

function ShowCheckoutInformation() {
    return (
        <div className="text-start">
            <span className="text-primary fw-bold fs-4">Checkout Summary</span>
            <ul className="list-group list-group-flush my-3">
                {(() => {
                    let purchases = [];
                    for (let index = 1; index < 5; index++) {
                        purchases.push(
                            <li className="list-group-item d-flex justify-content-between" key={index}>
                                <span>Cafe item {index}</span>
                                <span>x{index}</span>
                                <span>{index}₺</span>
                            </li>
                        );
                    }
                    return purchases;
                })()}
            </ul>
        </div>
    )
}

function MakePayment() {
    return (
        <>
            <ul className="nav nav-pills gap-2 nav-justified fs-5 fw-bold" id="paymentTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active h-100 " id="credit-card-tab"
                        data-bs-toggle="tab" data-bs-target="#credit-card-tab-pane" type="button" role="tab"
                        aria-controls="credit-card-tab-pane" aria-selected="active">
                        <FontAwesomeIcon icon={faCreditCard} className="me-1" /> Credit Card
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link h-100 " id="bank-tab"
                        data-bs-toggle="tab" data-bs-target="#bank-tab-pane" type="button" role="tab"
                        aria-controls="bank-tab-pane" aria-selected="false">
                        <FontAwesomeIcon icon={faBuildingColumns} className="me-1" /> Bank
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link h-100 " id="pay-by-cashier-tab"
                        data-bs-toggle="tab" data-bs-target="#pay-by-cashier-tab-pane" type="button" role="tab"
                        aria-controls="pay-by-cashier-tab-pane" aria-selected="false">
                        <FontAwesomeIcon icon={faUser} className="me-1" /> Pay by Cashier
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="paymentContent">
                <div className="tab-pane fade show active p-4 text-start"
                    id="credit-card-tab-pane" role="tabpanel" aria-labelledby="credit-card-tab" tabIndex="0">
                    <div class="row gy-1">
                        <div class="col-md-12">
                            <label for="credit-card-name" class="form-label">Name on card</label>
                            <input type="text" class="form-control" id="credit-card-name" placeholder="Full name as displayed on card" required="" />
                            <div class="invalid-feedback">
                                Name on card is required
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="credit-card-number" class="form-label">Credit card number</label>
                            <input type="text" class="form-control" id="credit-card-number" placeholder="" required="" />
                            <div class="invalid-feedback">
                                Credit card number is required
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="credit-card-expiration" class="form-label">Expiration</label>
                            <input type="text" class="form-control" id="credit-card-expiration" placeholder="MM YYYY" required="" />
                            <div class="invalid-feedback">
                                Expiration date required
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="credit-card-cvv" class="form-label">CVV</label>
                            <input type="text" class="form-control" id="credit-card-cvv" placeholder="" required="" />
                            <div class="invalid-feedback">
                                Security code required
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade p-4 text-start"
                    id="bank-tab-pane" role="tabpanel"
                    aria-labelledby="bank-tab" tabIndex="0">
                    <div class="col-md-12">
                        <label for="bank-input" class="form-label">Bank Input</label>
                        <input type="text" class="form-control" id="bank-input" placeholder="" required="" />
                        <div class="invalid-feedback">
                            Bank input is required
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade p-4"
                    id="pay-by-cashier-tab-pane" role="tabpanel"
                    aria-labelledby="pay-by-cashier-tab p-4" tabIndex="0">
                    <span className="fs-2">Pay by cashier</span>
                </div>
            </div>
        </>
    )
}

function CompletePayment() {
    return <h2>Payment completed successfully</h2>;
}

const PaymentStepper = (props) => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { label: <h6><b>Checkout information</b></h6> },
        { label: <h6><b>Payment Options</b></h6> },
        { label: <h6><b>Done</b></h6> },
    ];

    function getStepComponent() {
        switch (currentStep) {
            case 0: return <ShowCheckoutInformation />;
            case 1: return <MakePayment />;
            case 2: return <CompletePayment />;
            default: return null;
        }
    }

    return (
        <div className="border rounded card h-100" style={{ backgroundColor: "#fefefe" }}>
            <Stepper
                {...props}
                connectorStateColors={true}
                connectorStyleConfig={{
                    completedColor: '#cf480a',
                    activeColor: '#ed540e',
                    disabledColor: '#d2d2d2'
                }}
                styleConfig={{
                    activeBgColor: '#ed540e',
                    completedBgColor: '#cf480a',
                    inactiveBgColor: '#d9d9d9',
                    activeTextColor: '#fff',
                    completedTextColor: '#fff',
                    inactiveTextColor: '#444'
                }}
                steps={steps}
                activeStep={currentStep} />
            <div className="text-center border-top">
                <div className="p-4 mb-5">
                    {getStepComponent()}
                </div>
                {(currentStep !== steps.length - 1) ?
                    <div className="card-footer payment-stepper-footer position-absolute d-flex justify-content-center bottom-0 w-100">
                        {(currentStep !== 0 && currentStep !== steps.length - 1)
                            &&
                            <button className="btn btn-outline-primary m-1" onClick={() => setCurrentStep(currentStep - 1)}>
                                <FontAwesomeIcon icon={faChevronLeft} className="me-2" /> Previous
                            </button>
                        }
                        {currentStep !== steps.length - 1
                            &&
                            <button className="btn btn-outline-primary m-1" onClick={() => setCurrentStep(currentStep + 1)}>
                                Next <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
                            </button>
                        }
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}
export default PaymentStepper;
