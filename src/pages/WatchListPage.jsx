import React, { useEffect, useState } from "react"
import Header from "../components/Common/Header/Header"
import Loader from "../components/Loader/Loader"
import GetAllCoins from "../functions/GetAllCoins"
import TabsComponent from "../components/Tabs/TabsComponent"
import GetWatchList from "../functions/GetWatchList"

const WatchListPage = () => {
  const [isLoaded, setIsLoaded] = useState(true)
  const [coins, setCoins] = useState([])
  const getAllCoinsData = async () => {
    setIsLoaded(false)
    const allCoins = await GetWatchList()
    if (allCoins) {
      await setCoins(allCoins)
      setIsLoaded(true)
    } else {
      setIsLoaded(false)
    }
  }
  useEffect(() => {
    getAllCoinsData()
  }, [])
  window.addEventListener("storage", getAllCoinsData)

  return (
    <div className="watchListPage">
      <Header />
      {isLoaded ? (
        <>
          <TabsComponent coins={coins} />
        </>
      ) : (
        <>
          <Loader text={"Please add some coins in watchlist<br/> Retry after some time"} />
        </>
      )}
    </div>
  )
}

export default WatchListPage
