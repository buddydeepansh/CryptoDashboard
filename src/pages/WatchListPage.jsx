import React, { useEffect, useState } from "react"
import Header from "../components/Common/Header/Header"
import Loader from "../components/Loader/Loader"

const WatchListPage = () => {
  const [isLoaded, setIsLoaded] = useState(true)
  const [storageData, setStorageData] = useState()
  useEffect(() => {
    let cryptoData = localStorage.getItem("cryptoData")
    if (cryptoData) {
      console.log("retrived data")
    } else {
      console.log("retrived data 2")
    }
  }, [])

  return (
    <div className="watchListPage">
      <Header />
      {isLoaded ? (
        <>
          <p>hi</p>
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </div>
  )
}

export default WatchListPage
