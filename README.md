
# Crpto Dashboard

This Crypto Dashboard conatins information on cryptocurrencies so  that a user can track the rates, market prices, changes, graph of currencies. 


## Demo

https://crypto-dashboard-demo.netlify.app/

## Tech Stack

**Client:** React, Framer-Motion, Chart.js, React-router, axios


## API Reference

### Coingecko API

#### Get all coins

```http
  GET https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Not Required**.|
| `vs_currency` | `string` | **Required**. ex: usd|
| `per_page` | `string` | **Required**. ex: 100|



#### Get single coin data

```http
  GET https://api.coingecko.com/api/v3/coins/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of coin to fetch. ex: bitcoin |


#### Get single coin market data

```http
  GET https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}&interval=daily
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `coinId`      | `string` | **Required**. Id of coin to fetch. ex: bitcoin |
| `days`      | `string` | **Required**. Data of past x days. Ex: 10|


## Authors

- [@buddydeepansh](https://github.com/buddydeepansh)

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| white | ![#fff](https://via.placeholder.com/10/fff?text=+) #fff |
| black | ![#f8f8f8](https://via.placeholder.com/10/111?text=+) #111 |
| blue | ![#3a80e9](https://via.placeholder.com/10/3a80e9?text=+) #3a80e9 |
| grey | ![#888](https://via.placeholder.com/10/888?text=+) #888 |
| dark-grey | ![#1b1b1b](https://via.placeholder.com/10/1b1b1b?text=+) #1b1b1b |
| green | ![#61c96f](https://via.placeholder.com/10/61c96f?text=+) #61c96f |
| red | ![#f94141](https://via.placeholder.com/10/f94141?text=+) #f94141 |


## Installation

To install this project locally run

```bash
  npm install
  npm start
```


## Acknowledgements

 - This project is made under the guidance of Mr. Avi Vashishta (Intructor: AccioJobs).

