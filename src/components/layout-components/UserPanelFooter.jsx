import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faLinkedin, faThreads, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

const UserPanelFooter = () => {
    return (
        <footer>
            <div className="d-flex flex-column flex-sm-row justify-content-between py-2 align-items-center">
                <p>© 2025 InWork Coworking Space</p>
                <ul className="list-unstyled d-flex">
                    <li className="ms-3">
                        <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.facebook.com">
                            <FontAwesomeIcon icon={faFacebook} style={{ color: "#1e03a8" }} size="xl" />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="http://www.twitter.com">
                            <FontAwesomeIcon icon={faXTwitter} style={{ color: "#1e03a8" }} size="xl" />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.instagram.com">
                            <FontAwesomeIcon icon={faInstagram} style={{ color: "#1e03a8" }} size="xl" />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.youtube.com">
                            <FontAwesomeIcon icon={faYoutube} style={{ color: "#1e03a8" }} size="xl" />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.linkedin.com">
                            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#1e03a8" }} size="xl" />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a rel="noopener noreferrer nofollow" target="_blank" className="link-dark" href="https://www.threads.net">
                            <FontAwesomeIcon icon={faThreads} style={{ color: "#1e03a8" }} size="xl" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default UserPanelFooter
