import React from "react"

const PasswordRecovery = () => {
    return (
        <div className="d-flex align-items-center min-vh-100 bg-tertiary">
            <div className="m-auto px-3 px-sm-0 py-5">
                <div className="w-100 password-recovery-form border border-primary rounded">
                    <div className="d-flex justify-content-center row gx-0">
                        <img className="mt-4 mb-5 password-recovery-image" src="https://hipokampus.com.tr/images/logo-228x48.webp" />
                        <div className="form-floating mb-4">
                            <input type="email" className="form-control" id="passwordRecoveryEmail" placeholder="Enter your email to verify" />
                            <label for="passwordRecoveryEmail">Enter your email to verify</label>
                        </div>
                        <a href="/">
                            <button className="btn btn-primary w-100 py-2" type="submit">
                                Recover password
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

export default PasswordRecovery;
