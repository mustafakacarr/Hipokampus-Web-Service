import { React, useState, useEffect } from "react";
import UserPanelLayout from "../layouts/UserPanelLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faReceipt,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import TripleSpinner from "../components/spinner-components/TripleSpinner"
import { getWithoutAuth } from "../api/apiCalls"
import ErrorWhileLoadingAlert from "../components/alert-component/ErrorWhileLoadingAlert"

function getDate() {
  var today = new Date();

  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = today.getDate();
  var dayName = today
    .toLocaleDateString("en-us", { weekday: "long" })
    .toUpperCase();

  return `${date}/${month}/${year} ${dayName}`;
}

const Catering = () => {
  const [groupOne, setGroupOne] = useState(undefined);
  const [groupTwo, setGroupTwo] = useState(undefined);
  const [groupThree, setGroupThree] = useState(undefined);

  const groupTwoTitle = document.getElementById("groupTwoTitle");
  const groupThreeTitle = document.getElementById("groupThreeTitle");
  const cateringOrderCard = document.getElementById("cateringOrderCard");

  const [cateringData, setCateringData] = useState([])
  const [foodsData, setFoodsData] = useState([])

  const [isLoading, setIsLoading] = useState(true)
  const [isAlert, setIsAlert] = useState(false)

  const [currentDate, setCurrentDate] = useState(getDate);

  const fetchCateringData = async () => {
    try {
      const response = await getWithoutAuth("/api/v1.0/catering/daily-meals")
      setCateringData(response.data)
      setFoodsData(response.data.foods)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setIsAlert(true)
    }
  };

  useEffect(() => {
    fetchCateringData()
  }, [])

  const groupOneData = foodsData.filter(
    (food) =>
      food.type === "FIRST_GROUP"
  )

  const groupTwoData = foodsData.filter(
    (food) =>
      food.type === "SECOND_GROUP"
  )

  const groupThreeData = foodsData.filter(
    (food) =>
      food.type === "THIRD_GROUP"
  )

  function handleGroupOne(meal, isCardClick) {
    if (isCardClick) {
      setGroupOne(meal);
      groupTwoTitle.scrollIntoView();
    } else {
      setGroupOne(meal);
    }
  }

  function handleGroupTwo(meal, isCardClick) {
    if (isCardClick) {
      setGroupTwo(meal);
      groupThreeTitle.scrollIntoView();
    } else {
      setGroupTwo(meal);
    }
  }

  function handleGroupThree(meal, isCardClick) {
    if (isCardClick) {
      setGroupThree(meal);
      cateringOrderCard.scrollIntoView();
    } else {
      setGroupThree(meal);
    }
  }


  return (
    <UserPanelLayout>
      {
        isAlert &&
        <ErrorWhileLoadingAlert />
      }
      {
        isLoading &&
        <TripleSpinner />
      }
      {
        !isLoading && !isAlert &&
        <>
          <div className="d-flex justify-content-center mt-2 mb-0 col col-md-9 mx-auto">
            <div className="alert alert-info w-100 mx-3 py-2" role="alert">
              <p className="my-2">
                <FontAwesomeIcon icon={faCircleInfo} className="me-2" />
                You can choose one from each group.
              </p>
              <p className="my-2">
                <FontAwesomeIcon icon={faCircleInfo} className="me-2" />
                You can place your order until 12:00. Your orders will be ready
                between 13.30-14.00.
              </p>
              <h5 className="text-center mx-5 my-2">
                Group 1 <span className="catering-sign">+ </span>
                Group 2 <span className="catering-sign">+ </span>
                Group 3 <span className="catering-sign">= </span>
                {cateringData.price}₺
              </h5>
            </div>
          </div>

          <h5 className="text-center mx-5 mb-3">
            INWORK {currentDate} DAILY CATERING LIST
          </h5>
          <hr className="mx-5 mb-3" />
          <div className="row gx-0">
            <div className="col-12 col-xl-8">
              <div className="pb-4 px-1 px-xxl-2">
                <div className="row gx-0 gap-3">
                  <div className="row gx-0 pb-4 justify-content-center justify-content-md-start">
                    <div className="text-center text-secondary mb-2 fw-bold fs-4">
                      <FontAwesomeIcon icon={faRectangleList} /> Group 1
                    </div>
                    {
                      groupOneData.map((item, index) => (
                        <label
                          key={index}
                          onClick={() => handleGroupOne(item.productId, true)}
                          className="col-sm-4 col-md-3 col-lg-2 catering-card"
                        >
                          <input
                            type="radio"
                            name="group-1-radio"
                            className="catering-input"
                            checked={item.productId == groupOne}
                            readOnly
                          />
                          <div className="card mx-4 mx-sm-0 d-flex card-input mx-auto">
                            <img
                              src={"data:image/jpg;base64," + item.image.file}
                              className="card-img-top catering-card-image"
                              alt="..."
                            />
                          </div>
                        </label>
                      ))}
                  </div>
                  <div className="row gx-0 gap-0 pt-3 py-4 justify-content-center justify-content-md-start">
                    <div
                      id="groupTwoTitle"
                      className="text-center text-secondary mb-2 fw-bold fs-4"
                    >
                      <FontAwesomeIcon icon={faRectangleList} /> Group 2
                    </div>
                    {groupTwoData.map((item, index) => (
                      <label
                        key={index}
                        onClick={() => handleGroupTwo(item.productId, true)}
                        className="col-sm-4 col-md-3 col-lg-2 catering-card"
                      >
                        <input
                          type="radio"
                          name="group-2-radio"
                          className="catering-input"
                          checked={item.productId == groupTwo}
                          readOnly
                        />
                        <div className="card mx-4 mx-sm-0 d-flex card-input mx-auto">
                          <img
                            src={"data:image/jpg;base64," + item.image.file}
                            className="card-img-top catering-card-image"
                            alt="..."
                          />
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="row gx-0 gap-0 pt-3 py-4 justify-content-center justify-content-md-start">
                    <div
                      id="groupThreeTitle"
                      className="text-center text-secondary mb-2 fw-bold fs-4"
                    >
                      <FontAwesomeIcon icon={faRectangleList} /> Group 3
                    </div>
                    {groupThreeData.map((item, index) => (
                      <label
                        key={index}
                        onClick={() => handleGroupThree(item.productId, true)}
                        className="col-sm-4 col-md-3 col-lg-2 catering-card"
                      >
                        <input
                          type="radio"
                          name="group-3-radio"
                          className="catering-input"
                          checked={item.productId == groupThree}
                          readOnly
                        />
                        <div className="card mx-4 mx-sm-0 d-flex card-input mx-auto">
                          <img
                            src={"data:image/jpg;base64," + item.image.file}
                            className="card-img-top catering-card-image"
                            alt="..."
                          />
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4 px-3">
              <div
                id="cateringOrderCard"
                className="card text-center mx-auto catering-order-card"
              >
                <h4 className="card-header mb-2">
                  <FontAwesomeIcon icon={faReceipt} />
                  <span className="ms-2">Quick Meal Order</span>
                </h4>
                <div className="card-body row gx-0 gap-2">
                  <div className="input-group mb-1">
                    <label
                      className="input-group-text fw-bold"
                      htmlFor="group-1-select"
                    >
                      Group 1
                    </label>
                    <select
                      value={groupOne}
                      className="form-select"
                      id="group-1-select"
                      defaultValue={0}
                      onChange={(e) => handleGroupOne(e.target.value)}
                    >
                      <option value={0} disabled>
                        Choose first group food
                      </option>

                      {groupOneData.map((item, index) => (
                        <option
                          key={index}
                          value={item.productId}
                          onClick={() => handleGroupOne(item.productId)}
                        >
                          {item.productName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="input-group mb-1">
                    <label
                      className="input-group-text fw-bold"
                      htmlFor="group-2-select"
                    >
                      Group 2
                    </label>
                    <select
                      value={groupTwo}
                      className="form-select"
                      id="group-2-select"
                      defaultValue={0}
                      onChange={(e) => handleGroupTwo(e.target.value)}
                    >
                      <option value={0} disabled>
                        Choose second group food
                      </option>

                      {groupTwoData.map((item, index) => (
                        <option
                          key={index}
                          value={item.productId}
                          onClick={() => handleGroupTwo(item.productId)}
                        >
                          {item.productName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="input-group">
                    <label
                      className="input-group-text fw-bold"
                      htmlFor="group-3-select"
                    >
                      Group 3
                    </label>
                    <select
                      value={groupThree}
                      className="form-select"
                      id="group-3-select"
                      defaultValue={0}
                      onChange={(e) => handleGroupThree(e.target.value)}
                    >
                      <option value={0} disabled>
                        Choose third group food
                      </option>

                      {groupThreeData.map((item, index) => (
                        <option
                          key={index}
                          value={item.productId}
                          onClick={() => handleGroupThree(item.productId)}
                        >
                          {item.productName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <hr className="my-2" />
                  <a href="#" className="btn btn-success">
                    Create Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </UserPanelLayout>
  );
};

export default Catering;
