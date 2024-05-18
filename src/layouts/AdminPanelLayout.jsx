import React from "react";
import AdminPanelHeader from "../components/layout-components/admin-layout-components/AdminPanelHeader";

const AdminPanelLayout = ({ children }) => {
    return (
        <div className="site-wrapper mx-auto">
            <AdminPanelHeader />
            <div className="container-fluid mx-auto min-vh-100 mt-4 admin-content-wrapper px-2 gx-0">
                {children}
            </div>
        </div>
    );
};

export default AdminPanelLayout;
