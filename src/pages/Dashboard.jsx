import React from "react";
import UserPanelLayout from "../layouts/UserPanelLayout";

const Dashboard = () => {
  return (
    <UserPanelLayout>
      <div>
        this page will be dashboard page that consists of some statistical and
        informative data about user. F.e it could be contain active service
        counts etc. and maybe order history table...
      </div>
    </UserPanelLayout>
  );
};

export default Dashboard;
