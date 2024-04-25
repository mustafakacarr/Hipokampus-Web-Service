import React from "react";

const BenefitsCard = ({ data, index }) => {

    return (
        <div key={index} className="px-1 px-lg-2 px-lg-3 col-12 col-md-6 col-xl-4 mb-4 mb-md-3">
            <div class="card benefits-card">
                <img src={data.image} class="card-img-top" alt="Benefits Card Image" />
                <div class="card-body">
                    <p className="fw-bold text-primary fs-5 text-center my-2">
                        {data.title}
                    </p>
                    <p class="card-text text-muted benefits-card-description mb-2 mt-3">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BenefitsCard;
