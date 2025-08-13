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
    faHome,
    faTag,
    faLayerGroup
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";

const UserPanelSidebar = () => {
    const { width } = useWindowSize()

    return width < 576 ? null : (
        <div
            className="d-flex flex-column flex-shrink-0 px-3 pb-3 h-100 my-2"
            style={{ minHeight: "600px", paddingTop: "16px" }}
        >
            <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-2 me-md-auto text-decoration-none brand-logo"
            >
                <img
                    src="src/assets/images/InWorkLogoAndTextLight.png"
                    style={{ width: "75%", maxWidth: "220px", maxHeight: "50px" }}
                />
            </a>
            <ul className="nav nav-pills flex-column mb-auto gap-2 mt-4">
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "user-panel-sidebar-active"
                                : "user-panel-sidebar-not-active"
                        }
                        to="/dashboard"
                    >
                        <FontAwesomeIcon icon={faHome} size="lg" />
                        <span className="ms-2">Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "user-panel-sidebar-active"
                                : "user-panel-sidebar-not-active"
                        }
                        to="/profile"
                    >
                        <FontAwesomeIcon icon={faUser} size="lg" />
                        <span className="ms-2">Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "user-panel-sidebar-active"
                                : "user-panel-sidebar-not-active"
                        }
                        to="/packages"
                    >
                        <FontAwesomeIcon icon={faCubes} size="lg" />
                        <span className="ms-2">Packages</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "user-panel-sidebar-active"
                                : "user-panel-sidebar-not-active"
                        }
                        to="/cafe"
                    >
                        <FontAwesomeIcon icon={faMugSaucer} size="lg" />
                        <span className="ms-2">Cafe</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "user-panel-sidebar-active"
                                : "user-panel-sidebar-not-active"
                        }
                        to="/catering"
                    >
                        <FontAwesomeIcon icon={faUtensils} size="lg" />
                        <span className="ms-2">Catering</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "user-panel-sidebar-active"
                                : "user-panel-sidebar-not-active"
                        }
                        to="/events"
                    >
                        <FontAwesomeIcon icon={faCalendarDays} size="lg" />
                        <span className="ms-2">Events</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "user-panel-sidebar-active"
                                : "user-panel-sidebar-not-active"
                        }
                        to="/announcements"
                    >
                        <FontAwesomeIcon icon={faBullhorn} size="lg" />
                        <span className="ms-2">Announcements</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "user-panel-sidebar-active"
                                : "user-panel-sidebar-not-active"
                        }
                        to="/campaigns"
                    >
                        <FontAwesomeIcon icon={faTag} size="lg" />
                        <span className="ms-2">Campaigns</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "user-panel-sidebar-active"
                                : "user-panel-sidebar-not-active"
                        }
                        to="/benefits"
                    >
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
                        className={(navOption) =>
                            navOption.isActive
                                ? "user-panel-sidebar-active"
                                : "user-panel-sidebar-not-active"
                        }
                        to="/order"
                    >
                        <FontAwesomeIcon icon={faWallet} size="lg" />
                        <span className="ms-2">Order</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default UserPanelSidebar;
