import Cafe from "../pages/Cafe"
import Packages from "../pages/Packages"
import Catering from "../pages/Catering"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import PasswordRecovery from "../pages/PasswordRecovery"

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
    }
]

export default UserPanelRoute
