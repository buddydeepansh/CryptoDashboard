import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import { IconButton } from "@mui/material"
import Drawer from "@mui/material/Drawer"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const Drawerr = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <IconButton
        onClick={() => {
          setOpen(true)
        }}
      >
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => {
          setOpen(false)
        }}
      >
        <div className="drawerDiv">
          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/watchlist">
            <p className="link">Watchlist</p>
          </Link>
          <Link to="/compare">
            <p className="link">Compare</p>
          </Link>
          <Link to="/dashboard">
            <p className="link">Dashboard</p>
          </Link>
        </div>
      </Drawer>
    </div>
  )
}

export default Drawerr
