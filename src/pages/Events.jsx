import React, { useEffect, useState } from "react"
import UserPanelLayout from "../layouts/UserPanelLayout";
import { getWithoutAuth } from "../api/apiCalls";
import EventsCard from "../components/events-components/EventsCard";
import TripleSpinner from "../components/spinner-components/TripleSpinner";
import ErrorWhileLoadingAlert from "../components/alert-component/ErrorWhileLoadingAlert";

const Events = () => {

    const [eventsList, setEventsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isAlert, setIsAlert] = useState(false)

    const fetchEvents = async () => {
        try {
            const response = await getWithoutAuth("/api/v1.0/events")
            setEventsList(response.data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setIsAlert(true)
        }
    };

    useEffect(() => {
        fetchEvents()
    }, []);

    return (
        <UserPanelLayout>
            {
                isAlert &&
                <ErrorWhileLoadingAlert />
            }
            {
                isLoading &&
                <TripleSpinner />
            }
            {!isLoading && !isAlert &&
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
