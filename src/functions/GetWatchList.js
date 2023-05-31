import GetAllCoins from "./GetAllCoins"

const GetWatchList = async () => {
  const allCoins = await GetAllCoins()
  if (allCoins) {
    let storageItems = localStorage.getItem("cryptoData")
    storageItems = JSON.parse(storageItems)
    if (storageItems) {
      const newCoins = await allCoins.filter((item) => storageItems.includes(item.id))
      return newCoins
    }
  }
}

export default GetWatchList
