import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import UserPanelOffcanvas from "./UserPanelOffcanvas";
import { useDispatch } from "react-redux";
import { signUserOut } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const UserPanelNavbar = () => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const history = useNavigate();
  const handleLogout = () => {
    dispatch(signUserOut());
    history("/");
      console.log("🚀 ~ handleLogout ~ User logged out");
  };
  return (
    <nav
      className={
        width < 576 ? "navbar fixed-top bg-light p-3" : "navbar bg-light p-3"
      }
      style={{ borderBottom: "2px solid rgb(5, 5, 5, 0.1)" }}
    >
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">
          {width < 576 ? (
            <div>
              <a
                data-bs-toggle="offcanvas"
                aria-controls="userPanelOffcanvas"
                href="#userPanelOffcanvas"
                role="button"
                id="offcanvasButton"
                className="d-inline align-middle"
              >
                <FontAwesomeIcon icon={faBars} size="xl" />
              </a>
              <span className="align-items-center me-md-auto text-decoration-none brand-logo ms-3">
                <img
                  src="https://hipokampus.com.tr/images/favicon.ico"
                  width={30}
                  className="align-middle"
                />
              </span>
            </div>
          ) : null}
        </span>
        <UserPanelOffcanvas />
        <div className="d-flex justify-content-end align-items-center me-3">
          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center text-secondary text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://hipokampus.com.tr/images/galeri/tr/fethiye-hipokampus-bahce-minik-ofis-zoom-kabini-verimli-toplantilar.webp"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>User</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-end text-small shadow">
              <li>
                <a className="dropdown-item" href="/profile">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/campaigns">
                  Campaigns
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <button
            className="text-secondary ms-3 btn"
            onClick={() => handleLogout()}
          >
            <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default UserPanelNavbar;
