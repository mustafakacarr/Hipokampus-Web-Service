import React from "react";
import UserPanelHeader from "../components/layout-components/UserPanelHeader";
import UserPanelFooter from "../components/layout-components/UserPanelFooter";
import UserPanelSidebar from "../components/layout-components/UserPanelSidebar";
import useWindowSize from "../hooks/useWindowSize";

const UserPanelLayout = ({ children }) => {

  const { width } = useWindowSize()

  return (
    <div className="site-wrapper mx-auto">
      <div className="row g-0">
        <UserPanelHeader />
        <div
          className="col-sm-4 col-md-3 col-xl-2 h-100 scrollbar-hidden"
          style={
            width >= 576
              ? {
                position: "fixed",
                overflowY: "scroll",
                borderRight: "1px solid rgb(5, 5, 5, 0.1)",
                maxWidth: "270px",
                backgroundColor: "#212631",
                zIndex: 100
              }
              : {}
          }
        >
          <UserPanelSidebar />
        </div>
        <div
          className="col-sm-8 col-md-9 col-xl-10 offset-sm-4 offset-md-3 offset-xl-2"
        >
          {width < 576 ? <div style={{ marginTop: "95px" }}></div> : <br />}
          <div className="user-content-wrapper container-fluid mx-auto min-vh-100">
            {children}
          </div>
          <div
            className="container-fluid"
            style={
              width >= 576
                ? {
                  paddingLeft: "40px",
                  paddingRight: "70px"
                }
                : {} }>
            <hr />
            <UserPanelFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanelLayout;
