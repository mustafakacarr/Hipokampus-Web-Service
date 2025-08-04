import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const AnnouncementsCard = ({ data, index }) => {

  return (
    <div
      key={index}
      className="px-1 px-md-2 col-12 col-md-6 col-xl-4 mb-4 mb-md-3"
    >
      <div
        className="card announcement-card text-dark mb-3 h-100"
      >
        <div className="card-body h-100 announcement-card-title">
          <div className="announcement-card-title fw-bold text-center">
            <FontAwesomeIcon icon={faBell} className="me-2 text-primary " />
            {data.title}
          </div>
          <div className="text-muted fs-6 mt-3">{data.description}</div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementsCard;
