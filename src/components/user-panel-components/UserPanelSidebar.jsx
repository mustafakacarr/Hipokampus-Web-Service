import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
    faBullhorn,
    faCubes,
    faMugSaucer,
    faUtensils,
    faWallet,
    faUser,
    faMessage,
    faFaceSmile
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const UserPanelSidebar = () => {
    return (
        <div
            className="d-flex flex-column flex-shrink-0 px-3 pb-3 bg-light h-100"
            style={{ minHeight: "600px", paddingTop: "16px" }}
        >
            <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
            >
                <img
                    src="https://hipokampus.com.tr/images/logo-228x48.webp"
                    width={220}
                />
            </a>
            <ul className="nav nav-pills flex-column mb-auto gap-3 mt-4">
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/profile">
                        <FontAwesomeIcon icon={faUser} size="lg" />
                        <span className=" ms-2 offcanvas-link">Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/packages">
                        <FontAwesomeIcon icon={faCubes} size="lg" />
                        <span className=" ms-2 offcanvas-link">Packages</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/cafe">
                        <FontAwesomeIcon icon={faMugSaucer} size="lg" />
                        <span className=" ms-2 offcanvas-link">Cafe</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/catering">
                        <FontAwesomeIcon icon={faUtensils} size="lg" />
                        <span className=" ms-2 offcanvas-link">Catering</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/events">
                        <FontAwesomeIcon icon={faCalendarDays} size="lg" />
                        <span className=" ms-2 offcanvas-link">Events</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/announcements">
                        <FontAwesomeIcon icon={faBullhorn} size="lg" />
                        <span className=" ms-2 offcanvas-link">Announcements</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/benefits">
                        <FontAwesomeIcon icon={faFaceSmile} size="lg" />
                        <span className=" ms-2 offcanvas-link">Benefits</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/messages">
                        <FontAwesomeIcon icon={faMessage} size="lg" />
                        <span className=" ms-2 offcanvas-link">Messages</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/payment">
                        <FontAwesomeIcon icon={faWallet} size="lg" />
                        <span className=" ms-2 offcanvas-link">Payment</span>
                    </NavLink>
                </li>
            </ul>
        </div >
    );
};

export default UserPanelSidebar;
