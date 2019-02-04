import React, { Component, Fragment } from "react";
import Navbar from "../Navbar";
import FavoritAlert from "./FavoritAlert";
import Vol from "../../vol/Vol";

export default class Index extends Component {
  render() {
    return (
      <Fragment>
        <Navbar>
          <Vol
            render={({
              loading,
              error,
              changevol,
              upchange,
              downchange,
              Updown
            }) => {
              return (
                <FavoritAlert Up={upchange} Down={downchange} Updown={Updown} />
              );
            }}
          />
        </Navbar>
      </Fragment>
    );
  }
}
