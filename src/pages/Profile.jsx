import React from "react";
import UserPanelLayout from "../layouts/UserPanelLayout";
import PhoneInput from "../components/phone-input-component/PhoneInput"

const Profile = () => {
  return (
    <UserPanelLayout>
      <div className="mt-3 mx-5 mx-md-3 mx-lg-5">
        <div className="border rounded mx-auto py-1 px-3" style={{ maxWidth: "1100px", backgroundColor: "#fafafa" }}>
          <div className="row gx-2 mt-3">
            <div className="col-12 col-md-6 col-lg-3 py-1">
              <button className="btn btn-dark rounded px-3 w-100 h-100" type="button">Personal Information</button>
            </div>
            <div className="col-12 col-md-6 col-lg-3 py-1">
              <button className="btn btn-dark rounded px-3 w-100 h-100" type="button">Invoice Details</button>
            </div>
            <div className="col-12 col-md-6 col-lg-3 py-1">
              <button className="btn btn-dark rounded px-3 w-100 h-100" type="button">Payment History</button>
            </div>
            <div className="col-12 col-md-6 col-lg-3 py-1">
              <button className="btn btn-dark rounded px-3 w-100 h-100" type="button">Account History</button>
            </div>
          </div>
          <div className="row gx-2 mt-4 mb-5">
            <div className="col-12 py-1 mb-2">
              <h3 className="fw-bold">Update Profile</h3>
            </div>
            <div className="col-12 py-1">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" disabled />
            </div>
            <div className="col-12 col-md-6 py-1">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-12 col-md-6 py-1">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-12 col-md-6 py-1">
              <label className="form-label">Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-12 col-md-6 py-1">
              <label className="form-label">Phone Number</label>
              <PhoneInput />
            </div>
            <div className="mt-4 col-12 col-md-4 col-lg-3 col-xl-2 mx-auto text-center">
              <button className="btn btn-primary w-100">Update</button>
            </div>
          </div>
        </div>
      </div>
    </UserPanelLayout>
  );
};

export default Profile;
