import React from "react";

const CampaignsCard = ({ data, index }) => {

    return (
        <div key={index} className="px-1 px-md-2 col-12 col-md-6 col-xl-4 mb-4 mb-md-3">
            <div class="card campaigns-card">
                <img src={data.image} class="card-img-top" alt="Campaigns Card Image" />
                <div class="card-body">
                    <p className="fw-bold text-primary fs-5 text-center my-2">
                        {data.title}
                    </p>
                    <p class="card-text text-muted campaigns-card-description mb-2 mt-3">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CampaignsCard;
