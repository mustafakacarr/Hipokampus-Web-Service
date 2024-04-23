import { faAnglesRight, faArrowRight, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const PackageCard = ({ data, index }) => {
  const [selectedPeriodId, setSelectedPeriodId] = useState(2);

  const findPriceByPeriodId = () => {
    const period = data.prices.find(
      (item) => item.periodId == selectedPeriodId
    );
    return period ? period.price : 0;
  };

  const price = findPriceByPeriodId();
  
  return (
    <div
      key={index}
      className="px-1 px-lg-2 px-lg-3 col-12 col-md-6 col-xl-4 mb-4 mb-md-3"
    >
      <div className="card package-card h-100">
        <div className="card-body p-0">
          <h4 className="card-title text-center py-4 m-0 package-title px-2">
            {data.packageName}
          </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="mt-0 pt-3 pb-1 mb-2">
                <p className="text-center fw-bold fs-4 my-0">{price} TL</p>
                <p className="text-center mb-3">({price} $) </p>
                <select
                  className="form-select mb-1 border border-secondary"
                  aria-label="coShortTimeSelect"
                  onChange={(e) => setSelectedPeriodId(e.target.value)}
                >
                  {data.prices.map((item, index) => (
                    <option key={index} value={item.periodId}>
                      {item.periodName}
                    </option>
                  ))}
                </select>
              </div>
            </li>
            <li className="list-group-item text-center package-card-list">
              <ul className="text-start my-4">{data.packageDescription}</ul>
            </li>
          </ul>
        </div>
        <div className="card-footer packages-card-footer">
          <button className="btn btn-success btn-lg my-3 d-flex mx-auto">
            Buy It
            <FontAwesomeIcon
              className="my-auto ms-2"
              icon={faShoppingCart}
              size="lg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
