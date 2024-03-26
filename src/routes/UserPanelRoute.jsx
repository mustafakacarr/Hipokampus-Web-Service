import Cafe from "../pages/Cafe"
import Packages from "../pages/Packages"
import Catering from "../pages/Catering"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import PasswordRecovery from "../pages/PasswordRecovery"
import Payment from "../pages/Payment"
import Dashboard from "../pages/Dashboard"

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
    }
]

export default UserPanelRoute
