const SetStorageBoi = async (coin) => {
  let currentItems = localStorage.getItem("cryptoData")
  if (!currentItems) {
    currentItems = []
    currentItems.push(coin.id)
  } else {
    currentItems = JSON.parse(currentItems)
    if (currentItems.includes(coin.id)) {
      currentItems = currentItems.filter((item) => item != coin.id)
    } else {
      currentItems.push(coin.id)
    }
  }
  localStorage.setItem("cryptoData", JSON.stringify(currentItems))
  // console.log("currentItems1")
}

export default SetStorageBoi
