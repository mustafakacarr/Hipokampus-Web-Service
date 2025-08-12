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
                  src="src/assets/images/InWorkLogo.png"
                  width={30}
                  className="align-middle"
                />
              </span>
            </div>
          ) : null}
        </span>
        <UserPanelOffcanvas />
        <div className="d-flex justify-content-end align-items-center">
          <button
            className="btn btn-outline-dark rounded-pill px-4"
            style={{border: "2px solid var(--bs-dark)"}}
            onClick={() => handleLogout()}
          >
            <FontAwesomeIcon icon={faRightFromBracket} size="xl" />
            <span className="fw-bold h6 ms-2">Sign out</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default UserPanelNavbar;
