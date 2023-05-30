import React from "react"
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded"
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded"
import "./ListComponent.css"
import { Tooltip } from "@mui/material"
import convertNumber from "../../functions/ConvertNumber"
import { Link } from "react-router-dom"
const ListComponent = ({ coin, index }) => {
  console.log("coinlistcomponent",coin)
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr key={`ListItem${index}`} className="listRow">
        <td className="infoFlex">
          <Tooltip placement={"bottom"} title={`${coin.name} logo`}>
            <img src={coin.image} alt="symbol" className="coinLogo" />
          </Tooltip>
        </td>
        <td>
          <div className="nameCol">
            <Tooltip placement={"top"} title={`${coin.name} symbol`}>
              <p className="coinSymbol">{coin.symbol}</p>
            </Tooltip>
            <Tooltip placement={"bottom"} title={`coin name`}>
              <p className="coinName">{coin.name}</p>
            </Tooltip>
          </div>
        </td>
        <td className="chipFlex">
          <Tooltip placement={"bottom"} title={`change in 24H`}>
            <div className={` ${coin.price_change_percentage_24h >= 0 ? "priceChip" : "priceChipRed"}`}>{coin.price_change_percentage_24h.toFixed(2)}%</div>
          </Tooltip>
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
        </td>
        <td className="infoContainer tdRightAlign">
          <Tooltip placement={"bottom"} title={"current price"}>
            <h3 className={`${coin.price_change_percentage_24h >= 0 ? "coinPriceUp" : "coinPriceDown"}`}>${coin.current_price.toLocaleString()}</h3>
          </Tooltip>
        </td>
        <td>
          <Tooltip placement={"bottom"} title={`Total Volume`}>
            <p className="totalVolume tdRightAlign"> {coin.total_volume.toLocaleString()}</p>
          </Tooltip>
        </td>
        <td className="desktopMarketCap">
          <Tooltip placement={"bottom"} title={`Market Cap`}>
            <p className="marketCap tdRightAlign"> ${coin.market_cap.toLocaleString()}</p>
          </Tooltip>
        </td>
        <td className="mobileMarketCap">
          <Tooltip placement={"bottom"} title={`Market Cap`}>
            <p className="marketCap tdRightAlign"> ${convertNumber(coin.market_cap)}</p>
          </Tooltip>
        </td>
      </tr>
    </Link>
  )
}

export default ListComponent
