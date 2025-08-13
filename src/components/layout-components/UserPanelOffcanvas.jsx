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
    faFaceSmile,
    faLayerGroup,
    faHome,
    faTag
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faThreads, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { NavLink } from "react-router-dom";

const UserPanelOffcanvas = () => {
    return (
        <div className="user-panel-offcanvas offcanvas offcanvas-start"
            data-bs-scroll="true"
            data-bs-theme="dark"
            data-bs-backdrop="true"
            tabIndex="-1"
            id="userPanelOffcanvas"
            aria-labelledby="userPanelOffcanvas">
            <div className="offcanvas-header my-3">
                <a
                    href="/"
                    className="d-flex align-items-center me-md-auto text-decoration-none brand-logo"
                >
                    <img
                        src="src/assets/images/InWorkLogoAndTextLight.png"
                        width={160}
                        height={40}
                    />
                </a>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body border-top scrollbar-hidden mt-0">
                <ul className="nav nav-pills flex-column mb-auto gap-2 mt-3">
                    <li>
                        <NavLink
                            className={(navOption) => (navOption.isActive ? 'user-panel-offcanvas-active' : "user-panel-offcanvas-not-active")}
                            to="/dashboard">
                            <FontAwesomeIcon icon={faHome} size="lg" />
                            <span className="ms-2">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navOption) => (navOption.isActive ? 'user-panel-offcanvas-active' : "user-panel-offcanvas-not-active")}
                            to="/profile">
                            <FontAwesomeIcon icon={faUser} size="lg" />
                            <span className="ms-2">Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navOption) => (navOption.isActive ? 'user-panel-offcanvas-active' : "user-panel-offcanvas-not-active")}
                            to="/packages">
                            <FontAwesomeIcon icon={faCubes} size="lg" />
                            <span className="ms-2">Packages</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navOption) => (navOption.isActive ? 'user-panel-offcanvas-active' : "user-panel-offcanvas-not-active")}
                            to="/cafe">
                            <FontAwesomeIcon icon={faMugSaucer} size="lg" />
                            <span className="ms-2">Cafe</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navOption) => (navOption.isActive ? 'user-panel-offcanvas-active' : "user-panel-offcanvas-not-active")}
                            to="/catering">
                            <FontAwesomeIcon icon={faUtensils} size="lg" />
                            <span className="ms-2">Catering</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navOption) => (navOption.isActive ? 'user-panel-offcanvas-active' : "user-panel-offcanvas-not-active")}
                            to="/events">
                            <FontAwesomeIcon icon={faCalendarDays} size="lg" />
                            <span className="ms-2">Events</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navOption) => (navOption.isActive ? 'user-panel-offcanvas-active' : "user-panel-offcanvas-not-active")}
                            to="/announcements">
                            <FontAwesomeIcon icon={faBullhorn} size="lg" />
                            <span className="ms-2">Announcements</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navOption) =>
                                navOption.isActive
                                    ? "user-panel-offcanvas-active"
                                    : "user-panel-offcanvas-not-active"
                            }
                            to="/campaigns"
                        >
                            <FontAwesomeIcon icon={faTag} size="lg" />
                            <span className="ms-2">Campaigns</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navOption) => (navOption.isActive ? 'user-panel-offcanvas-active' : "user-panel-offcanvas-not-active")}
                            to="/benefits">
                            <FontAwesomeIcon icon={faFaceSmile} size="lg" />
                            <span className="ms-2">Benefits</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navOption) =>
                                navOption.isActive
                                    ? "user-panel-sidebar-active"
                                    : "user-panel-sidebar-not-active"
                            }
                            to="/subscriptions"
                        >
                            <FontAwesomeIcon icon={faLayerGroup} size="lg" />
                            <span className="ms-2">Subscriptions</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navOption) => (navOption.isActive ? 'user-panel-offcanvas-active' : "user-panel-offcanvas-not-active")}
                            to="/order">
                            <FontAwesomeIcon icon={faWallet} size="lg" />
                            <span className="ms-2">Order</span>
                        </NavLink>
                    </li>
                </ul>
                <hr className="mb-3 mt-5" />
                <div className="text-center py-4 mb-3">
                    <p style={{ color: "#a6a6a6" }}>© 2025 InWork Coworking Space</p>
                    <ul className="list-unstyled d-flex justify-content-center">
                        <li>
                            <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.facebook.com">
                                <FontAwesomeIcon icon={faFacebook} style={{ color: "#f2f2f2" }} size="xl" />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="http://www.twitter.com">
                                <FontAwesomeIcon icon={faXTwitter} style={{ color: "#f2f2f2" }} size="xl" />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.instagram.com">
                                <FontAwesomeIcon icon={faInstagram} style={{ color: "#f2f2f2" }} size="xl" />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.youtube.com">
                                <FontAwesomeIcon icon={faYoutube} style={{ color: "#f2f2f2" }} size="xl" />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.linkedin.com">
                                <FontAwesomeIcon icon={faLinkedin} style={{ color: "#f2f2f2" }} size="xl" />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.threads.net">
                                <FontAwesomeIcon icon={faThreads} style={{ color: "#f2f2f2" }} size="xl" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserPanelOffcanvas
