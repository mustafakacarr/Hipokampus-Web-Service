import UserPanelLayout from "../layouts/UserPanelLayout"
import Cafe from "../pages/Cafe"

const UserPanelRoute = [
    {
        path : "/",
        component : <UserPanelLayout />
    },
    {
        path: "/cafe",
        component : <Cafe />
    }
]

export default UserPanelRoute
