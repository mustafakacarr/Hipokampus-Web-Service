import React from 'react';
import OrderLayout from '../../../layouts/OrderLayout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

const CafeForm = () => {
  return (
      <div class="row justify-content-center mb-3">
        <div class="col-md-6">
          <div class="message-box cafe-form-wrapper">
            <FontAwesomeIcon
              icon={faClipboardList}
              className="cafe-form-icon"
            />
            <p className='fw-bold fs-3'>Please enter your table number to continue</p>
            <br />
            <input type="text" class="form-control" id="tableNumber" aria-describedby="tableNumber" placeholder="Table Number" />
          </div>
        </div>
      </div>
  );
};

export default CafeForm;