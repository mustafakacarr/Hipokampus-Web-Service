import React from "react"
import UserPanelLayout from "../layouts/UserPanelLayout";
import campaignsDummyData from "../dummy-data/campaignsDummyData.json"
import CampaignsCard from "../components/campaigns-components/CampaignsCard";

const Campaigns = () => {
    return (
        <UserPanelLayout>
            <div className="row gx-0 px-5 px-md-3 py-3 d-flex justify-content-start">
                {
                    campaignsDummyData.map((item, index) => (
                        <CampaignsCard key={index} data={item} index={index} />
                    ))
                }
            </div>
        </UserPanelLayout>
    );
};

export default Campaigns;