import React from "react"
import UserPanelLayout from "../layouts/UserPanelLayout";
import eventsDummyData from "../dummy-data/eventsDummyData.json"
import EventsCard from "../components/events-components/EventsCard";

const Events = () => {
    return (
        <UserPanelLayout>
            <div className="row gx-0 px-5 px-md-3 py-3 d-flex justify-content-start">
                {
                    eventsDummyData.map((item, index) => (
                        <EventsCard key={index} data={item} index={index} />
                    ))
                }
            </div>
        </UserPanelLayout>
    );
};

export default Events;
