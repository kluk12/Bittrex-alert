import React, { Component } from "react";
import { b } from "./../api/public_api";
// response
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
      changevol: [],
      upchange: 0,
      downchange: 0
    };
  }

  componentDidMount = () => {
    this.api();
    setInterval(this.api, 10000, () => {
      this.setState({ loading: true });
    });
  };
  // main apis func
  api = () => {
    b.get(`getmarketsummaries`)
      .then(response => {
        // console.log(response.data.result, "getmarketsummaries");
        this.setState({ Data: response.data.result, loading: false });
        return response;
      })
      .then(response => {
        this.marketVol(response.data.result);
      })
      .then(this.change())
      .catch(error => {
        this.setState({ error });
      });
  };
  // lisner change
  change = () => {
    if (this.state.v.length < 2) return;
    this.setState(state => {
      const vol = [...state.v];

      const lengthv = vol.length;
      let lastvol = vol[lengthv - 2],
        headvol = vol[lengthv - 1],
        b = [],
        prc;

      const [head] = headvol;
      const [last] = lastvol;

      for (let i in head) {
        prc = ((last[i].volBTC - head[i].volBTC) / head[i].volBTC) * 100;
        if (isNaN(prc)) prc = 0;
        b.push({
          MarketName: head[i].martet,
          Procenty: parseFloat(prc.toFixed(2)),
          TimeStamp: head[i].TimeStamp
        });
      }
      //up vol
      const up = b.filter(element => {
        if (element.Procenty === 0) {
          return;
        } else {
          return element.Procenty >= 0.5 ? element : null;
        }
      });
      const down = b.filter(element => {
        if (element.Procenty === 0) {
          return;
        } else {
          return element.Procenty <= -0.5 ? element : null;
        }
      });
      console.log(up, "up");
      console.log(down, "down");

      return { changevol: b, upchange: up, downchange: down };
    });
  };
  // skalp data
  marketVol = D => {
    this.setState(state => {
      const v = [...state.v];

      let z = [];
      D.map(({ MarketName, Last, BaseVolume, Volume, TimeStamp }) => {
        z.push({
          volBTC: Volume * Last + BaseVolume,
          martet: MarketName,
          TimeStamp: TimeStamp
        });
      });

      v.push([z]);

      return { v };
    });
  };

  render() {
    const { loading, error, changevol, upchange, downchange } = this.state;
    return this.props.render({
      loading,
      error,
      changevol,
      upchange,
      downchange
    });
  }
}
export default Vol;
