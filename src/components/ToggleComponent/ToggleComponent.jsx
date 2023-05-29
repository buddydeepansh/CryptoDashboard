import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import React, { useState } from "react"
import "./ToggleComponent.css"

export default function ToggleComponent({ alignment, handleToggle }) {
  return (
    <div className="toggleDiv">
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleToggle}
        sx={{
          "&.Mui-selected": {
            color: "var(--blue) !important",
          },
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--blue)",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--blue)",
          },
        }}
      >
        <ToggleButton value="prices" className="toggleBtn">
          Price
        </ToggleButton>
        <ToggleButton value="total_volumes" className="toggleBtn">
          Total Volume
        </ToggleButton>
        <ToggleButton value="market_caps" className="toggleBtn">
          Market Cap
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
