import React, { Component } from "react";
import {
  // getmarkethistory,
  // getcurrencies,
  // getmarkets,
  // getmarketsummaries,
  // getorderbook,
  // getticker,
  b
} from "./../api/public_api";

// "MarketName" : "BTC-888",
// 			"High" : 0.00000919,
// 			"Low" : 0.00000820,
// 			"Volume" : 74339.61396015,
// 			"Last" : 0.00000820,
// 			"BaseVolume" : 0.64966963,
// 			"TimeStamp" : "2014-07-09T07:19:30.15",
// 			"Bid" : 0.00000820,
// 			"Ask" : 0.00000831,
// 			"OpenBuyOrders" : 15,
// 			"OpenSellOrders" : 15,
// 			"PrevDay" : 0.00000821,
// 			"Created" : "2014-03-20T06:00:00",
// 			"DisplayMarketName" : null

class Vol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: null,
      loading: true,
      error: null,
      v: [],
      a: []
    };
  }

  componentDidMount = () => {
    b.get(`getmarketsummaries`)
      .then(response => {
        console.log(response.data.result, "getmarketsummaries");
        this.setState({ Data: response.data.result, loading: false });
        return response;
      })
      .then(response => {
        this.marketVol(response.data.result);
      })
      .then
      // this.setState(state => {
      //   let s = [...state];
      //   s.a.push(s.v);
      //   return { state: s };
      // })
      ()
      .then(this.state.Data ? console.log(this.state) : console.log("fdsfds"))
      .catch(error => {
        this.setState({ error });
      });
  };

  marketVol = D => {
    // console.log(D);

    this.setState(state => {
      const v = [...state.v];
      D.map(({ MarketName, Last, BaseVolume, Volume, TimeStamp }) => {
        v.push({
          volBTC: Volume * Last + BaseVolume,
          martet: MarketName,
          TimeStamp: TimeStamp
        });
      });
      // console.log(v);
      return { v };
    });

    // }
  };

  render() {
    const { characters, loading, error } = this.state;
    return this.props.render();
  }
}
export default Vol;
