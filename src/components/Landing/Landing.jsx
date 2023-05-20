import iphone from "../../assets/iphone.png"
import gradient from "../../assets/gradient.png"
import React from "react"
import Button from "../Common/Button/Button"
import "./Landing.css"

const Landing = () => {
  return (
    <div className={"flexInfo"}>
      <div className="leftComponent">
        <h1 className="trackCryptoHeading">Track Crypto</h1>
        <h1 className="realTimeHeading">Real Time</h1>
        <p className="infoText">Track crypto through a public api in real time. Visit the dashboard to do so!</p>
        <div className="btnFlex">
          <Button text={"Dashboard"} />
          <Button text={"Share"} outlined={true} />
        </div>
      </div>
      <div className="phoneContainer">
        <img src={iphone} alt="iphone" className="iphoneimg" />
        <img src={gradient} alt="gradient" className="gradientimg" />
      </div>
    </div>
  )
}

export default Landing
