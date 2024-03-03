import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { faBullhorn, faCubes, faMugSaucer, faUtensils, faWallet, faUser, faMessage, faFaceSmile } from "@fortawesome/free-solid-svg-icons"

const UserPanelSidebar = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light border rounded sticky-top">
            <ul className="nav nav-pills flex-column mb-auto gap-4">
                <li>
                    <a href="/profile" className="nav-link link-dark ms-0 ps-0">
                        <FontAwesomeIcon icon={faUser} size="lg" style={{ color: "#000000" }} />
                        <span className="fw-bold ms-2 offcanvas-link">Profile</span>
                    </a>
                </li>
                <li>
                    <a href="/packages" className="nav-link link-dark ms-0 ps-0">
                        <FontAwesomeIcon icon={faCubes} size="lg" style={{ color: "#000000" }} />
                        <span className="fw-bold ms-2 offcanvas-link">Packages</span>
                    </a>
                </li>
                <li>
                    <a href="/cafe" className="nav-link link-dark ms-0 ps-0">
                        <FontAwesomeIcon icon={faMugSaucer} size="lg" style={{ color: "#000000" }} />
                        <span className="fw-bold ms-2 offcanvas-link">Cafe</span>
                    </a>
                </li>
                <li>
                    <a href="/catering" className="nav-link link-dark ms-0 ps-0">
                        <FontAwesomeIcon icon={faUtensils} size="lg" style={{ color: "#000000" }} />
                        <span className="fw-bold ms-2 offcanvas-link">Catering</span>
                    </a>
                </li>
                <li>
                    <a href="/events" className="nav-link link-dark ms-0 ps-0">
                        <FontAwesomeIcon icon={faCalendarDays} size="lg" style={{ color: "#000000" }} />
                        <span className="fw-bold ms-2 offcanvas-link">Events</span>
                    </a>
                </li>
                <li>
                    <a href="/announcements" className="nav-link link-dark ms-0 ps-0">
                        <nobr>
                            <FontAwesomeIcon icon={faBullhorn} size="lg" style={{ color: "#000000" }} />
                            <span className="fw-bold ms-2 offcanvas-link">Announcements</span>
                        </nobr>
                    </a>
                </li>
                <li>
                    <a href="/benefits" className="nav-link link-dark ms-0 ps-0">
                        <FontAwesomeIcon icon={faFaceSmile} size="lg" style={{ color: "#000000" }} />
                        <span className="fw-bold ms-2 offcanvas-link">Benefits</span>
                    </a>
                </li>
                <li>
                    <a href="/messages" className="nav-link link-dark ms-0 ps-0">
                        <FontAwesomeIcon icon={faMessage} size="lg" style={{ color: "#000000" }} />
                        <span className="fw-bold ms-2 offcanvas-link">Messages</span>
                    </a>
                </li>
                <li>
                    <a href="/payment" className="nav-link link-dark ms-0 ps-0">
                        <FontAwesomeIcon icon={faWallet} size="lg" style={{ color: "#000000" }} />
                        <span className="fw-bold ms-2 offcanvas-link">Payment</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default UserPanelSidebar
