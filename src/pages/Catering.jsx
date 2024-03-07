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

    const [currentDate, setCurrentDate] = useState(getDate)

    return (
        <UserPanelLayout>
            <h5 className="text-center mx-5 mb-4">HIPOKAMPUS {currentDate} DAILY CATERING LIST</h5>
            <div className="d-flex justify-content-center my-4 col col-md-9 mx-auto">
                <div className="alert alert-info fw-bold w-100 mx-5 mx-sm-3" role="alert">
                    <p><FontAwesomeIcon icon={faCircleInfo} size="xl" className="me-2" />You can choose one from each group.</p>
                    <p><FontAwesomeIcon icon={faCircleInfo} size="xl" className="me-2" />You can place your order until 12:00.</p>
                    <p><FontAwesomeIcon icon={faCircleInfo} size="xl" className="me-2" />Your orders will be ready between 13.30-14.00.</p>
                    <p><FontAwesomeIcon icon={faCircleInfo} size="xl" className="me-2" />After you create an order in the online system, you can pay to the cashier.</p>
                </div>
            </div>
            <h5 className="text-center mx-5 mt-2 mb-5">
                Group 1 <span className="catering-sign">+ </span>
                Group 2 <span className="catering-sign">+ </span>
                Group 3 <span className="catering-sign">= </span>
                130 ₺ <span style={{ whiteSpace: "nowrap" }}>( 4.13 $)</span>
            </h5>
            <hr className="mx-5 mb-5" />
            <div className="row gx-0">
                <div className="col-sm-12 col-md-7 col-xl-8 col-xxl-9">
                    <div className="pb-4 px-4">
                        <div className="row gx-0 gap-3">
                            <div className="row gx-0 pb-4 justify-content-center justify-content-md-start">
                                <div className="text-center text-primary fw-bold fs-4">
                                    <FontAwesomeIcon icon={faRectangleList} /> Group 1
                                </div>
                                {cateringDummyData.Group_1.map((item, index) => (
                                    <div key={index} className="col-sm-12 col-md-6 col-xl-3 px-5 px-md-2 catering-card d-flex">
                                        <div class="card w-100">
                                            <img src={item.image} class="card-img-top catering-card-image" alt="..." />
                                            <div class="card-body">
                                                <p class="card-text fw-bold text-center fs-5">{item.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row gx-0 gap-0 pt-3 py-4 justify-content-center justify-content-md-start">
                                <div className="text-center text-secondary fw-bold fs-4">
                                    <FontAwesomeIcon icon={faRectangleList} /> Group 2
                                </div>
                                {cateringDummyData.Group_2.map((item, index) => (
                                    <div key={index} className="col-sm-12 col-md-6 col-xl-3 px-5 px-md-2 catering-card d-flex">
                                        <div class="card w-100">
                                            <img src={item.image} class="card-img-top catering-card-image" alt="..." />
                                            <div class="card-body">
                                                <p class="card-text fw-bold text-center fs-5">{item.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row gx-0 gap-0 pt-3 py-4 justify-content-center justify-content-md-start">
                                <div className="text-center text-primary fw-bold fs-4">
                                    <FontAwesomeIcon icon={faRectangleList} /> Group 3
                                </div>
                                {cateringDummyData.Group_3.map((item, index) => (
                                    <div key={index} className="col-sm-12 col-md-6 col-xl-3 px-5 px-md-2 catering-card d-flex">
                                        <div class="card w-100">
                                            <img src={item.image} class="card-img-top catering-card-image" alt="..." />
                                            <div class="card-body">
                                                <p class="card-text fw-bold text-center fs-5">{item.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5 col-xl-4 col-xxl-3 px-5 px-sm-1 px-md-3 px-lg-4">
                    <div className="card text-center mx-auto catering-order-card">
                        <h4 className="card-header">
                            <FontAwesomeIcon icon={faReceipt} />
                            <span className="ms-2">Quick Meal Order</span>
                        </h4>
                        <div className="card-body row gx-0 gap-2">
                            <input type="text" className="form-control" placeholder="Name Surname" aria-label="Name Surname" />
                            <input type="text" className="form-control" placeholder="Table Number" aria-label="Table Number" />
                            <hr className="my-2" />
                            <div class="input-group mb-1">
                                <label class="input-group-text fw-bold" for="group-1-select">Group 1</label>
                                <select class="form-select" id="group-1-select">
                                    <option selected>Choose...</option>
                                    {cateringDummyData.Group_1.map((item, index) => (
                                        <option key={index} value={index + 1}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div class="input-group mb-1">
                                <label class="input-group-text fw-bold" for="group-2-select">Group 2</label>
                                <select class="form-select" id="group-2-select">
                                    <option selected>Choose...</option>
                                    {cateringDummyData.Group_2.map((item, index) => (
                                        <option key={index} value={index + 1}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div class="input-group">
                                <label class="input-group-text fw-bold" for="group-3-select">Group 3</label>
                                <select class="form-select" id="group-3-select">
                                    <option selected>Choose...</option>
                                    {cateringDummyData.Group_3.map((item, index) => (
                                        <option key={index} value={index + 1}>{item.name}</option>
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
        </UserPanelLayout >
    )
}

export default Catering
