import axios from "axios"

export async function GetCoinPrices(coinId, days, priceType) {
  const myPrices = await axios
    .get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    .then((response) => {
      if (priceType == "market_caps") {
        return response.data.market_caps
      } else if (priceType == "total_volumes") {
        return response.data.total_volumes
      } else {
        return response.data.prices
      }
    })
    .catch((error) => {
      console.log("error", error)
    })
  if (myPrices) {
    return myPrices
  } else {
    return
  }
}
