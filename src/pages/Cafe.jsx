import React, { useState } from "react";
import UserPanelLayout from "../layouts/UserPanelLayout";
import cafeDummyData from "../dummyData/cafeDummyData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import CafeProductCard from "../components/CafeProductCard";

const Cafe = () => {
  const [cafeFilter, setCafeFilter] = useState("all");

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
        <div className="col-sm-12 col-md-9">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <button
              className="btn btn-outline-primary"
              onClick={() => handleCafeItems("all")}
            >
              ALL
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => handleCafeItems("pasta")}
            >
              PASTA
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => handleCafeItems("salad")}
            >
              SALAD
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => handleCafeItems("snack")}
            >
              SNACK
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => handleCafeItems("cold_drink")}
            >
              COLD DRINK
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => handleCafeItems("hot_drink")}
            >
              HOT DRINK
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => handleCafeItems("treat")}
            >
              TREAT
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => handleCafeItems("dessert")}
            >
              DESSERT
            </button>
          </div>
          <div className="row gx-0 justify-content-center justify-content-md-start">
            {filteredCafeData.map((item, index) => (
              <CafeProductCard item={item} index={index}></CafeProductCard>
            ))}
          </div>
        </div>
        <div className="col-sm-12 col-md-3 mt-3 mt-md-0 px-1 px-md-3 px-lg-4">
          <div className="card text-center cart-card mx-auto">
            <h4 className="card-header">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="ms-2">Cart</span>
            </h4>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">There are no items in your cart.</p>
              <a href="#" className="btn btn-primary">
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
