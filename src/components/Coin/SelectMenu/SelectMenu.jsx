import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import React, { useState } from "react"
import "./SelectMenu.css"

const SelectMenu = ({ days, handleChange }) => {
  return (
    <div className="selectMenu">
      <p className="selectText">Price Change in</p>
      <Select
        labelId="daysLabel"
        id="daysSelect"
        value={days}
        label="Days"
        onChange={(e) => {
          handleChange(e)
        }}
        displayEmpty
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "var(--blue)",
            },
          },
        }}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={14}>14 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  )
}
export default SelectMenu
