import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUserIn } from "../features/user/userSlice";
import { postWithoutAuth } from "../api/apiCalls";
import { Navigate } from "react-router-dom";
import ClassicalBSAlert from "../components/alert-component/ClassicalBSAlert";
import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoginSuccessful, setLoginSuccessful] = useState(false)

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const handleSignIn = async () => {
    if (username === "" || password === "") {
      setError("Username and password cannot be empty");
      setSuccess("");
      return;
    }
    try {
      const body = { username, password };
      const response = await postWithoutAuth("/api/v1.0/auth/login", body);
      const { message, roles, ...rest } = response.data;
      dispatch(signUserIn({ ...rest }));
      setSuccess(message);
      setError("");

    } catch (error) {
      setError(error.message);
      setSuccess("");
      console.error(error);
      return
    }
    
    setLoginSuccessful(true)
  };

  return (
    <div className="d-flex align-items-center min-vh-100 bg-tertiary">
      <div className="m-auto px-3 px-sm-0 py-5">
        <div className="w-100 sign-in-form border border-primary rounded">
          <div className="d-flex justify-content-center row gx-0">
            <img
              className="mb-4 sign-in-image"
              src="src/assets/images/InWorkLogoAndText.png"
            />
            <p className="h3 mb-4 fw-normal text-center fw-bold">Sign in</p>
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
            <div className="form-floating">
              <input
                type="text"
                className="form-control sign-in-username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="Username"
              />
              <label htmlFor="signInUsername">Username</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control sign-in-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />
              <label htmlFor="signInPassword">Password</label>
            </div>


            <button
              onClick={handleSignIn}
              className="btn btn-primary w-100 py-2 my-2 fw-bold"
            >
              Sign in
            </button>

            <a
              href="/password-recovery"
              className="text-center my-1 row gx-0 text-decoration-none"
            >
              <button className="btn btn-outline-primary w-100">
                Forgot password?
              </button>
            </a>
            <div className="my-4">
              Don't have an account?
              <a className="ms-2 fw-bold" href="/sign-up">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <span className="d-flex justify-content-center my-4">
          © 2025 InWork Coworking Space
        </span>
      </div>
      {isLoginSuccessful && <Navigate to="/dashboard" />}
    </div>
  );
};

export default SignIn;
