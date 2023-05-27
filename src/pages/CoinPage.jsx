import React, { useState, useEffect, useRef } from "react"
import "./CoinPage.css"
import { useParams } from "react-router-dom"
import axios from "axios"
import Loader from "../components/Loader/Loader"
import Header from "../components/Common/Header/Header"
import { convertObject } from "../functions/ConvertObject"
import ListComponent from "../components/ListComponent/ListComponent"
import CoinInfo from "../components/Coin/CoinInfo/CoinInfo"

const CoinPage = () => {
  const { coinId } = useParams()
  const [coin, setCoin] = useState()
  const [isLoaded, setisLoaded] = useState(false)
  useEffect(() => {
    if (coinId) {
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${coinId.toLowerCase()}`)
        .then((response) => {
          // console.log(response.data)
          setCoin(response.data)
          convertObject(setCoin, response.data)
          setisLoaded(true)
        })
        .catch((error) => {
          console.log("API Error:", error)
          setisLoaded(false)
        })
    }
  }, [])
  return (
    <div>
      <Header />
      {isLoaded ? (
        <>
          <div className="greyWrapper">
            <ListComponent coin={coin} />
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
