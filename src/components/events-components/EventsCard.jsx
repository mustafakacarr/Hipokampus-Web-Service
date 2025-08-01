import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faChevronRight,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { fillOrder } from "../../features/order/orderSlice";
import { useNavigate } from "react-router-dom";
import { EVENT } from "../../constants/OrderType";

const EventsCard = ({ data, index }) => {
  const eventOrder = {}
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const fillEventOrder = () => {
    eventOrder.eventId = data.eventId
    eventOrder.orderType = EVENT

    dispatch(fillOrder(eventOrder));
    navigate("/order");
  };

  return (
    <div className="px-1 px-md-2 col-12 col-md-6 col-xl-4 mb-4 mb-md-3">
      <div className="card h-100">
        <img
          src={"data:image/jpg;base64," + data.image.file}
          className="card-img-top"
          alt={data.name}
          style={{height:"250px"}}
        />
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <FontAwesomeIcon icon={faUserGroup} className="me-1" />
              <span className="me-2">{data.quota}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendar} className="me-1" />
              <span>{data.startDate}</span>
            </div>
          </div>
          <h4 className="card-title text-center fw-bold">{data.name}</h4>
          <p className="card-text text-muted">{data.description}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div className="me-2">
            <span>Ticket Price: </span>
            <span className="fw-bold fs-4">{data.ticketPrice}₺</span>
          </div>
          <button onClick={fillEventOrder} className="btn btn-success">
            <FontAwesomeIcon icon={faChevronRight} className="me-2" />
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
