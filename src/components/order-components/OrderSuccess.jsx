import React from "react";
import OrderLayout from "../../layouts/OrderLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const OrderSuccess = () => {
  return (
      <div class="row justify-content-center mb-5">
        <div class="col-md-6">
          <div class="message-box order-status-success ">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="order-status-success-i mb-2"
            />
            <h2 className="mb-3"> Your payment is successful </h2>
            <p>
              Thank you for your payment. we will be in contact with more
              details shortly
            </p>
          </div>
        </div>
      </div>
  );
};

export default OrderSuccess;
