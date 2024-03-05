import UserPanelLayout from "../layouts/UserPanelLayout"
import Cafe from "../pages/Cafe"
import Packages from "../pages/Packages"
import Catering from "../pages/Catering"
import SignIn from "../pages/SignIn"

const UserPanelRoute = [
    {
        path: "/",
        component: <SignIn />
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
