import React from "react"
import "./Header.css"
import Drawerr from "./Drawerr"
import Button from "../Button/Button"

const Header = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/">
          <p className="link">Watchlist</p>
        </a>
        <a href="/">
          <p className="link">Compare</p>
        </a>
        <a href="#">
          <Button
            text={"Dashboard"}
            outlined={true}
            onClick={() => {
              console.log("#")
            }}
          />
        </a>
      </div>
      <div className="mobileDrawer">
        <Drawerr />
      </div>
    </div>
  )
}

export default Header
