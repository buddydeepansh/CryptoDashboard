import React, { useState, useEffect, useRef } from "react"
import "./CoinPage.css"
import { useParams } from "react-router-dom"
import axios from "axios"
import Loader from "../components/Loader/Loader"
import Header from "../components/Common/Header/Header"
import { convertObject } from "../functions/ConvertObject"
import { GetCoinPrices } from "../functions/GetCoinPrices"
import ListComponent from "../components/ListComponent/ListComponent"
import CoinInfo from "../components/Coin/CoinInfo/CoinInfo"
import { GetCoinData } from "../functions/GetCoinData"
import LineChart from "../components/Coin/LineChart/LineChart"
import convertDate from "../functions/ConvertDate"
import SelectMenu from "../components/Coin/SelectMenu/SelectMenu"
import SetChartData from "../functions/SetChartData"
import ToggleComponent from "../components/ToggleComponent/ToggleComponent"

const CoinPage = () => {
  const { coinId } = useParams()
  const [coin, setCoin] = useState()
  const [days, setDays] = useState(60)
  const [isLoaded, setisLoaded] = useState(false)
  const [chartData, setChartData] = useState({})
  const [toggleMenu, setToggleMenu] = useState("prices")
  useEffect(() => {
    if (coinId) {
      getData()
    }
  }, [])
  async function getData() {
    const coinData = await GetCoinData(coinId)
    if (coinData) {
      setCoin(coinData)
      convertObject(setCoin, coinData)
      setisLoaded(true)
      const CoinPrices = await GetCoinPrices(coinId, days, toggleMenu)
      if (CoinPrices.length > 0) {
        SetChartData(setChartData, CoinPrices)
      }
    } else setisLoaded(false)
  }
  const handleDaysChange = async (event) => {
    await setDays(event.target.value)
    setisLoaded(false)
    const CoinPrices = await GetCoinPrices(coinId, event.target.value, toggleMenu)
    if (CoinPrices.length > 0) {
      SetChartData(setChartData, CoinPrices)
    }
    setisLoaded(true)
  }
  const handleToggleChange = async (e) => {
    setisLoaded(false)
    setToggleMenu(e.target.value)
    const CoinPrices = await GetCoinPrices(coinId, days, e.target.value)
    if (CoinPrices.length > 0) {
      SetChartData(setChartData, CoinPrices)
    }
    setisLoaded(true)
  }
  return (
    <div>
      <Header />
      {isLoaded ? (
        <>
          <div className="greyWrapper">
            <ListComponent coin={coin} />
          </div>
          <div className="greyWrapper chartDiv">
            <SelectMenu days={days} handleChange={handleDaysChange} />
            <ToggleComponent alignment={toggleMenu} handleToggle={handleToggleChange} />
            <LineChart chartData={chartData} />
          </div>
          <CoinInfo heading={coin.name} desc={coin.desc} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default CoinPage
