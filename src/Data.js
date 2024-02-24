import React, { useState, useEffect } from "react";
import axios from "axios";

let obj = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    current_price: 51030,
    market_cap: 1002625754339,
    market_cap_rank: 1,
    fully_diluted_valuation: 1072252304556,
    total_volume: 19346710672,
    high_24h: 51251,
    low_24h: 50598,
    price_change_24h: 40.2,
    price_change_percentage_24h: 0.07884,
    market_cap_change_24h: 2802527444,
    market_cap_change_percentage_24h: 0.2803,
    circulating_supply: 19636368,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 69045,
    ath_change_percentage: -25.99206,
    ath_date: "2021-11-10T14:24:11.849Z",
    atl: 67.81,
    atl_change_percentage: 75256.68306,
    atl_date: "2013-07-06T00:00:00.000Z",
    roi: null,
    last_updated: "2024-02-24T12:36:38.351Z",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    current_price: 2955.84,
    market_cap: 355244669043,
    market_cap_rank: 2,
    fully_diluted_valuation: 355244669043,
    total_volume: 12958230731,
    high_24h: 2963.22,
    low_24h: 2906.7,
    price_change_24h: 26.31,
    price_change_percentage_24h: 0.89822,
    market_cap_change_24h: 3216282721,
    market_cap_change_percentage_24h: 0.91364,
    circulating_supply: 120156541.646231,
    total_supply: 120156541.646231,
    max_supply: null,
    ath: 4878.26,
    ath_change_percentage: -39.34757,
    ath_date: "2021-11-10T14:24:19.604Z",
    atl: 0.432979,
    atl_change_percentage: 683255.1939,
    atl_date: "2015-10-20T00:00:00.000Z",
    roi: {
      times: 76.42871302836977,
      currency: "btc",
      percentage: 7642.8713028369775,
    },
    last_updated: "2024-02-24T12:36:31.955Z",
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
    image:
      "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    current_price: 0.999393,
    market_cap: 97876015446,
    market_cap_rank: 3,
    fully_diluted_valuation: 97876015446,
    total_volume: 38143709023,
    high_24h: 1.001,
    low_24h: 0.99805,
    price_change_24h: -0.000407414011041607,
    price_change_percentage_24h: -0.04075,
    market_cap_change_24h: 128564411,
    market_cap_change_percentage_24h: 0.13153,
    circulating_supply: 97910734641.7273,
    total_supply: 97910734641.7273,
    max_supply: null,
    ath: 1.32,
    ath_change_percentage: -24.42372,
    ath_date: "2018-07-24T00:00:00.000Z",
    atl: 0.572521,
    atl_change_percentage: 74.65669,
    atl_date: "2015-03-02T00:00:00.000Z",
    roi: null,
    last_updated: "2024-02-24T12:35:19.943Z",
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image:
      "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    current_price: 379.98,
    market_cap: 58500089022,
    market_cap_rank: 4,
    fully_diluted_valuation: 58500089022,
    total_volume: 1354377758,
    high_24h: 381.63,
    low_24h: 369.55,
    price_change_24h: 6.67,
    price_change_percentage_24h: 1.78808,
    market_cap_change_24h: 1170775782,
    market_cap_change_percentage_24h: 2.04219,
    circulating_supply: 153856150,
    total_supply: 153856150,
    max_supply: 200000000,
    ath: 686.31,
    ath_change_percentage: -44.51073,
    ath_date: "2021-05-10T07:24:17.097Z",
    atl: 0.0398177,
    atl_change_percentage: 956325.21432,
    atl_date: "2017-10-19T00:00:00.000Z",
    roi: null,
    last_updated: "2024-02-24T12:36:40.802Z",
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
    current_price: 101.84,
    market_cap: 44907446679,
    market_cap_rank: 5,
    fully_diluted_valuation: 58071033056,
    total_volume: 2027493784,
    high_24h: 102.74,
    low_24h: 98.57,
    price_change_24h: 0.355093,
    price_change_percentage_24h: 0.34989,
    market_cap_change_24h: 155404186,
    market_cap_change_percentage_24h: 0.34726,
    circulating_supply: 441083376.111919,
    total_supply: 570376835.224348,
    max_supply: null,
    ath: 259.96,
    ath_change_percentage: -60.7902,
    ath_date: "2021-11-06T21:54:35.825Z",
    atl: 0.500801,
    atl_change_percentage: 20253.28604,
    atl_date: "2020-05-11T19:35:23.449Z",
    roi: null,
    last_updated: "2024-02-24T12:36:44.921Z",
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
    current_price: 0.543792,
    market_cap: 29687538638,
    market_cap_rank: 6,
    fully_diluted_valuation: 54371916726,
    total_volume: 958642672,
    high_24h: 0.546345,
    low_24h: 0.527318,
    price_change_24h: 0.00987336,
    price_change_percentage_24h: 1.84923,
    market_cap_change_24h: 573221027,
    market_cap_change_percentage_24h: 1.96886,
    circulating_supply: 54594247369,
    total_supply: 99987873963,
    max_supply: 100000000000,
    ath: 3.4,
    ath_change_percentage: -83.97111,
    ath_date: "2018-01-07T00:00:00.000Z",
    atl: 0.00268621,
    atl_change_percentage: 20178.92891,
    atl_date: "2014-05-22T00:00:00.000Z",
    roi: null,
    last_updated: "2024-02-24T12:36:46.970Z",
  },
  {
    id: "staked-ether",
    symbol: "steth",
    name: "Lido Staked Ether",
    image:
      "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
    current_price: 2954.2,
    market_cap: 28980041147,
    market_cap_rank: 7,
    fully_diluted_valuation: 28952362959,
    total_volume: 30364256,
    high_24h: 2960.66,
    low_24h: 2905.19,
    price_change_24h: 26.53,
    price_change_percentage_24h: 0.90623,
    market_cap_change_24h: 242307783,
    market_cap_change_percentage_24h: 0.84317,
    circulating_supply: 9808547.42392008,
    total_supply: 9799179.50029337,
    max_supply: null,
    ath: 4829.57,
    ath_change_percentage: -38.77968,
    ath_date: "2021-11-10T14:40:47.256Z",
    atl: 482.9,
    atl_change_percentage: 512.28029,
    atl_date: "2020-12-22T04:08:21.854Z",
    roi: null,
    last_updated: "2024-02-24T12:36:42.829Z",
  },
  {
    id: "usd-coin",
    symbol: "usdc",
    name: "USDC",
    image:
      "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
    current_price: 0.999142,
    market_cap: 28117816389,
    market_cap_rank: 8,
    fully_diluted_valuation: 28118803832,
    total_volume: 4610442463,
    high_24h: 1.003,
    low_24h: 0.997017,
    price_change_24h: -0.001065111846810574,
    price_change_percentage_24h: -0.10649,
    market_cap_change_24h: 87818951,
    market_cap_change_percentage_24h: 0.3133,
    circulating_supply: 28140600295.4248,
    total_supply: 28141588538.5315,
    max_supply: null,
    ath: 1.17,
    ath_change_percentage: -14.74061,
    ath_date: "2019-05-08T00:40:28.300Z",
    atl: 0.877647,
    atl_change_percentage: 13.92309,
    atl_date: "2023-03-11T08:02:13.981Z",
    roi: null,
    last_updated: "2024-02-24T12:36:45.889Z",
  },
  {
    id: "cardano",
    symbol: "ada",
    name: "Cardano",
    image:
      "https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090",
    current_price: 0.585213,
    market_cap: 20579444805,
    market_cap_rank: 9,
    fully_diluted_valuation: 26348582397,
    total_volume: 453465159,
    high_24h: 0.592866,
    low_24h: 0.570744,
    price_change_24h: 0.00565867,
    price_change_percentage_24h: 0.97638,
    market_cap_change_24h: 223287012,
    market_cap_change_percentage_24h: 1.0969,
    circulating_supply: 35147052780.6972,
    total_supply: 45000000000,
    max_supply: 45000000000,
    ath: 3.09,
    ath_change_percentage: -80.99531,
    ath_date: "2021-09-02T06:00:10.474Z",
    atl: 0.01925275,
    atl_change_percentage: 2947.138,
    atl_date: "2020-03-13T02:22:55.044Z",
    roi: null,
    last_updated: "2024-02-24T12:36:42.198Z",
  },
  {
    id: "avalanche-2",
    symbol: "avax",
    name: "Avalanche",
    image:
      "https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369",
    current_price: 36.58,
    market_cap: 13808847931,
    market_cap_rank: 10,
    fully_diluted_valuation: 15957533044,
    total_volume: 496289292,
    high_24h: 36.69,
    low_24h: 35.27,
    price_change_24h: 0.28455,
    price_change_percentage_24h: 0.78397,
    market_cap_change_24h: 55994918,
    market_cap_change_percentage_24h: 0.40715,
    circulating_supply: 377180449.568527,
    total_supply: 435870502.569946,
    max_supply: 720000000,
    ath: 144.96,
    ath_change_percentage: -74.69648,
    ath_date: "2021-11-21T14:18:56.538Z",
    atl: 2.8,
    atl_change_percentage: 1209.51275,
    atl_date: "2020-12-31T13:15:21.540Z",
    roi: null,
    last_updated: "2024-02-24T12:36:44.854Z",
  },
];

function Data({ setResponse }) {
  useEffect(() => {
    fetchData();
  }, []);

  function dummyResponse() {
    setResponse(obj);
  }

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      setResponse(response.data);
    } catch (err) {
      console.log("Error occured");
      console.log("Error", err);
      dummyResponse();
    }
  }

  return <div></div>;
}

export default Data;