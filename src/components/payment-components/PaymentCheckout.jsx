import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faTrash } from "@fortawesome/free-solid-svg-icons";

const PaymentCheckout = () => {
    return (
        <div className="card payment-checkout-card text-center mx-auto">
            <div className="card-header fs-4 fw-bold p-3">
                <span className="me-2"><FontAwesomeIcon icon={faBasketShopping} /></span>
                Checkout
            </div>
            <div className="card-body text-start">
                <h5 className="card-title fw-bold mb-2 text-primary mb-3 ms-2 mt-1">Your Purchases</h5>
                <ul className="list-group list-group-flush text-start checkout-card-list">
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
    )
}
export default PaymentCheckout;
