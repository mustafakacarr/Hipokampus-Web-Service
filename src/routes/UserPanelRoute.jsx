import Cafe from "../pages/Cafe"
import Packages from "../pages/Packages"
import Catering from "../pages/Catering"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import PasswordRecovery from "../pages/PasswordRecovery"
import Payment from "../pages/Payment"
import Dashboard from "../pages/Dashboard"
import Events from "../pages/Events"
import Announcements from "../pages/Announcements"
import Benefits from "../pages/Benefits"
import Profile from "../pages/Profile"

const UserPanelRoute = [
    {
        path: "/",
        component: <SignIn />
    },
    {
        path: "/sign-up",
        component: <SignUp />
    },
    {
        path: "/dashboard",
        component: <Dashboard />
    },
    {
        path: "/password-recovery",
        component: <PasswordRecovery />
    },
    {
        path: "/cafe",
        component: <Cafe />
    },
    {
        path: "/packages",
        component: <Packages />
    },
    {
        path: "/catering",
        component: <Catering />
    },
    {
        path: "/payment",
        component: <Payment />
    },
    {
        path: "/events",
        component: <Events />
    },
    {
        path: "/profile",
        component: <Profile />
    },
    {
        path: "/announcements",
        component: <Announcements />
    },
    {
        path: "/benefits",
        component: <Benefits />
    }
]

export default UserPanelRoute
