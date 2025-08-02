import { React, useState, useEffect } from "react";
import UserPanelLayout from "../layouts/UserPanelLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBellConcierge,
  faCircleInfo,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import TripleSpinner from "../components/spinner-components/TripleSpinner"
import { getWithoutAuth } from "../api/apiCalls"
import ErrorWhileLoadingAlert from "../components/alert-component/ErrorWhileLoadingAlert"
import { fillOrder } from "../features/order/orderSlice"
import { useNavigate } from "react-router-dom"
import { CATERING_ORDER } from "../constants/OrderType"
import { useDispatch } from "react-redux"

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

  const [cateringData, setCateringData] = useState([])
  const [foodsData, setFoodsData] = useState([])

  const [isLoading, setIsLoading] = useState(true)
  const [isAlert, setIsAlert] = useState(false)

  const [currentDate, setCurrentDate] = useState(getDate);

  const navigate = useNavigate()
  const dispatch = useDispatch()

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

  function handleGroupOne(meal) {
    setGroupOne(meal);
  }

  function handleGroupTwo(meal) {
    setGroupTwo(meal);
  }

  function handleGroupThree(meal) {
    setGroupThree(meal);
  }

  const cateringOrder = {}

  const fillCateringOrder = () => {
    cateringOrder.firstMealId = groupOne
    cateringOrder.secondMealId = groupTwo
    cateringOrder.thirdMealId = groupThree
    cateringOrder.orderType = CATERING_ORDER

    dispatch(fillOrder(cateringOrder));
    navigate("/order");
  };

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
            <div className="catering-jumbotron w-100 mx-3 p-3 rounded-3" role="alert">
              <p className="my-2">
                <FontAwesomeIcon icon={faCircleInfo} className="me-2 text-primary" />
                You can choose one from each group.
              </p>
              <p className="my-2">
                <FontAwesomeIcon icon={faCircleInfo} className="me-2 text-primary" />
                You can place your order until 12:00. Your orders will be ready
                between 13.30-14.00.
              </p>
              <p className="my-2">
                <FontAwesomeIcon icon={faCircleInfo} className="me-2 text-primary" />
                Group 1 <span className="catering-sign">+ </span>
                Group 2 <span className="catering-sign">+ </span>
                Group 3 <span className="catering-sign">= </span>
                {cateringData.price}₺
              </p>
            </div>
          </div>

          <h5 className="text-center mx-5 my-3 fw-bold text-secondary">
            INWORK {currentDate} DAILY CATERING LIST
          </h5>
          <hr className="mx-5 mb-3" />
          <div className="row gx-0">
            <div className="col-12 col-xl-8">
              <div className="pb-4 px-1 px-xxl-2">
                <div className="row gx-0">
                  <div className="col-sm-4 px-1 py-3 py-sm-0">
                    <div className="gap-0 py-4 h-100 justify-content-center justify-content-md-start rounded catering-group">
                      <div className="text-center text-secondary mb-2 fw-bold fs-4">
                        <FontAwesomeIcon icon={faRectangleList} /> Group 1
                      </div>
                      {
                        groupOneData.map((item, index) => (
                          <label
                            key={index}
                            onClick={() => handleGroupOne(item.productId)}
                            className="col-sm-12 col-md-6 catering-card"
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
                  </div>
                  <div className="col-sm-4 px-1 py-3 py-sm-0">
                    <div className="gap-0 py-4 h-100 justify-content-center justify-content-md-start rounded catering-group">
                      <div
                        id="groupTwoTitle"
                        className="text-center text-secondary mb-2 fw-bold fs-4"
                      >
                        <FontAwesomeIcon icon={faRectangleList} /> Group 2
                      </div>
                      {groupTwoData.map((item, index) => (
                        <label
                          key={index}
                          onClick={() => handleGroupTwo(item.productId)}
                          className="col-sm-12 col-md-6 catering-card"
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
                  </div>
                  <div className="col-sm-4 px-1 py-3 py-sm-0">
                    <div
                      className="gap-0 py-4 h-100 justify-content-center justify-content-md-start rounded catering-group"
                    >
                      <div
                        id="groupThreeTitle"
                        className="text-center text-secondary mb-2 fw-bold fs-4"
                      >
                        <FontAwesomeIcon icon={faRectangleList} /> Group 3
                      </div>
                      {groupThreeData.map((item, index) => (
                        <label
                          key={index}
                          onClick={() => handleGroupThree(item.productId)}
                          className="col-sm-12 col-md-6 catering-card"
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
            </div>
            <div className="col-12 col-xl-4 px-3">
              <div
                id="cateringOrderCard"
                className="card text-center mx-auto catering-order-card"
              >
                <h4 className="card-header mb-2">
                  <FontAwesomeIcon icon={faBellConcierge} />
                  <span className="ms-2 fw-bold">Order Meal</span>
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
                  <a onClick={fillCateringOrder} href="#" className="btn btn-success fw-bold">
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
