import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTriangleExclamation
} from "@fortawesome/free-solid-svg-icons";

const ErrorWhileLoadingAlert = ({msg}) => {
    return (
        <div
            className="min-vh-100 text-primary d-flex align-items-center justify-content-center"
            style={{ paddingBottom: "30%" }}>
            <div className="text-center">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-center" fontSize={100} />
                <p className="text-dark h4 mt-2 fw-bold">
                  {msg ? msg :  "Error while loading page"}
                </p>
            </div>
        </div>
    );
};

export default ErrorWhileLoadingAlert;
