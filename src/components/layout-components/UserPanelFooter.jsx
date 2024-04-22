import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faLinkedin, faThreads, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

const UserPanelFooter = () => {
    return (
        <footer>
            <div className="d-flex flex-column flex-sm-row justify-content-between py-2 align-items-center">
                <p>© 2024 Hipokampus Web Service</p>
                <ul className="list-unstyled d-flex">
                    <li className="ms-3">
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
        </footer>
    )
}

export default UserPanelFooter
