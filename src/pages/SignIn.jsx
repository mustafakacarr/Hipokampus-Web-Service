import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUserIn } from "../features/user/userSlice";
import axios from "axios";
import { postWithoutAuth } from "../api/apiCalls";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history=useNavigate();
  const handleSignIn = async () => {
    try {
      const body = { username, password };
      const response = await axios.post("/api/v1.0/auth/login", body);
      const { message,roles, ...rest } = response.data;
      dispatch(signUserIn({ ...rest }));
      history("/dashboard");
    } catch (error) {
      console.log("🚀 ~ handleSignIn ~ error:", error.message);
      console.error(error);
    }
  };

  return (
    <div className="d-flex align-items-center min-vh-100 bg-tertiary">
      <div className="m-auto px-3 px-sm-0 py-5">
        <div className="w-100 sign-in-form border border-primary rounded">
          <div className="d-flex justify-content-center row gx-0">
            <img
              className="mb-4 sign-in-image"
              src="https://hipokampus.com.tr/images/logo-228x48.webp"
            />
            <p className="h3 mb-4 fw-normal text-center">Sign in</p>
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
            <div className="form-check text-start my-4">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>

            <button
              onClick={handleSignIn}
              className="btn btn-primary w-100 py-2 my-2"
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
              <a className="ms-2" href="/sign-up">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <span className="d-flex justify-content-center my-4">
          © 2024 Hipokampus Web Service
        </span>
      </div>
    </div>
  );
};

export default SignIn;
