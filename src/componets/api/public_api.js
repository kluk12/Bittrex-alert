import axios from "axios/index";

const b = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://bittrex.com/api/v1.1/public/"
});

// https://bittrex.com/api/v1.1/public/getmarkets
export const getmarkets = () => {
  b.get(`getmarkets`)
    .then(response => {
      console.log(response, "getmarkets");
    })
    .catch(error => {
      console.log(error);
    });
};
// Parameter	Required	Description
// market   	required	a string literal for the market (ex: BTC-LTC)
export const getticker = (market = "BTC-LTC") => {
  b.get(`getticker?market=${market}`)
    .then(response => {
      console.log(response, "getticker");
    })
    .catch(error => {
      console.log(error);
    });
};

// Parameter	Required	Description
// market	    required	a string literal for the market (ex: BTC-LTC)
//https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-ltc

export const getmarketsummaries = (market = "BTC-LTC") => {
  b.get(`getmarketsummaries?market=${market}`)
    .then(response => {
      console.log(response, "getmarketsummaries");
    })
    .catch(error => {
      console.log(error);
    });
};
//https://bittrex.com/api/v1.1/public/getcurrencies
export const getcurrencies = () => {
  b.get(`getcurrencies`)
    .then(response => {
      console.log(response, "getcurrencies");
    })
    .catch(error => {
      console.log(error);
    });
};
// Parameter	Required	Description
// market   	required	a string literal for the market (ex: BTC-LTC)
// type     	required	buy, sell or both to identify the type of orderbook to return
//https://bittrex.com/api/v1.1/public/getorderbook?market=BTC-LTC&type=both
export const getorderbook = (market = "BTC-LTC", type = "both") => {
  b.get(`getorderbook?market=${market}&type=${type}`)
    .then(response => {
      console.log(response, "getorderbook");
    })
    .catch(error => {
      console.log(error);
    });
};

// Parameter	Required	Description
// market	    required	a string literal for the market (ex: BTC-LTC)
// https://bittrex.com/api/v1.1/public/getmarkethistory?market=BTC-DOGE
export const getmarkethistory = (market = "BTC-LTC") => {
  b.get(`getmarkethistory?market=${market}`)
    .then(response => {
      console.log(response, "getmarkethistory");
    })
    .catch(error => {
      console.log(error);
    });
};
