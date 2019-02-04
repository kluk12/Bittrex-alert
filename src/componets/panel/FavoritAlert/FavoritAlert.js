import React, { Component, Fragment } from "react";
import { NameMarket } from "../forms/Data";
export default class FavoritAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: [],
      i: false
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
      if (val) {
        arr.push(val);
      }
    });
    this.state.i === false
      ? this.setState({ favorite: arr, i: true })
      : this.setState({ favorite: arr });
  };
  render() {
    const { classes, Up, Down, Updown } = this.props;

    return <Fragment>{console.log(this.state.favorite)}</Fragment>;
  }
}
