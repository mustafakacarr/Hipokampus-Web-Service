import React from "react";

const CampaignsCard = ({ data, index }) => {

    return (
        <div key={index} className="px-1 px-md-2 col-12 col-md-6 col-xl-4 mb-4 mb-md-3">
            <div className="card campaigns-card">
                <img src={data.image} className="card-img-top" alt="Campaigns Card Image" />
                <div className="card-body">
                    <p className="fw-bold text-primary fs-5 text-center my-2">
                        {data.title}
                    </p>
                    <p className="card-text text-muted campaigns-card-description mb-2 mt-3">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CampaignsCard;
