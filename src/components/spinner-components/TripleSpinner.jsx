import React from "react";

const TripleSpinner = () => {
    return (
        <div
            className="row gap-1 justify-content-center align-items-center min-vh-100"
            style={{ paddingBottom: "30%" }}>
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-tertiary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default TripleSpinner;
