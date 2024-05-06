import React from "react";
import PhoneInput from "../phone-input-component/PhoneInput";

const ProfilePersonalInformation = () => {
    return (
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
    );
};

export default ProfilePersonalInformation;
