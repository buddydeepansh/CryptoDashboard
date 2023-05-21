import { TabList } from "@mui/lab"
import TabContext from "@mui/lab/TabContext"
import TabPanel from "@mui/lab/TabPanel"
import Tab from "@mui/material/Tab"
import React, { useState } from "react"
import GridComponent from "../GridComponent/GridComponent"
import "./Tabs.css"
import ListComponent from "../ListComponent/ListComponent"

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
          <div className="gridFlex">
            {coins.map((coin, i) => {
              return <GridComponent coin={coin} index={i} />
            })}
          </div>
        </TabPanel>
        <TabPanel value={"list"}>
          <table className="listTable">
            {coins.map((coin, i) => {
              return <ListComponent coin={coin} index={i} />
            })}
          </table>
        </TabPanel>
      </TabContext>
    </div>
  )
}

export default TabsComponent
