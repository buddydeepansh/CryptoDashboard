import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import DashboardPage from "./pages/DashboardPage"
import CoinPage from "./pages/CoinPage"
import ComparePage from "./pages/ComparePage"
import WatchListPage from "./pages/WatchListPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/dashboard"} element={<DashboardPage />} />
          <Route path={"/coin/:coinId"} element={<CoinPage />} />
          <Route path={"/compare"} element={<ComparePage />} />
          <Route path={"/watchlist"} element={<WatchListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
