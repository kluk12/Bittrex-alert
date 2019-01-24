import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import Vol from "./../vol/Vol";
import ListAlert from "./ListAlert";

class Index extends Component {
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
                <Fragment>
                  <ListAlert Up={upchange} Down={downchange} Updown={Updown} />
                  {/* <h2>{upchange[0] ? upchange[0].Procenty : null}</h2> */}
                </Fragment>
              );
            }}
          />
        </Navbar>
        {/* <Index /> */}
      </Fragment>
    );
  }
}
export default Index;
