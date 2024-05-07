import React from "react"
import UserPanelLayout from "../layouts/UserPanelLayout";
import benefitsDummyData from "../dummy-data/benefitsDummyData.json"
import BenefitsCard from "../components/benefits-components/BenefitsCard";

const Benefits = () => {
    return (
        <UserPanelLayout>
            <div className="row gx-0 px-3 px-md-3 py-3 d-flex justify-content-start">
                {
                    benefitsDummyData.map((item, index) => (
                        <BenefitsCard key={index} data={item} index={index} />
                    ))
                }
            </div>
        </UserPanelLayout>
    );
};

export default Benefits;
