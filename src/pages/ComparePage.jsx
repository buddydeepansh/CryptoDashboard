import React, { useEffect, useState } from "react"
import SelectMenu from "../components/Coin/SelectMenu/SelectMenu"
import Header from "../components/Common/Header/Header"
import SelectCoins from "../components/ComparePage/SelectCoins/SelectCoins"
import Loader from "../components/Loader/Loader"
import ListComponent from "../components/ListComponent/ListComponent"
import CoinInfo from "../components/Coin/CoinInfo/CoinInfo"
import SetChartData from "../functions/SetChartData"
import { convertObject } from "../functions/ConvertObject"
import { GetCoinData } from "../functions/GetCoinData"
import { GetCoinPrices } from "../functions/GetCoinPrices"
import LineChart from "../components/Coin/LineChart/LineChart"
import "./ComparePage.css"
import ToggleComponent from "../components/ToggleComponent/ToggleComponent"

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin")
  const [crypto2, setCrypto2] = useState("ethereum")
  const [crypto1Data, setCrypto1Data] = useState({})
  const [crypto2Data, setCrypto2Data] = useState({})
  const [selectDays, setSelectDays] = useState(30)
  const [isLoaded, setisLoaded] = useState(false)
  const [priceType, setPriceType] = useState("prices")
  const [chartData, setChartData] = useState({})
  const handleDaysChange = async (event) => {
    setisLoaded(false)
    setSelectDays(event.target.value)
    const CoinPrices1 = await GetCoinPrices(crypto2, event.target.value, priceType)
    const CoinPrices2 = await GetCoinPrices(crypto1, event.target.value, priceType)
    if (CoinPrices1 && CoinPrices2 && CoinPrices1.length > 0 && CoinPrices2.length > 0) {
      await SetChartData(setChartData, CoinPrices1, CoinPrices2, crypto1, crypto2)
    }
    setisLoaded(true)
  }
  const handleToggleChange = async (event) => {
    setisLoaded(false)
    setPriceType(event.target.value)
    const CoinPrices1 = await GetCoinPrices(crypto2, selectDays, event.target.value)
    const CoinPrices2 = await GetCoinPrices(crypto1, selectDays, event.target.value)
    if (CoinPrices1 && CoinPrices2 && CoinPrices1.length > 0 && CoinPrices2.length > 0) {
      await SetChartData(setChartData, CoinPrices1, CoinPrices2, crypto1, crypto2)
    }
    setisLoaded(true)
  }
  const handleCryptoChange = async (e, isCoin2 = false) => {
    setisLoaded(false)
    const coinData = await GetCoinData(e.target.value)
    console.log("handlecryptochange", e.target.value, isCoin2)
    isCoin2 ? setCrypto2(e.target.value) : setCrypto1(e.target.value)
    isCoin2 ? coinData && convertObject(setCrypto2Data, coinData) : coinData && convertObject(setCrypto1Data, coinData)
    const CoinPrices1 = await GetCoinPrices(crypto1, selectDays, priceType)
    const CoinPrices2 = await GetCoinPrices(crypto2, selectDays, priceType)
    if (CoinPrices1.length > 0 && CoinPrices2.length > 0) {
      await SetChartData(setChartData, CoinPrices1, CoinPrices2, crypto1, crypto2)
    }
    setisLoaded(true)
  }

  const getInitialData = async () => {
    setisLoaded(false)
    const coinData1 = await GetCoinData(crypto1)
    if (coinData1) {
      convertObject(setCrypto1Data, coinData1)
    }
    const coinData2 = await GetCoinData(crypto2)
    if (coinData2) {
      convertObject(setCrypto2Data, coinData2)
    }
    if (coinData1 && coinData2) {
      const CoinPrices1 = await GetCoinPrices(crypto2, selectDays, priceType)
      const CoinPrices2 = await GetCoinPrices(crypto1, selectDays, priceType)
      if (CoinPrices1 && CoinPrices2 && CoinPrices1.length > 0 && CoinPrices2.length > 0) {
        await SetChartData(setChartData, CoinPrices1, CoinPrices2, crypto1, crypto2)
      }
    }
    setisLoaded(true)
  }

  useEffect(() => {
    getInitialData()
  }, [])

  return (
    <div className="comparePageRoot">
      <Header />
      {isLoaded ? (
        <>
          <div className="coinsDaysFlex">
            <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCryptoChange={handleCryptoChange} />
            <SelectMenu days={selectDays} handleChange={handleDaysChange} noPTag={true} />
            <ToggleComponent alignment={priceType} handleToggle={handleToggleChange} />
          </div>

          {Object.keys(chartData).length > 0 ? (
            <>
              <div className="greyWrapper">
                <ListComponent coin={crypto1Data} index={0} />
              </div>
              <div className="greyWrapper">
                <ListComponent coin={crypto2Data} index={1} />
              </div>
              <LineChart chartData={chartData} priceType={priceType} multiAxis={true} className={"compareLineChart"} />
              <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
              <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
            </>
          ) : (
            <p className="ErrMsg">
              Sorry, Due to Too many API calls, Can't process your Request Now.
              <br />
              Please try again after some time.
            </p>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default ComparePage
