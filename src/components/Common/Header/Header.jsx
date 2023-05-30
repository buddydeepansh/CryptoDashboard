import React from "react"
import "./Header.css"
import Drawerr from "./Drawerr"
import Button from "../Button/Button"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Link  to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/dashboard">
          <Button
            text={"Dashboard"}
            outlined={true}
            onClick={() => {
              console.log("#")
            }}
          />
        </Link>
      </div>
      <div className="mobileDrawer">
        <Drawerr />
      </div>
    </div>
  )
}

export default Header
