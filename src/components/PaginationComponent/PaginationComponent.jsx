import Pagination from "@mui/material/Pagination"
import React, { useState } from "react"
import "./PaginationComponent.css"

const PaginationComponent = ({ page, handlePageChange }) => {
  return (
    <div className="PaginationComponent">
      {" "}
      <Pagination count={10} page={page} onChange={(e, v) => handlePageChange(e, v)} />
    </div>
  )
}

export default PaginationComponent
