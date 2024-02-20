import React from "react";

const UserPanelNavbar = () => {
    return (
        <nav className="navbar bg-light border m-2 user-panel-border fixed-top">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Hipokampüs Web Service</span>
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
