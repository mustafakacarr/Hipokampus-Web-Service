import React from "react";
import UserPanelOffcanvas from "./UserPanelOffcanvas";

const UserPanelNavbar = () => {
    return (
        <nav className="navbar bg-light border m-2 user-panel-border fixed-top">
            <div className="container-fluid">
                <div>
                    <a className="me-2" data-bs-toggle="offcanvas" href="#userPanelOffcanvas" role="button" aria-controls="userPanelOffcanvas">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </a>
                    <UserPanelOffcanvas />
                    <span className="navbar-brand h1 pt-1 align-middle">Hipokampus Web Service</span>
                </div>
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://hipokampus.com.tr/images/galeri/tr/fethiye-hipokampus-bahce-minik-ofis-zoom-kabini-verimli-toplantilar.webp" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>User</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end text-small shadow">
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#">Campaigns</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default UserPanelNavbar
