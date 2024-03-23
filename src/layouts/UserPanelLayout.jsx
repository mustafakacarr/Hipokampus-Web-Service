import React from "react";
import UserPanelHeader from "../components/user-panel-components/UserPanelHeader";
import UserPanelFooter from "../components/user-panel-components/UserPanelFooter";
import UserPanelSidebar from "../components/user-panel-components/UserPanelSidebar";
import useWindowSize from "../hooks/useWindowSize";

const UserPanelLayout = ({ children }) => {

  const { width } = useWindowSize()

  return (
    <div className="user-panel-wrapper mx-auto">
      <div className="row g-0">
        <div className="col-sm-4 col-md-3 col-xl-2 h-100"
          style={(width > 576) ? { position: "fixed", overflowY: "scroll", borderRight: "2px solid rgb(5, 5, 5, 0.1)" } : {}}
        >
          <UserPanelSidebar />
        </div>
        <div className="col-sm-8 col-md-9 col-xl-10 offset-sm-4 offset-md-3 offset-xl-2 user-panel-main">
          <UserPanelHeader />
          {(width < 576) ? <div style={{ marginTop: "85px" }}></div> : <br />}
          <div className="user-panel-content mx-auto">
            {children}
          </div>
          <div className="container-fluid">
            <hr />
            <UserPanelFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanelLayout;
