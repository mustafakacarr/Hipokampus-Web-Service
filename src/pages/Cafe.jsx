import React, { useState } from "react";
import UserPanelLayout from "../layouts/UserPanelLayout";
import cafeDummyData from "../dummy-data/cafeDummyData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping, faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import CafeProductCard from "../components/cafe-components/CafeProductCard";

const Cafe = () => {
  const [cafeFilter, setCafeFilter] = useState("all");

  const getButtonClassName = (name) => {
    return cafeFilter === name
      ? "btn btn-outline-secondary active"
      : "btn btn-outline-secondary";
  };
  var filteredCafeData = cafeDummyData.filter((cafeItem) => {
    if (cafeFilter === "all") {
      return cafeDummyData;
    } else {
      return cafeItem.category === cafeFilter;
    }
  });

  function handleCafeItems(selectedFilter) {
    setCafeFilter(selectedFilter);
  }

  return (
    <UserPanelLayout>
      <div onChange={handleCafeItems} className="row gx-0">
        <div className="col-sm-12 col-md-8 col-xl-9">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <button
              className={getButtonClassName("all")}
              onClick={() => handleCafeItems("all")}
            >
              ALL
            </button>
            <button
              className={getButtonClassName("pasta")}
              onClick={() => handleCafeItems("pasta")}
            >
              PASTA
            </button>
            <button
              className={getButtonClassName("salad")}
              onClick={() => handleCafeItems("salad")}
            >
              SALAD
            </button>
            <button
              className={getButtonClassName("snack")}
              onClick={() => handleCafeItems("snack")}
            >
              SNACK
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => handleCafeItems("cold_drink")}
            >
              COLD DRINK
            </button>
            <button
              className={getButtonClassName("hot_drink")}
              onClick={() => handleCafeItems("hot_drink")}
            >
              HOT DRINK
            </button>
            <button
              className={getButtonClassName("treat")}
              onClick={() => handleCafeItems("treat")}
            >
              TREAT
            </button>
            <button
              className={getButtonClassName("dessert")}
              onClick={() => handleCafeItems("dessert")}
            >
              DESSERT
            </button>
          </div>
          {(filteredCafeData.length !== 0) ?
            <div className="row gx-0 px-2 px-md-0 justify-content-center justify-content-md-start">
              {filteredCafeData.map((item, index) => (
                <CafeProductCard key={index} item={item} index={index}></CafeProductCard>
              ))}
            </div> :
            <div className="my-3 mx-4 p-4 text-center" role="alert">
              <FontAwesomeIcon icon={faCircleInfo} className="me-2" />
              <span>There is no product under {cafeFilter.replace(/_/g, " ")} category</span>
            </div>
          }
        </div>
        <div className="col-sm-12 col-md-4 col-xl-3 mt-3 mt-md-0 px-2 px-md-3 px-lg-3 mt-4 mb-3 mt-md-0 mb-3-0">
          <div className="card text-center cart-card mx-auto">
            <h4 className="card-header">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="ms-2">Cart</span>
            </h4>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">There are no items in your cart.</p>
              <a href="#" className="btn btn-success">
                Go To Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </UserPanelLayout>
  );
};

export default Cafe;
