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
// let data = async getmarketsummaries => {
//   const d = await getmarketsummaries();
//   //    const{MarketName,Last,BaseVolume,Volume}=d;
//   return d;
// };
// let last = data(getmarketsummaries);
// export const marketVol = data => {
//   const d = getmarketsummaries();
//   return d;
// };

class Vol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: null,
      loading: true,
      error: null,
      v: [],
      changevol: []
    };
  }

  componentDidMount = () => {
    this.api();
    setInterval(this.api, 30000, () => {
      this.setState({ loading: true });
    });
  };
  api = () => {
    b.get(`getmarketsummaries`)
      .then(response => {
        console.log(response.data.result, "getmarketsummaries");
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
  change = () => {
    if (this.state.v.length < 2) return;
    this.setState(state => {
      const vol = [...state.v];

      const lengthv = vol.length;
      let lastvol = vol[lengthv - 2],
        headvol = vol[lengthv - 1],
        b = [],
        date1 = null,
        date2 = null,
        // m = [],
        prc;

      const [head] = headvol;
      const [last] = lastvol;
      date1 = new Date(head[2].TimeStamp);
      date2 = new Date(last[2].TimeStamp);
      console.log(
        date1 > date2, //false
        date1 < date2, //true
        date1 >= date2, //false
        date1 <= date2 //true );
      );

      for (let i in head) {
        //procenty chyba sią źle
        prc = ((last[i].volBTC - head[i].volBTC) / head[i].volBTC) * 100;

        if (isNaN(prc)) prc = 0;
        // m[i] = prc;
        b.push({
          MarketName: head[i].martet,
          Procenty: parseFloat(prc.toFixed(2))
        });
      }
      //doribić max
      // let max = Math.max(...m);
      // console.log(max);
      console.log(b);
      return { changevol: b };
    });
  };

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

      // console.log(v, v.length);
      // console.log(a, a.length);
      return { v };
    });

    // }
  };

  render() {
    const { Data, loading, error, v, changevol } = this.state;
    return (
      <div>
        {/* {this.props.render({ Data, loading, error, v, changevol })} */}
      </div>
    );
  }
}
export default Vol;
