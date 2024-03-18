import React, { useState } from "react";
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
    faFaceSmile,
    faCaretDown,
    faBriefcase,
    faUserGroup,
    faHandshake
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";

const UserPanelSidebar = () => {

    const [rotateCaret, setRotateCaret] = useState("false")
    const handleCaretRotate = () => setRotateCaret(!rotateCaret)
    const rotate = rotateCaret ? "rotate(-90deg)" : "rotate(0)"

    const { width } = useWindowSize()

    return (width < 576) ? null : (
        <div
            className="d-flex flex-column flex-shrink-0 px-3 pb-3 bg-light h-100"
            style={{ minHeight: "600px", paddingTop: "16px" }}
        >
            <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none brand-logo"
            >
                <img
                    src="https://hipokampus.com.tr/images/logo-228x48.webp"
                    style={{width:"95%", maxWidth:"220px"}}
                />
            </a>
            <ul className="nav nav-pills flex-column mb-auto gap-3 mt-4">
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/profile">
                        <FontAwesomeIcon icon={faUser} size="lg" />
                        <span className="ms-2">Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/packages">
                        <FontAwesomeIcon icon={faCubes} size="lg" />
                        <span className="ms-2">Packages</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/cafe">
                        <FontAwesomeIcon icon={faMugSaucer} size="lg" />
                        <span className="ms-2">Cafe</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/catering">
                        <FontAwesomeIcon icon={faUtensils} size="lg" />
                        <span className="ms-2">Catering</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/events">
                        <FontAwesomeIcon icon={faCalendarDays} size="lg" />
                        <span className="ms-2">Events</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/announcements">
                        <FontAwesomeIcon icon={faBullhorn} size="lg" />
                        <span className="ms-2">Announcements</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/benefits">
                        <FontAwesomeIcon icon={faFaceSmile} size="lg" />
                        <span className="ms-2">Benefits</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/messages">
                        <FontAwesomeIcon icon={faMessage} size="lg" />
                        <span className="ms-2">Messages</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                        to="/payment">
                        <FontAwesomeIcon icon={faWallet} size="lg" />
                        <span className="ms-2">Payment</span>
                    </NavLink>
                </li>
                <hr />
                <li>
                    <a className="align-items-center rounded collapsed ps-0 text-decoration-none text-dark dropdown-button"
                        data-bs-toggle="collapse" data-bs-target="#subscribed-services-collapse"
                        onClick={handleCaretRotate} aria-expanded="false">
                        <FontAwesomeIcon icon={faCaretDown} size="lg" rotation={270}
                            style={{ transform: rotate, transition: "all 0.35s linear" }} />
                        <span className="ms-2">Subscribed Services</span>
                    </a>
                    <div className="collapse" id="subscribed-services-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 my-2 ms-4 gap-2 d-flex row">
                            <li>
                                <NavLink
                                    className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                                    to="/virtual-office">
                                    <FontAwesomeIcon icon={faBriefcase} size="lg" />
                                    <span className="ms-2">Virtual Office</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                                    to="/coworking-space">
                                    <FontAwesomeIcon icon={faUserGroup} size="lg" />
                                    <span className="ms-2">Coworking Space</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                                    to="/meeting-room">
                                    <FontAwesomeIcon icon={faHandshake} size="lg" />
                                    <span className="ms-2">Meeting Room</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default UserPanelSidebar;
