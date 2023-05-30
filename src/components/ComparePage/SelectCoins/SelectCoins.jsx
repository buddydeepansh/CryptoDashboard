import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import React, { useState, useEffect } from "react"
import GetAllCoins from "../../../functions/GetAllCoins"
import "./SelectCoins.css"

const SelectCoins = ({ crypto1, crypto2, handleCryptoChange }) => {
  const [allCoins, setAllCoins] = useState([])

  const styles = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "var(--blue)",
      },
    },
  }
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    // return // for saving unneeded api calls while development
    const myCoins = await GetAllCoins()
    if (myCoins) {
      setAllCoins(myCoins)
    }
  }

  return (
    <div className="coinsFlex">
      <p className="coinsFlexPara">Crypto 1</p>
      <Select label={"Crypto1"} value={crypto1} onChange={(e) => handleCryptoChange(e)} displayEmpty sx={styles}>
        {allCoins
          .filter((item) => item.id !== crypto2)
          .map((coin) => {
            return (
              <MenuItem key={`crypto1_${coin.id}`} value={coin.id}>
                {coin.name}
              </MenuItem>
            )
          })}
      </Select>
      <p className="coinsFlexPara">Crypto 2</p>
      <Select value={crypto2} label={"Crypto2"} onChange={(e) => handleCryptoChange(e, true)} displayEmpty sx={styles}>
        {allCoins
          .filter((item) => item.id !== crypto1)
          .map((coin) => {
            return (
              <MenuItem key={`crypto2_${coin.id}`} value={coin.id}>
                {coin.name}
              </MenuItem>
            )
          })}
      </Select>
    </div>
  )
}

export default SelectCoins
