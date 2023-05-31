import React, { useState } from "react"
import "./CoinInfo.css"
const CoinInfo = ({ heading, desc }) => {
  // console.log("coinlistcomponent info0",heading,desc)
  const shortDesc = desc.slice(0, 300) + `<br/><span>Read More...</span>`
  const longDesc = desc+ `<br/><br/><span>Read Less</span>`
  const [flag, setflag] = useState(true)
  return (
    <div className={"CoinInfo greyWrapper"}>
      <h3 className="coinInfoHeading">{heading}</h3>
      <p className="coinInfoDescription" onClick={() => setflag(!flag)} dangerouslySetInnerHTML={{ __html: flag ? longDesc : shortDesc }} />
    </div>
  )
}

export default CoinInfo
