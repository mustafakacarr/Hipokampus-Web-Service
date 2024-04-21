import React from "react";

const BenefitsCard = ({ data, index }) => {

    return (
        <div key={index} className="px-1 px-lg-2 px-lg-3 col-12 col-md-6 col-xl-4 mb-4 mb-md-3">
            <div className="card benefits-card">
                <img src={data.image}
                    alt="Benefits Card Image" className="benefits-card-image" />
                <div className="card-img-overlay benefits-card-overlay">
                    <h4 className="card-title mt-2 text-primary fw-bold text-center">
                        {data.title}
                    </h4>
                    <p className="card-text mt-4 benefits-card-description text-muted">{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BenefitsCard;
