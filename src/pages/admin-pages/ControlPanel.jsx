import React from "react";
import AdminPanelLayout from "../../layouts/AdminPanelLayout";
import AdminUserTable from "../../components/control-panel-components/control-panel-tables/AdminUserTable";

const ControlPanel = () => {
  return (
    <AdminPanelLayout>
        <AdminUserTable />
    </AdminPanelLayout>
  );
};

export default ControlPanel;
