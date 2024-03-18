import React from "react"
import UserPanelLayout from "../layouts/UserPanelLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faTrash } from "@fortawesome/free-solid-svg-icons";

const Payment = () => {
    return (
        <UserPanelLayout>
            <div className="mx-0 px-md-3 px-4 mb-5 mt-2 row gx-0">
                <div className="col-sm-12 col-md-7 col-lg-8 col-xl-9">
                </div>
                <div className="col-sm-12 col-md-5 col-lg-4 col-xl-3">
                    <div className="card payment-card text-center mx-auto">
                        <div className="card-header fs-4 fw-bold p-3">
                            <span className="me-2"><FontAwesomeIcon icon={faCreditCard} /></span>
                            Checkout
                        </div>
                        <div className="card-body text-start payment-card-body my-1">
                            <h5 className="card-title fw-bold mb-2 text-primary mb-3 ms-2 mt-1">Your Purchases</h5>
                            <ul class="list-group list-group-flush text-start">
                                {(() => {
                                    let purchases = [];
                                    for (let index = 1; index < 5; index++) {
                                        purchases.push(
                                            <li className="list-group-item d-flex justify-content-between" key={index}>
                                                <span>Cafe item {index}</span>
                                                <span>x{index}</span>
                                                <span>{index}₺</span>
                                                <FontAwesomeIcon className="text-primary" icon={faTrash} />
                                            </li>
                                        );
                                    }
                                    return purchases;
                                })()}
                            </ul>
                        </div>
                        <div className="card-footer fw-bold p-3">
                            <div className="mx-2 d-flex justify-content-between">
                                <span>Total</span>
                                <span>200₺</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserPanelLayout>
    );
};

export default Payment;
