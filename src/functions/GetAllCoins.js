import axios from "axios"

const GetAllCoins = async () => {
  const myCoins = axios
    .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
    .then((response) => {
      // console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log("API Error:", error)
    })
  return myCoins
}
export default GetAllCoins
