import React from "react"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"
import "./LineChart.css"

const LineChart = ({ chartData, priceType, multiAxis }) => {
  const options = {
    plugings: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
  }
  return (
    <div className="LineChart">
      <Line data={chartData} options={options} />
    </div>
  )
}

export default LineChart
