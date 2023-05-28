import convertDate from "./ConvertDate"

const SetChartData = async (setChartData, CoinPrices) => {
  setChartData({
    labels: CoinPrices.prices.map((item) => {
      return convertDate(item[0])
    }),
    datasets: [
      {
        data: CoinPrices.prices.map((item) => item[1]),
        borderColor: "#3a80e9",
        backgroundColor: "rgba(58,128,233,0.1)",
        yAxisID: "y",
        borderWidth: 1.5,
        fill: true,
        tension: 0.25,
        pointRadius: 0,
      },
    ],
  })
}

export default SetChartData
