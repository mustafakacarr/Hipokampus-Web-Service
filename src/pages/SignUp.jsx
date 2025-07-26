import React, { useState } from "react";
import PhoneInput from "../components/phone-input-component/PhoneInputComponent";
import { postWithoutAuth } from "../api/apiCalls";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ClassicalBSAlert from "../components/alert-component/ClassicalBSAlert";
import PDPA from "../components/PDPA";
import { signUserIn } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [username, setUsername] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+90");
  const [isPdpaChecked, setPdpaCheckbox] = useState(false);

    const history = useNavigate();
    const dispatch = useDispatch();
  const handleSignUp = async () => {
    if (
      username === "" ||
      password === "" ||
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === ""
    ) {
      setError("All fields must be filled");
      setSuccess("");
      return;
    }
    if (password !== confirmPassword) {
      setError("Your passwords must be the same");
      setSuccess("");
      return;
    }
    if (!isPdpaChecked) {
      setError("You need to accept the PDPA to register");
      setSuccess("");
      return;
    }
    try {
      const body = { username, password, firstName, lastName, email, phone };
      const response = await postWithoutAuth("/api/v1.0/auth/register", body);
      const { message, roles, ...rest } = response.data;
      dispatch(signUserIn({ ...rest }));
      setSuccess(message+ " You're redirecting to the dashboard");
      setError("");
      setTimeout(() => {
        history("/dashboard");
      }, 1500);
    } catch (error) {
      setError(error.message);
      setSuccess("");
      console.error(error);
    }
  };
  return (
    <div className="d-flex align-items-center min-vh-100 bg-tertiary">
      <div className="m-auto px-3 px-sm-0 py-5">
        <div className="w-100 sign-up-form border border-primary rounded">
          <div className="d-flex justify-content-center row gx-0">
            <img
              className="mb-4 mt-2 sign-up-image"
              src="src/assets/images/InWorkLogoAndText.png"
            />
            <p className="h3 mb-2 fw-bold text-center">Sign up</p>
            {success != "" ? (
              <ClassicalBSAlert
                message={success}
                variant="success"
                icon={faCheckCircle}
              />
            ) : (
              error != "" && (
                <ClassicalBSAlert
                  message={error}
                  variant="danger"
                  icon={faExclamationCircle}
                />
              )
            )}
            <div className="form-floating my-2">
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                className="form-control"
                id="signUpUsername"
                placeholder="Username"
                required
              />
              <label htmlFor="signUpUsername">Username</label>
            </div>
            <div className="form-floating my-2">
              <input
                onChange={(e) => setfirstName(e.target.value)}
                value={firstName}
                type="text"
                className="form-control"
                id="signUpFirstName"
                placeholder="First Name"
                required
              />
              <label htmlFor="signUpFirstName">First name</label>
            </div>
            <div className="form-floating mb-2">
              <input
                onChange={(e) => setlastName(e.target.value)}
                value={lastName}
                type="text"
                className="form-control"
                id="signUpLastName"
                placeholder="Last Name"
                required
              />
              <label htmlFor="signUpLastName">Last Name</label>
            </div>
            <div className="form-floating mb-2">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className="form-control"
                id="signUpEmail"
                placeholder="Email"
                required
              />
              <label htmlFor="signUpEmail">Email</label>
            </div>
            <div className="form-floating my-2">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                className="form-control"
                id="signUpPassword"
                placeholder="Password"
                required
              />
              <label htmlFor="signUpPassword">Choose password</label>
            </div>
            <div className="form-floating mb-2">
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                type="password"
                className="form-control"
                id="signUpConfirmPassword"
                placeholder="Confirm password"
                required
              />
              <label htmlFor="signUpConfirmPassword">Confirm password</label>
            </div>
            <div className="my-2">
              <h6 className="fw-normal">Phone Number</h6>
              <PhoneInput className="w-100" onChangePhoneNumber={setPhone} />
            </div>
            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="pdpaCheckbox"
                onChange={(e) => setPdpaCheckbox(e.target.checked)}
                value={isPdpaChecked}
                required
              />
              <label
                type="button"
                className="form-check-label sign-up-pdpa fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#signUpModal"
              >
                I have read and accept the PDPA
              </label>
              <div className="modal" tabIndex="-1" id="signUpModal">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title text-center fw-bold h4">
                        PDPA INFORMATION TEXT
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body p-4">
                      <PDPA />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary mx-auto"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary w-100 py-2 my-2 fw-bold"
              onClick={handleSignUp}
            >
              Sign up
            </button>

            <div className="mt-3 mb-2">
              Already have an account?
              <a className="ms-2 fw-bold" href="/">
                Sign in
              </a>
            </div>
          </div>
        </div>
        <span className="d-flex justify-content-center my-4">
          © 2025 InWork Coworking Space
        </span>
      </div>
    </div>
  );
};

export default SignUp;
