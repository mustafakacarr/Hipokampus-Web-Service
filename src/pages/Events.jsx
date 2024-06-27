import React, { useEffect, useState } from "react"
import UserPanelLayout from "../layouts/UserPanelLayout";
import { getWithoutAuth } from "../api/apiCalls";
import EventsCard from "../components/events-components/EventsCard";

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
                <div className="row gap-1 justify-content-center align-items-center min-vh-100" style={{paddingBottom: "30%"}}>
                    <div class="spinner-grow text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-secondary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-tertiary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
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
