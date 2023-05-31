import React, { useEffect, useState } from "react"
import StarsRoundedIcon from "@mui/icons-material/StarsRounded"
import StarBorderPurple500RoundedIcon from '@mui/icons-material/StarBorderPurple500Rounded';
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded"
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded"
import "./GridComponent.css"
import { Link } from "react-router-dom"
import { Tooltip } from "@mui/material"
import SetStorageBoi from "../../functions/SetStorageBoi"
const GridComponent = ({ coin, index }) => {
  const [isWatchlisted, setisWatchlisted] = useState(false)
  // console.log("coinlistcomponent", coin)
  const addToWatchList = (e) => {
    e.preventDefault()
    setisWatchlisted(!isWatchlisted)
    SetStorageBoi(coin)
  }
  useEffect(() => {
    let storageItems = localStorage.getItem("cryptoData")
    storageItems = JSON.parse(storageItems)
    if (storageItems) {
      storageItems.includes(coin.id) ? setisWatchlisted(true) : setisWatchlisted(false)
    }
  }, [])
  return (
    <Link to={`/coin/${coin.id}`}>
      <div key={`gridIem${index}`} className={`gridContainer ${coin.price_change_percentage_24h >= 0 ? "greenBorder" : "redBorder"}`}>
        <div className="infoFlex">
          <img src={coin.image} alt="symbol" className="coinLogo" />
          <div className="nameCol">
            <p className="coinSymbol">{coin.symbol}</p>
            <p className="coinName">{coin.name}</p>
          </div>
          <div className={`addWatchList ${coin.price_change_percentage_24h >= 0 ? "up" : "down"}`} onClick={addToWatchList}>
            <Tooltip placement={"bottom"} title={`${!isWatchlisted ? "Add to" : "Remove from"} Watchlist`}>
              {isWatchlisted ? <StarsRoundedIcon /> : <StarBorderPurple500RoundedIcon />}
            </Tooltip>
          </div>
        </div>
        <div className="chipFlex">
          <div className={` ${coin.price_change_percentage_24h >= 0 ? "priceChip" : "priceChipRed"}`}>{coin.price_change_percentage_24h.toFixed(2)}%</div>
          {coin.price_change_percentage_24h >= 0 ? (
            <div className="iconChip up">
              {" "}
              <TrendingUpRoundedIcon />
            </div>
          ) : (
            <div className="iconChip down">
              {" "}
              <TrendingDownRoundedIcon />
            </div>
          )}
        </div>
        <div className="infoContainer">
          <h3 className={`${coin.price_change_percentage_24h >= 0 ? "coinPriceUp" : "coinPriceDown"}`}>${coin.current_price.toLocaleString()}</h3>
          <p className="totalVolume">Total Volume: {coin.total_volume.toLocaleString()}</p>
          <p className="marketCap">Total Market Cap: ${coin.market_cap.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  )
}

export default GridComponent
