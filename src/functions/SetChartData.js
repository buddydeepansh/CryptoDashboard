import convertDate from "./ConvertDate"

const SetChartData = async (setChartData, CoinPrices1, CoinPrices2, crypto1, crypto2) => {
  if (CoinPrices2) {
    setChartData({
      labels: CoinPrices1.map((item) => {
        return convertDate(item[0])
      }),
      datasets: [
        {
          data: CoinPrices1.map((item) => item[1]),
          borderColor: "#3a80e9",
          yAxisID: "y",
          borderWidth: 1.5,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
          label: crypto1,
        },
        {
          data: CoinPrices2.map((item) => item[1]),
          borderColor: "#eb38e2",
          yAxisID: "y2",
          borderWidth: 1.5,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
          label: crypto2,
        },
      ],
    })
  } else {
    setChartData({
      labels: CoinPrices1.map((item) => {
        return convertDate(item[0])
      }),
      datasets: [
        {
          data: CoinPrices1.map((item) => item[1]),
          borderColor: "#3a80e9",
          yAxisID: "y",
          borderWidth: 1.5,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
        },
      ],
    })
  }
}

export default SetChartData
