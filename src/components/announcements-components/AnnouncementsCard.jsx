import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const BenefitsCard = ({ data, index }) => {

    return (
        <div key={index} className="px-1 px-lg-2 px-lg-3 col-12 col-md-6 col-xl-4 mb-4 mb-md-3">
            <div class="card text-dark bg-light mb-3 h-100">
                <div class="card-header text-primary fw-bold announcement-card-title text-center">
                    <FontAwesomeIcon icon={faBell} className="me-2" />{data.title}
                </div>
                <div class="card-body">
                    <p class="card-text text-muted">{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BenefitsCard;
