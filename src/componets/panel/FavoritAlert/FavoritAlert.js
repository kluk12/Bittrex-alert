import React, { Component, Fragment } from "react";
import { NameMarket } from "../forms/Data";
import Chips from "./Chips";
import chips from "./Chips";
import Snackbars from "./Snackbars";
import { Market } from "./../forms/Data";
import ListAlert from "../ListAlert";

export default class FavoritAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: [],
      i: false,
      alert: []
    };
  }

  componentDidMount = async () => {
    this.LoadFavorites(NameMarket);
  };

  LoadFavorites = f => {
    if (this.state.i === true) return;
    let val,
      arr = [];

    f.map(e => {
      val = localStorage.getItem(e.value);
      val = JSON.parse(val);
      if (val) {
        arr.push(val);
      }
    });
    this.state.i === false
      ? this.setState({ favorite: arr, i: true })
      : this.setState({ favorite: arr });
  };

  FindAlert = (d, f) => {
    let arr = [];
    d.filter(item => {
      if (item.Market) return; //wymuśl filtrowanie
    });
    // console.log(updatedList);
    this.setState(state => {
      return { alert: arr };
    });
  };

  render() {
    const { classes, Up, Down, Updown } = this.props;
    const { favorite } = this.state;
    return (
      <Fragment>
        {/* {console.log(Updown)} */}
        <Chips />

        <ListAlert Updown={Updown} ComponetType="Favorits" />
      </Fragment>
    );
  }
}
