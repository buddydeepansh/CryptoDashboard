import axios from "axios"

export const GetCoinData = async (coinId) => {
  // return // saving un needed calls while development
  const myData = await axios
    .get(`https://api.coingecko.com/api/v3/coins/${coinId.toLowerCase()}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log("API Error:", error)
    })
  return myData
}
