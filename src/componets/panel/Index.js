import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import Vol from "./../vol/Vol";
import ListAlert from "./ListAlert";
import Forms from "./forms/Forms";

class Index extends Component {
  render() {
    return (
      <Fragment>
        {/* <Navbar /> */}
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
                <ListAlert Up={upchange} Down={downchange} Updown={Updown} />
              );
            }}
          />
        </Navbar>
        {/* <Forms /> */}
      </Fragment>
    );
  }
}
export default Index;
