import React, { useEffect, useState } from "react";
import PhoneInput from "../phone-input-component/PhoneInput";
import { useSelector } from "react-redux";
import { getWithAuth } from "../../api/apiCalls";
import IntlTelInput from "intl-tel-input/react";
import "intl-tel-input/build/js/utils.js";
import "intl-tel-input/build/css/intlTelInput.css";
const ProfilePersonalInformation = () => {
  const user = useSelector((state) => state.user.userInfo);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const fetchUserDetails = async () => {
    try {
      const response = await getWithAuth(`/api/v1.0/users/${user.userId}`);
      const { username, email, phone, firstName, lastName } =
        response.data;
      setUsername(username);
      setEmail(email);
      setPhoneNumber(phone);
      setFirstName(firstName);
      setLastName(lastName);
    } catch (error) {
      console.log("🚀 ~ fetchUserDetails ~ error", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);



  return (
    <div className="row gx-2 mt-4 mb-5">
      <div className="col-12 py-1 mb-2">
        <h3 className="fw-bold">Update Profile</h3>
      </div>
      <div className="col-12 py-1">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          disabled
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="col-12 col-md-6 py-1">
        <label className="form-label">First Name</label>
        <input
          type="text"
          className="form-control"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="col-12 col-md-6 py-1">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          className="form-control"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="col-12 col-md-6 py-1">
        <label className="form-label">Email</label>
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="col-12 col-md-6 py-1">
        <label className="form-label">Phone Number</label>
   <PhoneInput phoneDefault={phoneNumber} />

      
      </div>
      <div className="mt-4 col-12 col-md-4 col-lg-3 col-xl-2 mx-auto text-center">
        <button className="btn btn-primary w-100">Update</button>
      </div>
    </div>
  );
};

export default ProfilePersonalInformation;
