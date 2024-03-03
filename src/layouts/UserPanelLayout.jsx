import React from "react";
import UserPanelHeader from "../components/user-panel-components/UserPanelHeader";
import UserPanelFooter from "../components/user-panel-components/UserPanelFooter";
import UserPanelSidebar from "../components/user-panel-components/UserPanelSidebar";

const UserPanelLayout = ({ children }) => {
  return (
    <div className="user-panel-main mx-auto">
      <div className="row g-0">
        <div className="col-sm-4 col-md-3 col-xl-2">
          <UserPanelSidebar />
        </div>
        <div className="col-sm-8 col-md-9 col-xl-10">
          <UserPanelHeader />
          <br />
          {children}
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
