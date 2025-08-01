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
    faCaretDown,
    faBriefcase,
    faUserGroup,
    faHandshake,
    faHome,
    faTag,
    faClover
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import { useSelector } from "react-redux";

const UserPanelSidebar = () => {

    const [rotateCaret, setRotateCaret] = useState("false")
    const handleCaretRotate = () => setRotateCaret(!rotateCaret)
    const rotate = rotateCaret ? "rotate(-90deg)" : "rotate(0)"

    const { width } = useWindowSize()

    let user = useSelector((state) => state.user.userInfo)

    return width < 576 ? null : (
        <div
            className="d-flex flex-column flex-shrink-0 px-3 pb-3 h-100 my-2"
            style={{ minHeight: "600px", paddingTop: "16px" }}
        >
            <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none brand-logo"
            >
                <img
                    src="src/assets/images/InWorkLogoAndText.png"
                    style={{ width: "75%", maxWidth: "220px", maxHeight: "50px" }}
                />
            </a>
            <label className="fs-5 fw-bold sidebar-welcome py-3 mt-4">
                <FontAwesomeIcon icon={faClover} size="lg" className="me-2" />Welcome, {user.username}!
            </label>
            <ul className="nav nav-pills flex-column mb-auto gap-4 mt-4">
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
                        to="/order"
                    >
                        <FontAwesomeIcon icon={faWallet} size="lg" />
                        <span className="ms-2">Order</span>
                    </NavLink>
                </li>
                <li className="mt-3 mb-4">
                    <a
                        className="align-items-center rounded collapsed ps-0 text-decoration-none text-dark dropdown-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#subscribed-services-collapse"
                        onClick={handleCaretRotate}
                        aria-expanded="false"
                    >
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            size="xl"
                            rotation={270}
                            style={{ transform: rotate, transition: "all 0.35s linear" }}
                            color="#1e03a8"
                        />
                        <span className="ms-2 subscribed-services-text text-dark">
                            Subscribed Services
                        </span>
                    </a>
                    <div className="collapse" id="subscribed-services-collapse">
                        <ul className="btn-toggle-nav list-unstyled sidebar-subscribed-services mt-3 pb-1 my-2 ms-4 gap-3 d-flex row">
                            <li>
                                <NavLink
                                    className={(navOption) =>
                                        navOption.isActive
                                            ? "user-panel-sidebar-active"
                                            : "user-panel-sidebar-not-active"
                                    }
                                    to="/virtual-office"
                                >
                                    <FontAwesomeIcon icon={faBriefcase} size="lg" />
                                    <span className="ms-2">Virtual Office</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={(navOption) =>
                                        navOption.isActive
                                            ? "user-panel-sidebar-active"
                                            : "user-panel-sidebar-not-active"
                                    }
                                    to="/coworking-space"
                                >
                                    <FontAwesomeIcon
                                        icon={faUserGroup}
                                        size="lg"
                                    />
                                    <span className="ms-2">Coworking Space</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={(navOption) =>
                                        navOption.isActive
                                            ? "user-panel-sidebar-active"
                                            : "user-panel-sidebar-not-active"
                                    }
                                    to="/meeting-room"
                                >
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
