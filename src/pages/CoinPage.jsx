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

const CoinPage = () => {
  const { coinId } = useParams()
  const [coin, setCoin] = useState()
  const [days, setDays] = useState(7)
  const [isLoaded, setisLoaded] = useState(false)
  const [chartData, setChartData] = useState({})
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
      // const CoinPrices = await GetCoinPrices(coinId, days)
      const CoinPrices = {
        prices: [
          [1684713600000, 1804.9290671072804],
          [1684800000000, 1818.4014644980855],
          [1684886400000, 1854.1931182731782],
          [1684972800000, 1800.736010305837],
          [1685059200000, 1805.8057604056937],
          [1685145600000, 1828.9565366197276],
          [1685232000000, 1830.3066513168976],
          [1685290435000, 1843.4618704475324],
        ],
      }
      if (CoinPrices.prices.length > 0) {
        setChartData({
          labels: CoinPrices.prices.map((item) => {
            const date = new Date(item[0])
            // return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
            return convertDate(item[0])
          }),
          datasets: [
            {
              data: CoinPrices.prices.map((item) => item[1]),
              borderColor: "#3a80e9",
              backgroundColor: "rgba(58,128,233,0.1)",
              yAxisID: "y",
              borderWidth: 1.5,
              fill: true,
              tension: 0.25,
              pointRadius: 0
            },
          ],
        })
      }
    } else setisLoaded(false)
  }
  return (
    <div>
      <Header />
      {isLoaded ? (
        <>
          <div className="greyWrapper">
            <ListComponent coin={coin} />
          </div>
          <div className="greyWrapper">
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
