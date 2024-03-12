import React, { useState } from "react"
import UserPanelLayout from "../layouts/UserPanelLayout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesRight, faComments } from "@fortawesome/free-solid-svg-icons"
import packagesDummyData from "../dummy-data/packagesDummyData.json"

var filteredPackagesData, filteredTicketData = packagesDummyData
var showTicket = true

const Packages = () => {

    const [packageFilter, setPackageFilter] = useState("Fethiye_Coworking_Space");

    if (packageFilter == "Fethiye_Coworking_Space") {
        filteredPackagesData = packagesDummyData.Fethiye_Coworking_Space
        filteredTicketData = packagesDummyData.Fethiye_Coworking_Space_Ticket
        showTicket = true
    }

    if (packageFilter == "Fethiye_Virtual_Office") {
        filteredPackagesData = packagesDummyData.Fethiye_Virtual_Office
        showTicket = false
    }

    if (packageFilter == "Fethiye_Meeting_Room") {
        filteredPackagesData = packagesDummyData.Fethiye_Meeting_Room
        filteredTicketData = packagesDummyData.Fethiye_Meeting_Room_Ticket
        showTicket = true
    }

    function handlePackages(selectedFilter) {
        setPackageFilter(selectedFilter);
    }

    return (
        <UserPanelLayout>
            <div>
                <div className="text-center">
                    <h1 className="fs-1">HIPOKAMPUS MEMBERSHIP</h1>
                    <span>VAT NOT INCLUDED</span>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-2 my-5">
                    <button
                        className="btn btn-outline-primary" onClick={() => handlePackages("Fethiye_Virtual_Office")}
                    >
                        FETHIYE VIRTUAL OFFICE
                    </button>
                    <button
                        className="btn btn-outline-primary" onClick={() => handlePackages("Fethiye_Coworking_Space")}
                    >
                        FETHIYE COWORKING SPACE
                    </button>
                    <button
                        className="btn btn-outline-primary" onClick={() => handlePackages("Fethiye_Meeting_Room")}
                    >
                        FETHIYE MEETING ROOM
                    </button>
                </div>
                <div className="row gx-0 px-5 px-md-3 py-3 d-flex justify-content-center">
                    {
                        filteredPackagesData.map((item, index) => (
                            <div key={index} className="px-1 px-lg-2 px-lg-3 col-12 col-md-6 col-xl-4 mb-4 mb-md-3">
                                <div class="card package-card h-100">
                                    <div class="card-body p-0">
                                        <h4 class="card-title text-center py-4 m-0 package-title">{item.name}</h4>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">
                                                <div className="mt-0 pt-3 pb-1 mb-2">
                                                    <p className="text-center fw-bold fs-4 my-0">{item.price}</p>
                                                    <p className="text-center mb-3">({item.price_dollar})</p>
                                                    <select class="form-select mb-1" aria-label="coShortTimeSelect">
                                                        {filteredPackagesData[index].time_periods.map((item, index) => (
                                                            <option key={index} value={index + 1}>{item}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </li>
                                            <li className="list-group-item text-center package-card-list">
                                                <ul className="text-start my-4">
                                                    {filteredPackagesData[index].benefits.map((item, index) => (
                                                        <li key={index} className="my-3">{item}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer packages-card-footer">
                                        <button className="btn btn-primary btn-lg my-3 d-flex mx-auto">
                                            More
                                            <FontAwesomeIcon className="my-auto ms-2" icon={faAnglesRight} size="lg" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="px-1 px-lg-2 px-lg-3 mb-3">
                        <div className="package-card my-2 p-4 package-offer d-flex justify-content-between row gx-0">
                            <span className="fw-bold fs-3 pe-md-2 align-bottom package-offer-text col-12 col-md-9">GET AN OFFER FOR CUSTOMIZED SOLUTIONS</span>
                            <button className="btn btn-primary btn-lg fs-5 fw-bold col-12 col-md-3 mt-4 mt-md-0"><FontAwesomeIcon icon={faComments} className="me-2" size="xl" />GET AN OFFER</button>
                        </div>
                    </div>
                    {
                        showTicket ? (
                            filteredTicketData.map((item, index) => (
                                <div key={index} className="px-1 px-lg-2 px-lg-3 col-12 col-md-6 col-xl-4 mb-4 mb-md-3">
                                    <div class="card package-ticket-card h-100">
                                        <div class="card-body p-0">
                                            <h4 class="card-title text-center py-4 m-0 package-title">{item.name}</h4>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">
                                                    <div className="mt-0 pt-3 pb-1 mb-2">
                                                        <p className="text-center fw-bold fs-4 my-0">{item.price}</p>
                                                        <p className="text-center mb-3">({item.price_dollar})</p>
                                                        <select class="form-select mb-1" aria-label="coShortTimeSelect">
                                                            {packagesDummyData.Fethiye_Coworking_Space[index].time_periods.map((item, index) => (
                                                                <option key={index} value={index + 1}>{item}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer packages-ticket-card-footer">
                                            <button className="btn btn-primary btn-lg my-3 d-flex mx-auto">
                                                More
                                                <FontAwesomeIcon className="my-auto ms-2" icon={faAnglesRight} size="lg" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (null)
                    }
                </div>
            </div>
        </UserPanelLayout>
    )
}

export default Packages
