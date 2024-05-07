import React, { useEffect, useState } from "react";
import {
  faCartShopping,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CafeProductCard = ({ item, index, addToCartOnClick }) => {
  const [quantity, setQuantity] = useState(1);
  let product = { productId: item.id, name: item.name, quantity };

  useEffect(() => {
    product.quantity = quantity;
  }, [quantity]);

  function handleDecrease() {
    quantity > 1 ? setQuantity(quantity - 1) : {};
  }

  function handleIncrease() {
    quantity < 9 ? setQuantity(quantity + 1) : {};
  }

  return (
    <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 px-4 px-md-2 mt-4">
      <div key={index} className="card">
        <img
          src={item.photo}
          className="card-img-top cafe-card-image"
          alt="Cafe Card Image"
        />
        <div className="card-body text-center mt-2">
          <h5 className="card-title text-primary">{item.name}</h5>
          <p className="card-text mt-3">
            <b>{item.price} ₺</b>
          </p>
          <div className="justify-content-center my-1 row">
            <div className="d-flex col-auto gx-0">
              <a className="btn" onClick={handleDecrease}>
                <FontAwesomeIcon icon={faMinus} />
              </a>
              <strong className="my-auto mx-auto">{quantity}</strong>
              <a className="btn" onClick={handleIncrease}>
                <FontAwesomeIcon icon={faPlus} />
              </a>
            </div>
            <div className="col-auto">
              <a
                className="btn btn-success ms-0 px-4"
                onClick={() => addToCartOnClick(product)}
              >
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
