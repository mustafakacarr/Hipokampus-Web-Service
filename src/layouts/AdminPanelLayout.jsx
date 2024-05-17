import React from "react";
import AdminPanelHeader from "../components/layout-components/admin-layout-components/AdminPanelHeader";

const AdminPanelLayout = ({ children }) => {
    return (
        <div className="site-wrapper mx-auto">
            <AdminPanelHeader />
            <div className="container-fluid mx-auto min-vh-100 mt-3 admin-content-wrapper">
                {children}
            </div>
        </div>
    );
};

export default AdminPanelLayout;
