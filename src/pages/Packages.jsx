import React from "react"
import UserPanelLayout from "../layouts/UserPanelLayout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"

const Packages = () => {
    return (
        <UserPanelLayout>
            <div>
                <div className="text-center">
                    <h1 className="fs-1">HIPOKAMPUS MEMBERSHIP</h1>
                    <span>VAT NOT INCLUDED</span>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-2 my-5">
                    <button className="btn btn-outline-primary">FETHIYE VIRTUAL OFFICE</button>
                    <button className="btn btn-outline-primary">FETHIYE COWORKING SPACE</button>
                    <button className="btn btn-outline-primary">FETHIYE MEETING ROOM</button>
                </div>
                <div className="row gx-0 px-5 py-3 d-flex justify-content-between">
                    <div className="px-4 col-12 col-md-4">
                        <div class="card package-card">
                            <div class="card-body">
                                <h5 class="card-title text-center mt-2 package-title">CO SHORT TIME</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div className="my-3">
                                        <p className="text-center fw-bold fs-4 my-0">127.87₺</p>
                                        <p className="text-center mb-3">(4$)</p>
                                        <select class="form-select mb-1" aria-label="coShortTimeSelect">
                                            <option selected value="1">Hourly</option>
                                            <option value="2">Half Day (2-4 Hours)</option>
                                        </select>
                                    </div>
                                </li>
                                <li className="list-group-item text-center package-card-list">
                                    <ul className="text-start my-4">
                                        <li className="my-3">Unlimited tea, coffee, water, and snacks</li>
                                        <li className="my-3">1 hour of cycling per day</li>
                                        <li className="my-3">Unlimited fiber internet</li>
                                    </ul>
                                    <button className="btn btn-primary btn-lg">More <FontAwesomeIcon icon={faAnglesRight} size="lg" /></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-4 col-12 col-md-4">
                        <div class="card package-card">
                            <div class="card-body">
                                <h5 class="card-title text-center mt-2 package-title">CO SHORT TIME</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div className="my-3">
                                        <p className="text-center fw-bold fs-4 my-0">127.87₺</p>
                                        <p className="text-center mb-3">(4$)</p>
                                        <select class="form-select mb-1" aria-label="coShortTimeSelect">
                                            <option selected>Select Time Period</option>
                                            <option value="1">Hourly</option>
                                            <option value="2">Half Day (2-4 Hours)</option>
                                        </select>
                                    </div>
                                </li>
                                <li className="list-group-item text-center package-card-list">
                                    <ul className="text-start my-4">
                                        <li className="my-3">Unlimited tea, coffee, water, and snacks</li>
                                        <li className="my-3">1 hour of cycling per day</li>
                                        <li className="my-3">Unlimited fiber internet</li>
                                    </ul>
                                    <button className="btn btn-primary btn-lg">More <FontAwesomeIcon icon={faAnglesRight} size="lg" /></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-4 col-12 col-md-4">
                        <div class="card package-card">
                            <div class="card-body">
                                <h5 class="card-title text-center mt-2 package-title">CO SHORT TIME</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div className="my-3">
                                        <p className="text-center fw-bold fs-4 my-0">127.87₺</p>
                                        <p className="text-center mb-3">(4$)</p>
                                        <select class="form-select mb-1" aria-label="coShortTimeSelect">
                                            <option selected>Select Time Period</option>
                                            <option value="1">Hourly</option>
                                            <option value="2">Half Day (2-4 Hours)</option>
                                        </select>
                                    </div>
                                </li>
                                <li className="list-group-item text-center package-card-list">
                                    <ul className="text-start my-4">
                                        <li className="my-3">Unlimited tea, coffee, water, and snacks</li>
                                        <li className="my-3">1 hour of cycling per day</li>
                                        <li className="my-3">Unlimited fiber internet</li>
                                    </ul>
                                    <button className="btn btn-primary btn-lg">More <FontAwesomeIcon icon={faAnglesRight} size="lg" /></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="border rounded my-4 p-4 package-offer d-flex justify-content-between">
                            <span className="fw-bold fs-3 align-bottom package-offer-text">GET AN OFFER FOR CUSTOMIZED SOLUTIONS</span>
                            <button className="btn btn-outline-primary btn-lg">GET AN OFFER</button>
                        </div>
                    </div>
                    <div className="px-4 col-12 col-md-4">
                        <div class="card package-card">
                            <div class="card-body">
                                <h5 class="card-title text-center mt-2 package-title">CO SHORT TIME TICKET</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div className="my-2">
                                        <p className="text-center fw-bold fs-4 my-0">319.67₺</p>
                                        <p className="text-center mb-3">(10$)</p>
                                        <select class="form-select mb-1" aria-label="coShortTimeSelect">
                                            <option selected value="1">Half Daily (2-4 Hours) Ticket</option>
                                            <option value="2">10 Hours Ticket</option>
                                            <option value="3">5 Half Days Ticket</option>
                                            <option value="4">10 Half Days Ticket</option>
                                        </select>
                                    </div>
                                </li>
                                <li className="list-group-item text-center package-card-list">
                                    <button className="btn btn-primary btn-lg my-2">More <FontAwesomeIcon icon={faAnglesRight} size="lg" /></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-4 col-12 col-md-4">
                        <div class="card package-card">
                            <div class="card-body">
                                <h5 class="card-title text-center mt-2 package-title">CO SHORT TIME TICKET</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div className="my-2">
                                        <p className="text-center fw-bold fs-4 my-0">319.67₺</p>
                                        <p className="text-center mb-3">(10$)</p>
                                        <select class="form-select mb-1" aria-label="coShortTimeSelect">
                                            <option selected value="1">Half Daily (2-4 Hours) Ticket</option>
                                            <option value="2">10 Hours Ticket</option>
                                            <option value="3">5 Half Days Ticket</option>
                                            <option value="4">10 Half Days Ticket</option>
                                        </select>
                                    </div>
                                </li>
                                <li className="list-group-item text-center package-card-list">
                                    <button className="btn btn-primary btn-lg my-2">More <FontAwesomeIcon icon={faAnglesRight} size="lg" /></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-4 col-12 col-md-4">
                        <div class="card package-card">
                            <div class="card-body">
                                <h5 class="card-title text-center mt-2 package-title">CO SHORT TIME TICKET</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div className="my-2">
                                        <p className="text-center fw-bold fs-4 my-0">319.67₺</p>
                                        <p className="text-center mb-3">(10$)</p>
                                        <select class="form-select mb-1" aria-label="coShortTimeSelect">
                                            <option selected value="1">Half Daily (2-4 Hours) Ticket</option>
                                            <option value="2">10 Hours Ticket</option>
                                            <option value="3">5 Half Days Ticket</option>
                                            <option value="4">10 Half Days Ticket</option>
                                        </select>
                                    </div>
                                </li>
                                <li className="list-group-item text-center package-card-list">
                                    <button className="btn btn-primary btn-lg my-2">More <FontAwesomeIcon icon={faAnglesRight} size="lg" /></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </UserPanelLayout>
    )
}

export default Packages
