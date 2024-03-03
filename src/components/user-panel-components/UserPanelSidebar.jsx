import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faHome,
  faBullhorn,
  faCubes,
  faMugSaucer,
  faUtensils,
  faWallet,
  faUser,
  faMessage,
  faFaceSmile,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100"
      style={{  minHeight: " 600px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <img
          src="https://hipokampus.com.tr/images/logo-228x48.webp"
          width={220}
        />
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            <FontAwesomeIcon icon={faHome} className="me-2" />
            Home
          </a>
        </li>
        <li>
          <a href="/profile" className="nav-link text-white ms-0 ps-0">
            <FontAwesomeIcon icon={faUser} size="lg" />
            <span className=" ms-2 offcanvas-link">Profile</span>
          </a>
        </li>
        <li>
          <a href="/packages" className="nav-link text-white ms-0 ps-0">
            <FontAwesomeIcon icon={faCubes} size="lg" />
            <span className=" ms-2 offcanvas-link">Packages</span>
          </a>
        </li>
        <li>
          <a href="/cafe" className="nav-link text-white ms-0 ps-0">
            <FontAwesomeIcon icon={faMugSaucer} size="lg" />
            <span className=" ms-2 offcanvas-link">Cafe</span>
          </a>
        </li>
        <li>
          <a href="/catering" className="nav-link text-white ms-0 ps-0">
            <FontAwesomeIcon icon={faUtensils} size="lg" />
            <span className=" ms-2 offcanvas-link">Catering</span>
          </a>
        </li>
        <li>
          <a href="/events" className="nav-link text-white ms-0 ps-0">
            <FontAwesomeIcon icon={faCalendarDays} size="lg" />
            <span className=" ms-2 offcanvas-link">Events</span>
          </a>
        </li>{" "}
        <li>
          <a href="/announcements" className="nav-link text-white ms-0 ps-0">
            <nobr>
              <FontAwesomeIcon icon={faBullhorn} size="lg" />
              <span className=" ms-2 offcanvas-link">Announcements</span>
            </nobr>
          </a>
        </li>
        <li>
          <a href="/benefits" className="nav-link text-white ms-0 ps-0">
            <FontAwesomeIcon icon={faFaceSmile} size="lg" />
            <span className=" ms-2 offcanvas-link">Benefits</span>
          </a>
        </li>
        <li>
          <a href="/messages" className="nav-link text-white ms-0 ps-0">
            <FontAwesomeIcon icon={faMessage} size="lg" />
            <span className=" ms-2 offcanvas-link">Messages</span>
          </a>
        </li>
        <li>
          <a href="/payment" className="nav-link text-white ms-0 ps-0">
            <FontAwesomeIcon icon={faWallet} size="lg" />
            <span className=" ms-2 offcanvas-link">Payment</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle text-white"
            id="dropdownUser1"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>HipoEmre</strong>
            <FontAwesomeIcon icon={faCaretDown} className="ms-2" />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow my-2 "
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
