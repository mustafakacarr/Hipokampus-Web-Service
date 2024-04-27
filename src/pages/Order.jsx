import React, { useEffect } from "react";
import UserPanelLayout from "../layouts/UserPanelLayout";
import OrderLayout from "../layouts/OrderLayout";
import { useLocation, useNavigate } from "react-router-dom";
import OrderSteps from "../components/order-components/OrderSteps";

const Order = () => {
  const history = useNavigate();
  const location = useLocation();
  const steps = OrderSteps;
  useEffect(() => {
    if (location.pathname === "/order") {
      history(steps[0].path);
    } else {
    }
  }, [location.pathname, steps]);

  return <UserPanelLayout />;
};

export default Order;
