import React from "react"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"
import {motion} from "framer-motion"
import convertNumber from "../../../functions/ConvertNumber"
import "./LineChart.css"

const LineChart = ({ chartData, priceType, multiAxis = false }) => {
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
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          callback: function (value) {
            if (priceType == "total_volumes") {
              return convertNumber(value)
            } else if (priceType == "market_caps") {
              return "$" + convertNumber(value)
            } else {
              return "$" + value.toLocaleString()
            }
          },
        },
      },
      y2: multiAxis && {
        type: "linear",
        display: true,
        position: "right",
        ticks: {
          callback: function (value) {
            if (priceType == "total_volumes") {
              return convertNumber(value)
            } else if (priceType == "market_caps") {
              return "$" + convertNumber(value)
            } else {
              return "$" + value.toLocaleString()
            }
          },
        },
      },
    },
  }
  return (
    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}  className="LineChart">
      <Line data={chartData} options={options} />
    </motion.div>
  )
}

export default LineChart
