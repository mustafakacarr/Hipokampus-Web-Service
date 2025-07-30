import { faAnglesRight, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fillPackage } from "../../features/package/packageSlice";
import { fillOrder } from "../../features/order/orderSlice";

const TicketBoxCard = ({ data, index , descriptionless=false}) => {
  const [selectedPeriodId, setSelectedPeriodId] = useState(2);

  const findPriceByPeriodId = () => {
    const period = data.prices.find(
      (item) => item.periodId == selectedPeriodId
    );
    return period ? period.price : 0;
  };

  const price = findPriceByPeriodId();
  const dispatch = useDispatch();

  const fillTicketBoxOrder = () => {

    const ticketBoxOrder = {}

    ticketBoxOrder.packageId = data.packageId
    ticketBoxOrder.periodId = selectedPeriodId

    dispatch(fillPackage(ticketBoxOrder))
  }

  const fillOrderDetails = () => {
      const order = {
        packageId: data.packageId,
        periodId: selectedPeriodId,
        orderType: MEETING_ROOM_ORDER,
      };
      dispatch(fillOrder(order));
  };

  return (
    <div
      key={index}
      className="px-1 px-sm-2 col-12 col-md-6 col-xl-4 mb-4 mb-md-3"
    >
      <div className="card package-ticket-card h-100">
        <div className="card-body p-0">
          <h4 className="card-title text-center py-4 m-0 package-title px-2">
            {data.packageName}
          </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="mt-0 pt-3 pb-1 mb-2">
                <p className="text-center fw-bold fs-4 my-0">{price} TL</p>
                <p className="text-center mb-3">({price} $) </p>
                <select
                  className="form-select mb-1"
                  aria-label="coShortTimeSelect"
                  onChange={(e) => setSelectedPeriodId(e.target.value)}
                >
                  {data.prices.map((item, index) => (
                    <option key={index} value={item.periodId}>
                      {item.periodName}
                    </option>
                  ))}
                </select>
              </div>
            </li>
          </ul>
        </div>
        <div className="card-footer packages-ticket-card-footer">
          <button onClick={fillTicketBoxOrder} className="btn btn-success btn-lg my-3 d-flex mx-auto">
            Buy It
            <FontAwesomeIcon
              className="my-auto ms-2"
              icon={faShoppingCart}
              size="lg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketBoxCard;
