import { TabList } from "@mui/lab"
import TabContext from "@mui/lab/TabContext"
import TabPanel from "@mui/lab/TabPanel"
import Tab from "@mui/material/Tab"
import React, { useState } from "react"
import "./Tabs.css"

const TabsComponent = ({ coins }) => {
  const [value, setValue] = useState("grid")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={"CoinTabContainer"}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant={"fullWidth"}>
          <Tab label="Grid View" value={"grid"} className={"tabButton"} />
          <Tab label="List View" value={"list"} className={"tabButton"} />
        </TabList>

        <TabPanel value={"grid"}>
          <div>
            {coins.map((coin, i) => {
              return (
                <div key={`coin${i}`}>
                  <img src={coin.image} alt="symbol" />
                <p >
                  {i + 1}. {coin.name}
                </p>

                </div>
              )
            })}
          </div>
        </TabPanel>
        <TabPanel value={"list"}><div>
            {coins.map((coin, i) => {
              return (
                <p key={`coin${i}`}>
                  {i + 1}. {coin.symbol}
                </p>
              )
            })}
          </div></TabPanel>
      </TabContext>
    </div>
  )
}

export default TabsComponent
