import React, { useState } from "react";
import UserPanelLayout from "../layouts/UserPanelLayout";
import cafeDummyData from "../dummy-data/cafeDummyData.json";
import cafeCategoriesDummyData from "../dummy-data/cafeCategoriesDummyData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCartShopping,
  faCircleInfo,
  faMinus,
  faPlus,
  faTrashAlt,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import CafeProductCard from "../components/cafe-components/CafeProductCard";
import { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } from "../components/cafe-components/BasketOperations";

const Cafe = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [basket, setBasket] = useState([]);

  const getButtonClassName = (id) => {
    return selectedCategoryId === id
      ? "btn btn-outline-secondary active"
      : "btn btn-outline-secondary";
  };

  var filteredCafeData = cafeDummyData.filter((cafeItem) => {
    if (selectedCategoryId === 0) {
      return cafeDummyData;
    } else {
      return cafeItem.categoryId === selectedCategoryId;
    }
  });

  var cafeCategories = cafeCategoriesDummyData;
  function handleCafeItems(selectedFilter) {
    setSelectedCategoryId(selectedFilter);
  }

  const addToCartHandler = (product) => {
    setBasket(addToCart(product, basket));
  };
  const increaseQuantityHandler = (productId) => {
    setBasket(increaseQuantity(productId, basket));
  }
  const decreaseQuantityHandler = (productId) => {
    setBasket(decreaseQuantity(productId, basket));
  };
  const removeFromCartHandler = (productId) => {
    setBasket(removeFromCart(productId, basket))
  }

  return (
    <UserPanelLayout>
      <div onChange={handleCafeItems} className="row gx-0">
        <div className="col-12 col-xl-9">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {cafeCategories.map((item, index) => (
              <button
                className={getButtonClassName(item.id)}
                onClick={() => handleCafeItems(item.id)}
                key={index}
              >
                {item.label}
              </button>
            ))}
          </div>
          {filteredCafeData.length !== 0 ? (
            <div className="row gx-0 px-2 px-md-0 justify-content-center justify-content-md-start">
              {filteredCafeData.map((item, index) => (
                <CafeProductCard
                  key={index}
                  item={item}
                  index={index}
                  addToCartOnClick={(product) => addToCartHandler(product)}
                />
              ))}
            </div>
          ) : (
            <div className="my-3 mx-4 p-4 text-center" role="alert">
              <FontAwesomeIcon icon={faCircleInfo} className="me-2" />
              <span>There is no product in this category</span>
            </div>
          )}
        </div>
        <div className="col-12 col-xl-3 cart-layout px-2 px-md-3 px-lg-3 mb-3 mb-3-0 mx-auto">
          <div className="card text-center cart-card mx-auto">
            <h4 className="card-header">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="ms-2">Cart</span>
            </h4>
            <div className="card-body cart-card-body">
              {basket.length > 0 ? (
                <div className="card cafe-basket">
                  <div className="card-body">
                    {basket.map((item, index) => (
                      <div className="d-flex justify-content-between border rounded p-2 my-2 row">
                        <div className="d-flex col align-items-center">

                          <strong style={{ textOverflow: "ellipsis" }}>
                            {item.name}
                          </strong>

                        </div>
                        <div className="d-flex col align-items-center">
                          <div
                            className="btn text-primary px-2"
                            onClick={() =>
                              decreaseQuantityHandler(item.productId)
                            }
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </div>
                          <div>
                            <h5 className="fw-normal mb-0 quantityProduct">
                              {item.quantity}
                            </h5>
                          </div>
                          <div
                            className="btn text-primary px-2"
                            onClick={() =>
                              increaseQuantityHandler(item.productId)
                            }
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </div>
                          <div
                            className="btn text-secondary pl-2 removeProduct"
                            onClick={() =>
                              removeFromCartHandler(item.productId)
                            }
                          >
                            <FontAwesomeIcon className="cafe-basket-trash" icon={faTrashAlt} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>There is no product in your basket</div>
              )}
              <a href="#" className="btn btn-success mt-3">
                Go To Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="cafeQuantityToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-body rounded fw-bold fs-6 p-4 danger-toast">
            <FontAwesomeIcon icon={faTriangleExclamation} size="xl" className="me-2" />
            You can buy no more than 9
          </div>
        </div>
      </div>
    </UserPanelLayout>
  );
};

export default Cafe;
