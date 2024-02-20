import React from "react";

const UserPanelSidebar = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light border user-panel-border">
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link link-dark" aria-current="page">
                        Profile
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        Campaigns
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        Events
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        Caterings
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        Messages
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        Payment
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default UserPanelSidebar
