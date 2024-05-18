import React from "react";

const AdminPanelNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <span className="navbar-brand">Hipokampus Control Panel</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#adminNavbarDropdown" aria-controls="adminNavbarDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="adminNavbarDropdown">
                    <ul className="navbar-nav w-100">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Users</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Orders</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Packages</a></li>
                                <li><a className="dropdown-item" href="#">Cafe</a></li>
                                <li><a className="dropdown-item" href="#">Catering</a></li>
                                <li><a className="dropdown-item" href="#">Events</a></li>
                                <li><a className="dropdown-item" href="#">Messages</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Subscribed Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Meeting Room</a></li>
                                <li><a className="dropdown-item" href="#">Virtual Office</a></li>
                                <li><a className="dropdown-item" href="#">Coworking Space</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Information
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Announcements</a></li>
                                <li><a className="dropdown-item" href="#">Campaigns</a></li>
                                <li><a className="dropdown-item" href="#">Benefits</a></li>
                            </ul>
                        </li>
                        <li className="nav-item ms-lg-auto">
                            <button className="btn btn-outline-light" href="#">Sign Out</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default AdminPanelNavbar
