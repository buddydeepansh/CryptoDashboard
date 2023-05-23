import React, { useRef } from "react"
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded"
import "./BackTop.css"
const BackTop = () => {
  const scrollBTN = useRef(null)

  window.onscroll = function () {
    scrollFunction()
  }

  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBTN.current.style.display = "flex"
    } else {
      scrollBTN.current.style.display = "none"
    }
  }

  function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <div className="backToTopBtn" ref={scrollBTN} onClick={topFunction}>
      <ArrowUpwardRoundedIcon style={{ color: "var(--blue)" }} />
    </div>
  )
}

export default BackTop
