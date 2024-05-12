import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import UserPanelRoute from './routes/UserPanelRoute'
import OrderRoutes from './routes/OrderRoutes'
import { Provider } from 'react-redux'
import { store } from "./app/store"

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {UserPanelRoute.map((route) => (
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
            <Route path='*' element={<Navigate to={"*"} />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App
