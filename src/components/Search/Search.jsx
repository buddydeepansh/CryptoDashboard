import React, { useState } from "react"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
import "./Search.css"
const Search = ({ search, onSearchChange }) => {
  return (
    <div className="searchFlex">
      <SearchRoundedIcon />
      <input placeholder="Search" value={search} onChange={(e) => onSearchChange(e)} />
    </div>
  )
}

export default Search
