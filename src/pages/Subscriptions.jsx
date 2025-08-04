import React from "react"
import UserPanelLayout from "../layouts/UserPanelLayout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBriefcase, faHandshake, faLayerGroup, faPlus, faUserGroup
} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"

const Subscriptions = () => {
  return (
    <UserPanelLayout>
      <div className="row align-items-md-stretch pb-3 pe-1 pe-sm-2 ps-sm-1">
        <div className="col-12 p-2">
          <div
            className="subscriptions-jumbotron p-2 mt-1 border rounded-3 d-flex justify-content-between">
            <span className="fw-bold fs-4 d-flex" style={{ alignSelf: "center" }}>
              <FontAwesomeIcon className="mx-1 text-primary" style={{ marginTop: "6px" }} icon={faLayerGroup} />
              Subscriptions
            </span>
            <span className="text-primary">
              <NavLink to={"/packages"}>
                <button className="btn btn-outline-primary ms-3">
                  <FontAwesomeIcon className="me-1" icon={faPlus} />
                  <span className="fw-bold">Add Package</span>
                </button>
              </NavLink>
            </span>
          </div>
        </div>
        <div className="col-md-6 p-2">
          <div className="h-100 subscriptions-jumbotron p-5 my-3 my-md-0 border rounded-3">
            <h3 className="fw-bold">
              <FontAwesomeIcon className="me-2 text-primary" icon={faBriefcase} />
              Virtual Office
            </h3>
            <p className="pt-3 pb-2">
              Start Date: 14/8/2024
              <br />
              End Date: 12/7/2025
              <br />
              Corporate Name: OrderFast
              <br />
              Tax Office: Lorem
              <br />
              Tax Number: 123123
              <br />
              Corporate Address: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum consectetur quidem perferendis, LOREM/IPSUM
            </p>
            <div className="btn-group">
              <button className="btn btn-outline-primary" type="button">Operations</button>
              <button className="btn btn-outline-primary" type="button">Manage Your Shipments</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2">
          <div className="h-100 subscriptions-jumbotron p-5 my-3 my-md-0 border rounded-3">
            <h3 className="fw-bold">
              <FontAwesomeIcon className="me-2 text-primary" icon={faUserGroup} />
              Coworking Space
            </h3>
            <p className="pt-3 pb-2">
              Start Date: 14/8/2024
              <br />
              End Date: 12/7/2025
              <br />
              Remained Usage Right: 4
            </p>
            <button className="btn btn-outline-primary" type="button">Operations</button>
          </div>
        </div>
        <div className="col-md-6 p-2">
          <div className="h-100 subscriptions-jumbotron p-5 my-3 my-md-0 border rounded-3">
            <h3 className="fw-bold">
              <FontAwesomeIcon className="me-2 text-primary" icon={faHandshake} />
              Meeting Room
            </h3>
            <p className="pt-3 pb-2">
              Start Date: 14/8/2024
              <br />
              End Date: 12/7/2025
              <br />
              Corporate Name: OrderFast
              <br />
              Office Id: 456456
              <br />
            </p>
            <button className="btn btn-outline-primary" type="button">Operations</button>
          </div>
        </div>
      </div>
    </UserPanelLayout >
  );
};

export default Subscriptions;
