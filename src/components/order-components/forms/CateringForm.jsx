import React from 'react';
import OrderLayout from '../../../layouts/OrderLayout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

const CateringForm = () => {
  return (
    <OrderLayout>
      <div class="row justify-content-center mb-5">
        <div class="col-md-6">
          <div class="message-box catering-form-wrapper">
            <FontAwesomeIcon
              icon={faClipboardList}
              className="catering-form-icon"
            />
            <p className='fw-bold fs-3'>Please enter your table number to continue</p>
            <br />
            <input type="text" class="form-control" id="tableNumber" aria-describedby="tableNumber" placeholder="Table Number" />
          </div>
        </div>
      </div>
    </OrderLayout>
  );
};

export default CateringForm;