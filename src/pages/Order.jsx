import React from "react"
import UserPanelLayout from "../layouts/UserPanelLayout";
import OrderLayout from "../layouts/OrderLayout";

const Order = () => {
    return (
        <UserPanelLayout>
            <div className="mx-0 px-md-2 px-3 mb-5 mt-2 row gx-0">
                <div className="col-sm-12 col-md-7 col-lg-8 col-xl-9 p-2">
                  <OrderLayout></OrderLayout>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-4 col-xl-3 p-2">
                </div>
            </div>
        </UserPanelLayout>
    );
};

export default Order;
