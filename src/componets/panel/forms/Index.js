import React, { Component, Fragment } from "react";
import Forms from "./Forms";
import Navbar from "../Navbar";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Navbar>
          <Forms />
        </Navbar>
      </Fragment>
    );
  }
}
