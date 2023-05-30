import React, { useEffect, useState } from "react"
import Header from "../components/Common/Header/Header"
import Tabs from "../components/Tabs/TabsComponent"
import axios from "axios"
import Search from "../components/Search/Search"
import PaginationComponent from "../components/PaginationComponent/PaginationComponent"
import Loader from "../components/Loader/Loader"
import BackTop from "../components/BackTop/BackTop"
import GetAllCoins from "../functions/GetAllCoins"

const DashboardPage = () => {
  const [coins, setCoins] = useState([])
  const [paginatedCoins, setPaginatedCoins] = useState([])
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [isLoaded, setisLoaded] = useState(false)
  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handlePageChange = (event, value) => {
    setPage(value)
    let prevIndex = (value - 1) * 10
    setPaginatedCoins(coins.slice(prevIndex, prevIndex + 10))
  }

  const getAllCoinsData = async () => {
    const allCoins = await GetAllCoins()
    if (allCoins) {
      await setCoins(allCoins)
      setisLoaded(true)
      setTimeout(async () => {
        console.log("Pagination 2", coins)
        await setPaginatedCoins(allCoins.slice(0, 10))
      }, 500)
    } else {
      setisLoaded(false)
    }
  }

  const filteredCoins = coins.filter((item) => item.name.toLowerCase().includes(search.trim().toLowerCase()) || item.symbol.toLowerCase().includes(search.trim().toLowerCase()))
  useEffect(() => {
    getAllCoinsData()
  }, [])

  return (
    <div>
      <Header />
      <BackTop />
      {isLoaded ? (
        <>
          <Search search={search} onSearchChange={onSearchChange} />
          <Tabs coins={search ? filteredCoins : paginatedCoins} />
          {!search && <PaginationComponent page={page} handlePageChange={handlePageChange} />}
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default DashboardPage
