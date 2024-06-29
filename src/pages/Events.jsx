import React, { useEffect, useState } from "react"
import UserPanelLayout from "../layouts/UserPanelLayout";
import { getWithoutAuth } from "../api/apiCalls";
import EventsCard from "../components/events-components/EventsCard";
import TripleSpinner from "../components/spinner-components/TripleSpinner";

const Events = () => {

    const [eventsList, setEventsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const fetchEvents = async () => {
        try {
            const response = await getWithoutAuth("/api/v1.0/events")
            setEventsList(response.data)
            setIsLoading(false)
        } catch (error) {
            console.log("Error: Cannot fetch events!")
        }
    };

    useEffect(() => {
        fetchEvents()
    }, []);

    return (
        <UserPanelLayout>
            {isLoading &&
                <TripleSpinner />
            }
            {!isLoading &&
                <div className="row gx-0 px-3 py-3 d-flex justify-content-start">
                    {
                        eventsList.map((item, index) => (
                            <EventsCard key={index} data={item} index={index} />
                        ))
                    }
                </div>
            }
        </UserPanelLayout>
    );
};

export default Events;
