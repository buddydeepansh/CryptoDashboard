import React, { useEffect, useState } from "react"
import Header from "../components/Common/Header/Header"
import Tabs from "../components/Tabs/TabsComponent"
import axios from "axios"

const DashboardPage = () => {
  const [coins, setCoins] = useState([])
  useEffect(() => {
    // axios
    //   .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
    //   .then((response) => {
    //     // console.log(response.data)
    //     setCoins(response.data)
    //   })
    //   .catch((error) => {
    //     console.log("API Error:", error)
    //   })
  }, [])

  return (
    <div>
      <Header />
      <Tabs coins={coins} />
    </div>
  )
}

export default DashboardPage
