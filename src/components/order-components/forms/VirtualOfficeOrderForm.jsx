import React, { useState } from "react";
import OrderLayout from "../../../layouts/OrderLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faKey } from "@fortawesome/free-solid-svg-icons";

const VirtualOfficeOrderForm = () => {
  const [showExistedOfficeForm, setShowExistedOfficeForm] = useState(false);



  return (
    <OrderLayout>
      <div className="radio-group row justify-content-center p-5 text-center ">
        <div
          className="col-md-6 col-lg-6 col-sm-6"
          onClick={() => setShowExistedOfficeForm(false)}
        >
          <div
            className={
              "card" + (!showExistedOfficeForm && "border border-primary")
            }
          >
            <div className="card-body">
              <FontAwesomeIcon
                icon={faKey}
                style={{
                  fontSize: "50px",
                }}
                className="text-secondary "
              />
              <br />
              <label className="mt-3 fw-bold">Yeni Şirket Kurulumu</label>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6 col-sm-6"
          onClick={() => setShowExistedOfficeForm(true)}
        >
          <div
            className={
              "card " + (showExistedOfficeForm && "border border-primary")
            }
          >
            <div className="card-body text-center">
              <FontAwesomeIcon
                icon={faBuilding}
                style={{ fontSize: "50px" }}
                className="text-secondary"
              />
              <br />
              <label className="mt-3 fw-bold">
                Mevcut Şirketin Hipokampüse Taşınması
              </label>
            </div>
          </div>
        </div>
        <div
          className=" input-group mt-4"
          style={{ display: showExistedOfficeForm ? "block" : "none" }}
        >
          <center>
            <div className="col-md-12 mt-3">
              <h5>Şirket Bilgileriniz</h5>
            </div>
          </center>
          <hr />
          <div className="col-md-12 row">
            <div className="col-md-6 mt-3">
              <div className="form-group position-relative">
                <label className="py-2">Şirket Adı</label>
                <input
                  id="firmaadi"
                  type="text"
                  className="form-control"
                  name="sirketadi"
                />
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="form-group position-relative">
                <label className="py-2">Vergi Dairesi</label>
                <input
                  type="text"
                  className="form-control"
                  name="vergidairesi"
                />
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="form-group position-relative">
                <label className="py-2">Vergi Numarası</label>
                <input

                  type="text"
                  className="form-control"
                  name="vergino"
                />
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="form-group position-relative">
                <label className="py-2">Merkez Adresi</label>
                <input
                  type="text"
                  className="form-control"
                  name="merkezadres"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </OrderLayout>
  );
};
export default VirtualOfficeOrderForm;
