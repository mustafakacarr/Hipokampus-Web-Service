import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faTicket,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const EventsCard = ({ data, index }) => {
  return (
    <div className="px-4 col-12 col-md-6 col-xl-4 my-3">
      <div className="card">
        <img
          src="https://hipokampus.com.tr/images/hizmetler/tr/hipokampus-kultur-sanat-sosyal-girisimcilik-etkinlikleri.webp"
          className="card-img-top"
          alt={data.title}
        />
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <FontAwesomeIcon icon={faUserGroup} className="me-1" />
              <span className="me-2">{data.capacity}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendar} className="me-1" />
              <span>{data.start_date}</span>
            </div>
          </div>
          <h4 className="card-title text-center fw-bold">{data.title}</h4>
          <p className="card-text text-muted">{data.description}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div>
            <span>Ticket Price: </span>
            <span className="fw-bold fs-4">{data.price}₺</span>
          </div>
          <button className="btn btn-success">
            <FontAwesomeIcon icon={faTicket} className="me-2" />
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
