import React, { useEffect, useState } from "react";
import PhoneInput from "../phone-input-component/PhoneInputComponent";
import { useSelector } from "react-redux";
import { getWithAuth, putWithAuth } from "../../api/apiCalls";
import ClassicalBSAlert from "../alert-component/ClassicalBSAlert";
import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const ProfilePersonalInformation = () => {
  const user = useSelector((state) => state.user.userInfo);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchUserDetails = async () => {
    try {
      const response = await getWithAuth("/api/v1.0/users/profile");
      const { username, email, phone, firstName, lastName } = response.data;
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

  const handleUpdate = async () => {
    try {
      const body = { email, phone: phoneNumber, firstName, lastName };
      const response = await putWithAuth("/api/v1.0/users", body);

      fetchUserDetails();
      setIsSuccess(true);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setIsSuccess(false);
      console.log("🚀 ~ fetchUserDetails ~ error", error);
    }
  };

  return (
    <div className="row gx-2 mt-4 mb-5">
      <div className="col-12 py-1 mb-2">
        <h3 className="fw-bold text-center">Update Profile</h3>
      </div>
      {isSuccess ? (
        <ClassicalBSAlert
          message="Your profile details updated successfully"
          variant="success"
          icon={faCheckCircle}
        />
      ) : (
        isError && (
          <ClassicalBSAlert
            message="There is an error while updating your profile"
            variant="danger"
            icon={faExclamationCircle}
          />
        )
      )}

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
        <PhoneInput
          phoneDefault={phoneNumber}
          onChangePhoneNumber={setPhoneNumber}
        />
      </div>
      <div className="mt-4 col-12 col-md-4 col-lg-3 col-xl-2 mx-auto text-center">
        <button className="btn btn-primary w-100" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

export default ProfilePersonalInformation;
