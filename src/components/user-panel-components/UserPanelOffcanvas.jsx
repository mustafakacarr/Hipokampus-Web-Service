import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faLinkedin, faThreads, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { faBullhorn, faCubes, faMugSaucer, faUtensils, faWallet, faUser, faMessage, faFaceSmile } from "@fortawesome/free-solid-svg-icons"

const UserPanelOffcanvas = () => {
    return (
        <div className="offcanvas offcanvas-start border user-panel-offcanvas" tabIndex="-1" id="userPanelOffcanvas" aria-labelledby="userPanelOffcanvas">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="userPanelOffcanvasLabel">Hipokampus Web Service</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body border-top mt-2">
                <ul className="nav nav-pills flex-column mb-auto gap-3">
                    <li>
                        <a href="/profile" className="nav-link link-dark">
                            <FontAwesomeIcon icon={faUser} size="lg" style={{ color: "#000000" }} />
                            <span className="fw-bold ms-2 offcanvas-link">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="/packages" className="nav-link link-dark">
                            <FontAwesomeIcon icon={faCubes} size="lg" style={{ color: "#000000" }} />
                            <span className="fw-bold ms-2 offcanvas-link">Packages</span>
                        </a>
                    </li>
                    <li>
                        <a href="/cafe" className="nav-link link-dark">
                            <FontAwesomeIcon icon={faMugSaucer} size="lg" style={{ color: "#000000" }} />
                            <span className="fw-bold ms-2 offcanvas-link">Cafe</span>
                        </a>
                    </li>
                    <li>
                        <a href="/catering" className="nav-link link-dark">
                            <FontAwesomeIcon icon={faUtensils} size="lg" style={{ color: "#000000" }} />
                            <span className="fw-bold ms-2 offcanvas-link">Catering</span>
                        </a>
                    </li>
                    <li>
                        <a href="/events" className="nav-link link-dark">
                            <FontAwesomeIcon icon={faCalendarDays} size="lg" style={{ color: "#000000" }} />
                            <span className="fw-bold ms-2 offcanvas-link">Events</span>
                        </a>
                    </li>
                    <li>
                        <a href="/announcements" className="nav-link link-dark">
                            <FontAwesomeIcon icon={faBullhorn} size="lg" style={{ color: "#000000" }} />
                            <span className="fw-bold ms-2 offcanvas-link">Announcements</span>
                        </a>
                    </li>
                    <li>
                        <a href="/benefits" className="nav-link link-dark">
                            <FontAwesomeIcon icon={faFaceSmile} size="lg" style={{ color: "#000000" }} />
                            <span className="fw-bold ms-2 offcanvas-link">Benefits</span>
                        </a>
                    </li>
                    <li>
                        <a href="/messages" className="nav-link link-dark">
                            <FontAwesomeIcon icon={faMessage} size="lg" style={{ color: "#000000" }} />
                            <span className="fw-bold ms-2 offcanvas-link">Messages</span>
                        </a>
                    </li>
                    <li>
                        <a href="/payment" className="nav-link link-dark">
                            <FontAwesomeIcon icon={faWallet} size="lg" style={{ color: "#000000" }} />
                            <span className="fw-bold ms-2 offcanvas-link">Payment</span>
                        </a>
                    </li>
                    <li>
                        <div className="justify-content-between py-4 my-3 border-top">
                            <p>© 2024 Hipokampus Web Service</p>
                            <br />
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3">
                                    <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.facebook.com/hipokampuscoworking/">
                                        <FontAwesomeIcon icon={faFacebook} style={{ color: "#cf480a" }} size="2xl" />
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="http://www.twitter.com/hipokampusofis">
                                        <FontAwesomeIcon icon={faXTwitter} style={{ color: "#cf480a" }} size="2xl" />
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.instagram.com/hipokampuscoworking/">
                                        <FontAwesomeIcon icon={faInstagram} style={{ color: "#cf480a" }} size="2xl" />
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.youtube.com/channel/UCPLSgfXdoz16lRQn3-Lrd6A">
                                        <FontAwesomeIcon icon={faYoutube} style={{ color: "#cf480a" }} size="2xl" />
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.linkedin.com/company/hipokampus-coworking-space">
                                        <FontAwesomeIcon icon={faLinkedin} style={{ color: "#cf480a" }} size="2xl" />
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.threads.net/@hipokampuscoworking">
                                        <FontAwesomeIcon icon={faThreads} style={{ color: "#cf480a" }} size="2xl" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserPanelOffcanvas
