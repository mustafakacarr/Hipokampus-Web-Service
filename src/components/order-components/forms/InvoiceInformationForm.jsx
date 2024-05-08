import React from 'react';
import OrderLayout from '../../../layouts/OrderLayout';
import PhoneInput from '../../phone-input-component/PhoneInput';

const InvoiceInformationForm = () => {
  return (
    <OrderLayout>
      <div className="row justify-content-center mb-2">
        <div className="col-11 col-md-10">
          <div className="invoice-form-wrapper">
            <div className="row gx-2 mt-4 mb-3">
              <div className="col-12 mb-4 text-center">
                <h4>Please fill in the fields below for invoice information</h4>
              </div>
              <div className="col-12 col-md-6 py-1">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-md-6 py-1">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-md-6 py-1">
                <label className="form-label">Email</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-md-6 py-1">
                <label className="form-label">Phone Number</label>
                <PhoneInput />
              </div>
              <div className='col-12 py-1'>
                <label className='form-label'>Adress</label>
                <textarea name="invoiceFormTextarea" id="invoiceFormTextarea"
                  placeholder="Enter your address in this field"
                  className="invoice-form-textarea rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </OrderLayout>
  );
};

export default InvoiceInformationForm;