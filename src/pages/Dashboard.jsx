import React from "react";
import UserPanelLayout from "../layouts/UserPanelLayout";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <UserPanelLayout>
      <div className="p-5">
        <div className="mb-4 rounded text-secondary">
          <div className="container-fluid p-5 dashboard-jumbotron rounded-3">
            <h1 className="display-6 fw-bold">InWork Advantages</h1>
            <p className="col-md-8 fs-4">
              Enjoy offices with top-notch facilities,
              a variety of advantages and an environment
              that meets your needs with InWork.
            </p>
            <NavLink to={"/packages"}>
              <button className="btn btn-primary btn-lg fw-bold" type="button">Explore Now</button>
            </NavLink>
          </div>
        </div>
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 secondary-dashboard-jumbotron rounded-3">
              <h2 className="fw-bold text-primary">Air-conditioned Offices</h2>
              <p>
                You can work comfortably and increase your
                productivity in air-conditioned offices at InWork.
                Check out our offices to enjoy working in comfort.
              </p>
              <NavLink to={"/packages"}>
                <button className="btn btn-primary fw-bold" type="button">Feel Refreshed</button>
              </NavLink>
            </div>
          </div>
          <div className="col-md-6 py-4 py-md-0">
            <div className="h-100 p-5 dashboard-jumbotron rounded-3">
              <h2 className="fw-bold">Grab Your Coffee</h2>
              <p>
                With a wide range of products,
                you can take advantage of our cafe and
                benefit from our services while focusing
                on your business.
              </p>
              <NavLink to={"/cafe"}>
                <button className="btn btn-outline-primary fw-bold" type="button">Explore Cafe</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </UserPanelLayout>
  );
};

export default Dashboard;
