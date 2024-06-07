import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import UserPanelRoute from './routes/UserPanelRoute'
import OrderRoutes from './routes/OrderRoutes'
import { Provider, useSelector } from 'react-redux'
import DefaultRoutes from './routes/DefaultRoutes'
function App() {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {UserPanelRoute.map((route) => (
            <Route
              key={crypto.randomUUID()}
              path={route.path}
              element={route.component}
            />
          ))}
          {DefaultRoutes.map((route) => (
            <Route
              key={crypto.randomUUID()}
              path={route.path}
              element={route.component}
            />
          ))}
          {OrderRoutes.map((route) => (
            <Route
              key={crypto.randomUUID()}
              path={route.path}
              element={route.component}
            />
          ))}
          <Route path="*" element={<Navigate to={"*"} />} />
          {user != null ? (
            <Route path="/" element={<Navigate to={"/dashboard"} />} />
          ) : (
            ""
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
