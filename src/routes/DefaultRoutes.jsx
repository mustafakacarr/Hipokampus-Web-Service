import PageNotFound from "../pages/PageNotFound";
import PasswordRecovery from "../pages/PasswordRecovery";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

var DefaultRoutes = [
  {
    path: "/",
    component: <SignIn />,
  },
  {
    path: "/sign-up",
    component: <SignUp />,
  },
  {
    path: "/password-recovery",
    component: <PasswordRecovery />,
  },
  {
    path: "*",
    component: <PageNotFound />,
  },
];
export default DefaultRoutes;