import Cafe from "../pages/Cafe";
import Packages from "../pages/Packages";
import Catering from "../pages/Catering";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PasswordRecovery from "../pages/PasswordRecovery";
import Payment from "../pages/Order";
import Dashboard from "../pages/Dashboard";
import Events from "../pages/Events";
import Announcements from "../pages/Announcements";
import Benefits from "../pages/Benefits";
import Profile from "../pages/Profile";
import Campaigns from "../pages/Campaigns";
import OrderHistory from "../pages/OrderHistory";
import MyTickets from "../pages/MyTickets";
import Order from "../pages/Order";

const UserPanelRoute = [
  {
    path: "/",
    component: <SignIn />,
  },
  {
    path: "/sign-up",
    component: <SignUp />,
  },
  {
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    path: "/password-recovery",
    component: <PasswordRecovery />,
  },
  {
    path: "/cafe",
    component: <Cafe />,
  },
  {
    path: "/packages",
    component: <Packages />,
  },
  {
    path: "/catering",
    component: <Catering />,
  },

  {
    path: "/events",
    component: <Events />,
  },
  {
    path: "/profile",
    component: <Profile />,
  },
  {
    path: "/announcements",
    component: <Announcements />,
  },
  {
    path: "/benefits",
    component: <Benefits />,
  },
  {
    path: "/campaigns",
    component: <Campaigns />,
  },
  {
    path: "/my-tickets",
    component: <MyTickets />,
  },
  {
    path: "/order-history",
    component: <OrderHistory />,
  },
  {
    path: "/order",
    component: <Order />,
  },
];

export default UserPanelRoute;
