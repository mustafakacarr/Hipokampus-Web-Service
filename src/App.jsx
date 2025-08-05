import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import UserPanelRoute from "./routes/UserPanelRoute";
import DefaultRoutes from "./routes/DefaultRoutes";

function App() {
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
    {/*       {OrderRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))} */}
          
          {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}

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
