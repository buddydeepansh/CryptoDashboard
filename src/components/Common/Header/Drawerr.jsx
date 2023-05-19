import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import { IconButton } from "@mui/material"
import Drawer from "@mui/material/Drawer"
import React, { useState } from "react"

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
          <a href="/">
            <p className="link">Home</p>
          </a>
          <a href="/">
            <p className="link">Watchlist</p>
          </a>
          <a href="/">
            <p className="link">Compare</p>
          </a>
          <a href="/">
            <p className="link">Dashboard</p>
          </a>
        </div>
      </Drawer>
    </div>
  )
}

export default Drawerr
