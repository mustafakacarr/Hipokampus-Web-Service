import Cafe from "../pages/Cafe";
import Packages from "../pages/Packages";
import Catering from "../pages/Catering";
import Dashboard from "../pages/Dashboard";
import Events from "../pages/Events";
import Announcements from "../pages/Announcements";
import Benefits from "../pages/Benefits";
import Profile from "../pages/Profile";
import Campaigns from "../pages/Campaigns";
import OrderHistory from "../pages/OrderHistory";
import MyTickets from "../pages/MyTickets";
import Order from "../pages/Order";
import PageNotFound from "../pages/PageNotFound";
import Subscriptions from "../pages/Subscriptions";

var UserPanelRoute = [
  {
    path: "/dashboard",
    component: <Dashboard />,
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
  {
    path: "/subscriptions",
    component: <Subscriptions />,
  },
  {
    path: "*",
    component: <PageNotFound />,
  },
];


export default UserPanelRoute;
