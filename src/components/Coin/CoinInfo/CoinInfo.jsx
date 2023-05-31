import React, { useState } from "react"
import {motion} from "framer-motion"
import "./CoinInfo.css"
const CoinInfo = ({ heading, desc }) => {
  // console.log("coinlistcomponent info0",heading,desc)
  const shortDesc = desc.slice(0, 300) + `<br/><span>Read More...</span>`
  const longDesc = desc+ `<br/><br/><span>Read Less</span>`
  const [flag, setflag] = useState(true)
  return (
    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }}  className={"CoinInfo greyWrapper"}>
      <h3 className="coinInfoHeading">{heading}</h3>
      <p className="coinInfoDescription" onClick={() => setflag(!flag)} dangerouslySetInnerHTML={{ __html: flag ? longDesc : shortDesc }} />
    </motion.div>
  )
}

export default CoinInfo
