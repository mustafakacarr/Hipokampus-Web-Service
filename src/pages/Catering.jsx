import { React, useState } from "react"
import UserPanelLayout from "../layouts/UserPanelLayout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo, faReceipt, faRectangleList } from "@fortawesome/free-solid-svg-icons"
import cateringDummyData from "../dummy-data/cateringDummyData.json"

function getDate() {

    var today = new Date();

    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = today.getDate();
    var dayName = today.toLocaleDateString("en-us", { weekday: "long" }).toUpperCase()

    return `${date}/${month}/${year} ${dayName}`;
}

const Catering = () => {

    const [groupOne, setGroupOne] = useState(undefined)
    const [groupTwo, setGroupTwo] = useState(undefined)
    const [groupThree, setGroupThree] = useState(undefined)

    const groupTwoTitle = document.getElementById("groupTwoTitle")
    const groupThreeTitle = document.getElementById("groupThreeTitle")
    const cateringOrderCard = document.getElementById("cateringOrderCard")

    function handleGroupOne(meal, isCardClick) {
        if (isCardClick) {
            setGroupOne(meal)
            groupTwoTitle.scrollIntoView()
        } else {
            setGroupOne(meal)
        }
    }

    function handleGroupTwo(meal, isCardClick) {
        if (isCardClick) {
            setGroupTwo(meal)
            groupThreeTitle.scrollIntoView()
        } else {
            setGroupTwo(meal)
        }
    }

    function handleGroupThree(meal, isCardClick) {
        if (isCardClick) {
            setGroupThree(meal)
            cateringOrderCard.scrollIntoView()
        } else {
            setGroupThree(meal)
        }
    }

    const [currentDate, setCurrentDate] = useState(getDate)

    return (
        <UserPanelLayout>
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
                        130 ₺ <span style={{ whiteSpace: "nowrap" }}>( 4.13 $)</span>
                    </h5>
                </div>
            </div>

            <h5 className="text-center mx-5 mb-3">
                HIPOKAMPUS {currentDate} DAILY CATERING LIST
            </h5>
            <hr className="mx-5 mb-3" />
            <div className="row gx-0">
                <div className="col-sm-12 col-md-6 col-xl-7 col-xxl-8">
                    <div className="pb-4 px-1 px-xxl-2">
                        <div className="row gx-0 gap-3">
                            <div className="row gx-0 pb-4 justify-content-center justify-content-md-start">
                                <div className="text-center text-secondary mb-2 fw-bold fs-4">
                                    <FontAwesomeIcon icon={faRectangleList} /> Group 1
                                </div>
                                {cateringDummyData.Group_1.map((item, index) => (
                                    <label
                                        key={index}
                                        onClick={() => handleGroupOne(item.mealId, true)}
                                        className="col-sm-12 col-md-6 col-xl-4 col-xxl-3 px-5 px-md-2 catering-card d-flex"
                                    >
                                        <input
                                            type="radio"
                                            name="group-1-radio"
                                            className="catering-input"
                                            checked={item.mealId == groupOne}
                                            readOnly
                                        />
                                        <div className="card d-flex card-input w-100">
                                            <img
                                                src={item.image}
                                                className="card-img-top catering-card-image"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <p className="card-text fw-bold text-center fs-5">
                                                    {item.name}
                                                </p>
                                            </div>
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
                                {cateringDummyData.Group_2.map((item, index) => (
                                    <label
                                        key={index}
                                        onClick={() => handleGroupTwo(item.mealId, true)}
                                        className="col-sm-12 col-md-6 col-xl-4 col-xxl-3 px-5 px-md-2 catering-card d-flex"
                                    >
                                        <input
                                            type="radio"
                                            name="group-2-radio"
                                            className="catering-input"
                                            checked={item.mealId == groupTwo}
                                            readOnly
                                        />
                                        <div className="card d-flex card-input w-100">
                                            <img
                                                src={item.image}
                                                className="card-img-top catering-card-image"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <p className="card-text fw-bold text-center fs-5">
                                                    {item.name}
                                                </p>
                                            </div>
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
                                {cateringDummyData.Group_3.map((item, index) => (
                                    <label
                                        key={index}
                                        onClick={() => handleGroupThree(item.mealId, true)}
                                        className="col-sm-12 col-md-6 col-xl-4 col-xxl-3 px-5 px-md-2 catering-card d-flex"
                                    >
                                        <input
                                            type="radio"
                                            name="group-3-radio"
                                            className="catering-input"
                                            checked={item.mealId == groupThree}
                                            readOnly
                                        />
                                        <div className="card d-flex card-input w-100">
                                            <img
                                                src={item.image}
                                                className="card-img-top catering-card-image"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <p className="card-text fw-bold text-center fs-5">
                                                    {item.name}
                                                </p>
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-xl-5 col-xxl-4 px-5 px-sm-1 px-md-2 px-lg-4">
                    <div
                        id="cateringOrderCard"
                        className="card text-center mx-auto catering-order-card"
                    >
                        <h4 className="card-header">
                            <FontAwesomeIcon icon={faReceipt} />
                            <span className="ms-2">Quick Meal Order</span>
                        </h4>
                        <div className="card-body row gx-0 gap-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name Surname"
                                aria-label="Name Surname"
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Table Number"
                                aria-label="Table Number"
                            />
                            <hr className="my-2" />
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
                                >
                                    <option value={0} disabled>
                                        Choose first group food
                                    </option>

                                    {cateringDummyData.Group_1.map((item, index) => (
                                        <option
                                            key={index}
                                            value={item.mealId}
                                            onClick={() => handleGroupOne(item.mealId)}
                                        >
                                            {item.name}
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
                                >
                                    <option value={0} disabled>
                                        Choose second group food
                                    </option>

                                    {cateringDummyData.Group_2.map((item, index) => (
                                        <option
                                            key={index}
                                            value={item.mealId}
                                            onClick={() => handleGroupTwo(item.mealId)}
                                        >
                                            {item.name}
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
                                >
                                    <option value={0} disabled>
                                        Choose third group food
                                    </option>

                                    {cateringDummyData.Group_3.map((item, index) => (
                                        <option
                                            key={index}
                                            value={item.mealId}
                                            onClick={() => handleGroupThree(item.mealId)}
                                        >
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <hr className="my-2" />
                            <a href="#" className="btn btn-primary">
                                Create Order
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </UserPanelLayout>
    );
}

export default Catering
