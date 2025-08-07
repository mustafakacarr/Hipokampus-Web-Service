import React, { useEffect, useState } from "react";
import {
  faCartShopping,
  faMinus,
  faPlus,
  faShopSlash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CafeProductCard = ({ item, index, addToCartOnClick }) => {
  const [quantity, setQuantity] = useState(1);
  let product = { productId: item.productId, productName: item.productName, quantity };

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
    <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 px-4 px-md-2 mt-4 cafe-card-wrapper">
      <div
        key={index}
        className={
          "card mx-5 cafe-card mx-sm-0 rounded-3 h-100"
          + (item.inStock ? "" : " out-of-stock-card")
        }
      >
        <img
          src={"data:image/jpg;base64," + item.image.file}
          className={"card-img-top cafe-card-image" + (item.inStock ? "" : " opacity-25")}
          alt="Cafe Card Image"
        />
        <div className="card-body text-center mt-2">
          {
            item.inStock ? "" :
              <text className="btn btn-primary fw-bold z-3 pb-3 position-fixed"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
              >
                <p className="mt-3 mb-4 fw-bold">
                  <FontAwesomeIcon icon={faShopSlash} size="xl" />
                </p>
                Out of Stock
              </text>
          }
          <h5 className={"card-title text-primary"
            + (item.inStock ? "" : " opacity-25")}>
            {item.productName}
          </h5>
          {
            item.inStock ?
              <p className="card-text mt-3">
                <b>{item.price} ₺</b>
              </p>
              :
              ""
          }
          {
            item.inStock ? (
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
                <div className={"col-auto"}>
                  <a
                    className="btn btn-success ms-0 px-4"
                    onClick={() => addToCartOnClick(product)}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                  </a>
                </div>
              </div>)
              :
              ""
          }
        </div>
      </div>
    </div>
  );
};

export default CafeProductCard;
