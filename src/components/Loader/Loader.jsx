import React from "react"
import CircularProgress from "@mui/material/CircularProgress"
import "./Loader.css"

const Loader = ({ text = "" }) => {
  return (
    <div className="loaderContainer">
      <CircularProgress />
      {text !== "" && <p dangerouslySetInnerHTML={{ __html: text }}></p>}
    </div>
  )
}

export default Loader
