import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import UserPanelRoute from "./routes/UserPanelRoute";
import OrderRoutes from "./routes/OrderRoutes";
import DefaultRoutes from "./routes/DefaultRoutes";
import { Provider, useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {UserPanelRoute.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
          {OrderRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
          <Route path="/" element={<Navigate to="/dashboard" />} />

          {DefaultRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}

          <Route path="*" element={<Navigate to="*" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
