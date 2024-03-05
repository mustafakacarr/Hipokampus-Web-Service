import React from "react"

const SignIn = () => {
    return (
        <div className="d-flex align-items-center min-vh-100 bg-tertiary">
            <div className="m-auto py-5">
                <div className="w-100 sign-in-form border border-primary rounded">
                    <div className="d-flex justify-content-center row gx-0">
                        <img class="mb-4 sign-in-image" src="https://hipokampus.com.tr/images/logo-228x48.webp" />
                        <p className="h3 mb-4 fw-normal text-center">Sign in</p>
                        <div class="form-floating">
                            <input type="text" class="form-control sign-in-username" id="signInUsername" placeholder="Username" />
                            <label for="signInUsername">Username</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control sign-in-password" id="signInPassword" placeholder="Password" />
                            <label for="signInPassword">Password</label>
                        </div>
                        <div class="form-check text-start my-4">
                            <input class="form-check-input" type="checkbox" value="remember-me" id="rememberMe" />
                            <label class="form-check-label" for="rememberMe">
                                Remember me
                            </label>
                        </div>
                        <a href="/cafe">
                            <button class="btn btn-primary w-100 py-2 my-2" type="submit">
                                Sign in
                            </button>
                        </a>
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
