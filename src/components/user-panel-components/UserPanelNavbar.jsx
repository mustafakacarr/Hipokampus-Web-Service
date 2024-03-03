import React from "react";
import UserPanelOffcanvas from "./UserPanelOffcanvas";

const UserPanelNavbar = () => {
    return (
        <nav className="navbar bg-dark p-2">
            <div className="container-fluid">
                <span className="navbar-brand fw-bold"></span>
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
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
