import React from "react";
import OrderLayout from "../../layouts/OrderLayout";
import ReactInputMask from "react-input-mask";

function PaymentForm() {
  return (

      <div className="p-3">
        <ul className="nav nav-tabs mb-3 d-flex justify-content-center" id="fill-tab-example" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active order-tab"
              id="credit-card-tab"
              data-bs-toggle="tab"
              data-bs-target="#credit-card"
              type="button"
              role="tab"
              aria-controls="credit-card"
              aria-selected="true"
            >
              Credit Card
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link order-tab"
              id="bank-tab"
              data-bs-toggle="tab"
              data-bs-target="#bank"
              type="button"
              role="tab"
              aria-controls="bank"
              aria-selected="false"
            >
              via Bank
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link order-tab"
              id="cashier-tab"
              data-bs-toggle="tab"
              data-bs-target="#cashier"
              type="button"
              role="tab"
              aria-controls="cashier"
              aria-selected="false"
            >
              Pay by Cashier
            </button>
          </li>
        </ul>
        <div className="tab-content" id="fill-tab-content-example">
          <div
            className="tab-pane fade show active"
            id="credit-card"
            role="tabpanel"
            aria-labelledby="credit-card-tab"
          >
            <div className="form-group mt-2">
              <label htmlFor="username">
                <h6>Card Owner</h6>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Card Owner Name"
                required
                className="form-control"
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="cardNumber">
                <h6>Card number</h6>
              </label>
              <div className="input-group">
                <ReactInputMask
                  mask="9999 9999 9999 9999"
                  placeholder="Valid card number"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8">
                <div className="form-group mt-2">
                  <label>
                    <span className="hidden-xs">
                      <h6>Expiration Date</h6>
                    </span>
                  </label>
                  <div className="input-group">
                    <ReactInputMask
                      mask="99"
                      placeholder="MM"
                      max={2100}
                      className="form-control"
                    />
                    <ReactInputMask
                      mask="9999"
                      placeholder="YYYY"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group mb-4 mt-2">
                  <label
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Three digit CV code on the back of your card"
                  >
                    <h6>
                      CVV <i className="fa fa-question-circle d-inline"></i>
                    </h6>
                  </label>
                  
                  <input type="text" required className="form-control" maxLength={4}/>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="bank"
            role="tabpanel"
            aria-labelledby="bank-tab"
          >
            <div className="form-group">
              <label htmlFor="select-bank">
                <h6>Select your Bank</h6>
              </label>
              <select className="form-control" id="select-bank">
                <option value="" disabled>
                  --Please select your Bank--
                </option>
                <option>Bank 1</option>
                <option>Bank 2</option>
                <option>Bank 3</option>
                <option>Bank 4</option>
              </select>
            </div>
            <div className="form-group">
              <p></p>
            </div>
            <p className="text-muted">
              Note: After clicking on the button, you will be directed to a
              secure gateway for payment. After completing the payment process,
              you will be redirected back to the website to view details of your
              order.
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="cashier"
            role="tabpanel"
            aria-labelledby="cashier-tab"
          >
            <div className="col-12 form-group justify-content-center">
              <center>
                <h5>
                  You can pay it to cashier as cash or credit card and start to
                  use your service fastly.{" "}
                </h5>
                <img
                  className="text-center"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/QR_Code_Model_1_Example.svg/1200px-QR_Code_Model_1_Example.svg.png"
                  height={100}
                  width={100}
                />
                <br />
                <label>Pay Code: HK35994599</label>

                <p className="text-muted">
                  Note: After clicking on the button, you will be directed to a
                  secure gateway for payment. After completing the payment
                  process, you will be redirected back to the website to view
                  details of your order.
                </p>
              </center>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default PaymentForm;
