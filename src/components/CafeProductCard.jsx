import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';

const CafeProductCard = ({item, index}) => {
   
    
    return (
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 px-5 px-md-1 px-lg-3 mt-4 cafe-card">
        <div key={index} className="card">
          <img
            src={item.photo}
            className="card-img-top cafe-card-image "
            alt="..."
          />
          <div className="card-body text-center mt-2">
            <h5 className="card-title text-primary">{item.name}</h5>
            <p className="card-text mt-3">
              <b>{item.price} ₺</b>
            </p>
            <div className="justify-content-center my-1 row">
              <div className="d-flex col-auto gx-0">
                <a className="btn">
                  <FontAwesomeIcon icon={faMinus} />
                </a>
                <strong className="my-auto mx-auto">0</strong>
                <a className="btn">
                  <FontAwesomeIcon icon={faPlus} />
                </a>
              </div>
              <div className="col-auto">
                <a className="btn btn-primary ms-2 px-4">
                  <FontAwesomeIcon icon={faCartShopping} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CafeProductCard;