import iphone from "../../assets/iphone.png"
import gradient from "../../assets/gradient.png"
import React, { useState } from "react"
import Button from "../Common/Button/Button"
import { motion } from "framer-motion"
import "./Landing.css"
import { Link } from "react-router-dom"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Landing = () => {
  const [copied, setCopied] = useState(false)
  const handleShare = async () => {
    if (navigator.share) {
      // Share API is supported (mobile)
      try {
        await navigator.share({
          title: "Crpto Dashboard",
          text: "Check out this amazing Crypto dashboard demo page.",
          url: "https://crypto-dashboard-demo.netlify.app/",
        })
      } catch (error) {
        console.error("Error sharing:", error)
      }
    } else {
      await navigator.clipboard.writeText("https://crypto-dashboard-demo.netlify.app/") // Replace with your link
      setCopied(true)
    }
  }
  const handleSnackBarClose = async () => {
    setCopied(false)
  }
  return (
    <div className={"flexInfo"}>
      <div className="leftComponent">
        <motion.h1 className="trackCryptoHeading" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Track Crypto
        </motion.h1>
        <motion.h1 className="realTimeHeading" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          Real Time
        </motion.h1>
        <motion.p className="infoText" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }}>
          Track crypto through a public api in real time. Visit the dashboard to do so!
        </motion.p>
        <motion.div className="btnFlex" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.5 }}>
          <Link to="/dashboard">
            <Button
              text={"Dashboard"}
              onClick={() => {
                console.log("#")
              }}
            />
          </Link>
          <Button
            text={"Share"}
            outlined={true}
            onClick={() => {
              handleShare()
            }}
          />
        </motion.div>
      </div>
      <div className="phoneContainer">
        <img src={gradient} alt="gradient" className="gradientimg" />
        <motion.img src={iphone} alt="iphone" className="iphoneimg" initial={{ y: -10 }} animate={{ y: 10 }} transition={{ type: "smooth", repeatType: "mirror", duration: 1.5, repeat: Infinity }} />
      </div>
      <Snackbar open={copied} autoHideDuration={6000} onClose={handleSnackBarClose}>
        <Alert onClose={handleSnackBarClose} severity="success" sx={{ width: "100%" }}>
          Link copied to clipboard!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Landing
