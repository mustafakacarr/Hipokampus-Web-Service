import React from "react";

const PageNotFound = () => {

    let username = sessionStorage.getItem("username")

    return (
        <>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center border rounded border-primary p-4 m-2" style={{maxWidth: "450px"}}>
                    <img className="img-fluid page-not-found-img mb-3" style={{minWidth: "200px"}}
                     src="src/assets/images/InWorkLogoAndText.png" alt="InWork Logo" />
                    <p className="fs-3 mt-3">Page not found.</p>
                    <p className="lead mb-4">
                        The page you’re looking for doesn’t exist.
                    </p>
                    <a href={(username) ? "/dashboard" : "/"}className="btn btn-primary">Go Back</a>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;
