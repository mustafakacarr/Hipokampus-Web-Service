import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMoneyBill, faTicket, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const EventsCard = ({ data, index }) => {

    return (
        <div key={index} className="px-1 px-lg-2 px-lg-3 col-12 col-md-6 col-xl-4 mb-4 mb-md-3">
            <div className="card events-card">
                <div className="events-card-overlay card-body">
                    <h4 className="card-title events-card-header text-center py-4 m-0 px-2 fw-bold">
                        {data.title}
                    </h4>
                    <p className="card-text mt-2 text-muted p-3">{data.description}</p>
                </div>
                <div className="card-footer events-card-footer text-secondary fw-bold text-center">
                    <div className="row" style={{ whiteSpace: "nowrap" }}>
                        <span className="col"><FontAwesomeIcon icon={faUserGroup} className="me-1" />{data.capacity}</span>
                        <span className="col"><FontAwesomeIcon icon={faMoneyBill} className="me-1" />{data.price}₺</span>
                        <span className="col"><FontAwesomeIcon icon={faCalendar} className="me-1" />{data.start_date}</span>
                    </div>
                    <button className="btn btn-success text-center mt-3"><FontAwesomeIcon icon={faTicket} className="me-2" />Buy Ticket</button>
                </div>
            </div>
        </div>
    )
}

export default EventsCard;
