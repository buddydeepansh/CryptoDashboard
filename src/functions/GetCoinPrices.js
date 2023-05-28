import axios from "axios"

export const GetCoinPrices = async (coinId, days) => {
  const myPrices = await axios
    .get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log("error", error)
    })
  return myPrices
}
