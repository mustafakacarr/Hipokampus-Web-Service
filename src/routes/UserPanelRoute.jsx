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
import VirtualOffice from "../pages/VirtualOffice";
import CoworkingSpace from "../pages/CoworkingSpace";
import MeetingRoom from "../pages/MeetingRoom";
import PageNotFound from "../pages/PageNotFound";

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
    path: "/virtual-office",
    component: <VirtualOffice />,
  },
  {
    path: "/coworking-space",
    component: <CoworkingSpace />,
  },
  {
    path: "/meeting-room",
    component: <MeetingRoom />,
  },
  {
    path: "*",
    component: <PageNotFound />,
  },
];


export default UserPanelRoute;
