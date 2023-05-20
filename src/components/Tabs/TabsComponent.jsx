import { TabList } from "@mui/lab"
import TabContext from "@mui/lab/TabContext"
import TabPanel from "@mui/lab/TabPanel"
import Tab from "@mui/material/Tab"
import React, { useState } from "react"
import "./Tabs.css"

const TabsComponent = () => {
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

        <TabPanel value={"grid"}>Grid</TabPanel>
        <TabPanel value={"list"}>List</TabPanel>
      </TabContext>
    </div>
  )
}

export default TabsComponent
