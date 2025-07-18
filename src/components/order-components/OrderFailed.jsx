import React from "react";
import OrderLayout from "../../layouts/OrderLayout";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OrderFailed = () => {
  return (
      <div class="row justify-content-center mb-5">
        <div class="col-md-6">
          <div class="message-box order-status-failed ">
            <FontAwesomeIcon
              icon={faTimesCircle}
              className="order-status-failed-i"
            />
            <h2> Your payment failed </h2>
            <p> Please try again later </p>
          </div>
        </div>
      </div>
  );
};

export default OrderFailed;
