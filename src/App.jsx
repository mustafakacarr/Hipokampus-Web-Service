import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserPanelRoute from './routes/UserPanelRoute'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {UserPanelRoute.map((route) => (
                        <Route key={crypto.randomUUID()} path={route.path} element={route.component} />
                    ))}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
