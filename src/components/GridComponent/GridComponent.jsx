import React from "react"
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded"
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded"
import "./GridComponent.css"
const GridComponent = ({ coin, index }) => {
  return (
    <div key={`gridIem${index}`} className={`gridContainer ${coin.price_change_percentage_24h >= 0 ? "greenBorder" : "redBorder"}`}>
      <div className="infoFlex">
        <img src={coin.image} alt="symbol" className="coinLogo" />
        <div className="nameCol">
          <p className="coinSymbol">{coin.symbol}</p>
          <p className="coinName">{coin.name}</p>
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
  )
}

export default GridComponent
