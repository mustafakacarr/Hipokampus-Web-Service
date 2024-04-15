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
    faHandshake,
    faHome
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faThreads, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { NavLink } from "react-router-dom";

const UserPanelOffcanvas = () => {

    const [rotateCaret, setRotateCaret] = useState("false")
    const handleCaretRotate = () => setRotateCaret(!rotateCaret)
    const rotate = rotateCaret ? "rotate(-90deg)" : "rotate(0)"

    return (
        <div className="offcanvas offcanvas-start border" data-bs-scroll="true"
            data-bs-backdrop="true" tabIndex="-1" id="userPanelOffcanvas" aria-labelledby="userPanelOffcanvas">
            <div className="offcanvas-header">
                <a
                    href="/"
                    className="d-flex align-items-center me-md-auto text-decoration-none brand-logo"
                >
                    <img
                        src="https://hipokampus.com.tr/images/logo-228x48.webp"
                        width={220}
                    />
                </a>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body border-top mt-2">
                <ul className="nav nav-pills flex-column mb-auto gap-4 mt-2">
                    <li>
                        <NavLink
                            className={(navOption) => (navOption.isActive ? 'user-panel-sidebar-active' : "user-panel-sidebar-not-active")}
                            to="/dashboard">
                            <FontAwesomeIcon icon={faHome} size="lg" />
                            <span className="ms-2">Dashboard</span>
                        </NavLink>
                    </li>
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
                <hr className="mb-3 mt-5" />
                <div className="text-center py-4 mb-3">
                    <p>© 2024 Hipokampus Web Service</p>
                    <ul className="list-unstyled d-flex justify-content-center">
                        <li>
                            <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.facebook.com/hipokampuscoworking/">
                                <FontAwesomeIcon icon={faFacebook} style={{ color: "#cf480a" }} size="xl" />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="http://www.twitter.com/hipokampusofis">
                                <FontAwesomeIcon icon={faXTwitter} style={{ color: "#cf480a" }} size="xl" />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.instagram.com/hipokampuscoworking/">
                                <FontAwesomeIcon icon={faInstagram} style={{ color: "#cf480a" }} size="xl" />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.youtube.com/channel/UCPLSgfXdoz16lRQn3-Lrd6A">
                                <FontAwesomeIcon icon={faYoutube} style={{ color: "#cf480a" }} size="xl" />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.linkedin.com/company/hipokampus-coworking-space">
                                <FontAwesomeIcon icon={faLinkedin} style={{ color: "#cf480a" }} size="xl" />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.threads.net/@hipokampuscoworking">
                                <FontAwesomeIcon icon={faThreads} style={{ color: "#cf480a" }} size="xl" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserPanelOffcanvas
