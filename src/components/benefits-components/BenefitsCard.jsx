import React from "react";

const BenefitsCard = ({ data, index }) => {

    return (
        <div key={index} className="px-1 px-lg-2 px-lg-3 col-12 col-md-6 col-xl-4 mb-4 mb-md-3">
            <div className="card benefits-card text-dark">
                <img src="https://hipokampus.com.tr/images/kampanya/en/hipokampus-discount-coupon-fizyoform-partner.jpg"
                    alt="Fizyoform Discount Image" className="benefits-card-image" />
                <div className="card-img-overlay benefits-card-overlay">
                    <h4 className="card-title mt-2 text-light fw-bold text-center">
                        {data.title}
                    </h4>
                    <p className="card-text mt-4 fw-bold benefits-card-description">{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BenefitsCard;
