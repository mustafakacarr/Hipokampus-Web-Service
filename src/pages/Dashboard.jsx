import React from "react";
import UserPanelLayout from "../layouts/UserPanelLayout";

const Dashboard = () => {
  return (
    <UserPanelLayout>
      <div className="p-5">
        <div className="mb-4 rounded text-secondary">
          <div className="container-fluid p-5 dashboard-jumbotron rounded-3">
            <h1 className="display-6 fw-bold">InWork Advantages</h1>
            <p className="col-md-8 fs-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Quisque faucibus ex sapien vitae pellentesque sem placerat.
            </p>
            <button className="btn btn-primary btn-lg" type="button">Explore Now</button>
          </div>
        </div>
        <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-100 p-5 secondary-dashboard-jumbotron rounded-3">
              <h2 className="fw-bold text-primary">Air-conditioned Offices</h2>
              <p>
                Vestibulum eu mattis libero, at euismod nulla.
                Nulla tempus facilisis est quis congue. Nullam non lacinia velit.
                Sed sed nisl augue. Cras eu consectetur eros.
              </p>
              <button class="btn btn-primary fw-bold" type="button">Feel Refreshed</button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 dashboard-jumbotron rounded-3">
              <h2 className="fw-bold">New Ideas</h2>
              <p>
                Morbi ac purus sapien. Sed ornare, est quis feugiat dictum, enim lorem finibus justo,
                eu hendrerit est est et diam. Morbi id rutrum felis. Sed elementum vel neque et convallis.
                Proin a molestie justo, ac fringilla dui.
              </p>
              <button class="btn btn-outline-primary fw-bold" type="button">Get Ideas</button>
            </div>
          </div>
        </div>
      </div>
    </UserPanelLayout>
  );
};

export default Dashboard;
