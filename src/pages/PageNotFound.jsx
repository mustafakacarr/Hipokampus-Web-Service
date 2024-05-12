import React from "react";

const PageNotFound = () => {

    let userName = sessionStorage.getItem("userName")

    return (
        <>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center border rounded border-primary p-4 m-2" style={{maxWidth: "450px"}}>
                    <img className="img-fluid w-75" style={{minWidth: "200px"}} src="https://hipokampus.com.tr/images/logo-228x48.webp" alt="Hipokampus Logo" />
                    <p className="fs-3 mt-3">Page not found.</p>
                    <p className="lead">
                        The page you’re looking for doesn’t exist.
                    </p>
                    <a href={(userName) ? "/dashboard" : "/"}className="btn btn-primary">Go Back</a>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;
