import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./componets/panel/Index";

import Navbar from "./componets/panel/Navbar";

import Vol from "./componets/vol/Vol";

// const routes = (
//   <Route component={App}>
//     <Route path="/" component={MainPage}/>
//     <Route path="/page2" component={Page2}/>
//     <Route path="/settings" component={SettingsPage}/>
//   </Route>
// );

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Vol
          render={({ loading, error, changevol, upchange, downchange }) => {
            return (
              <Fragment>
                <h2>{loading.toString()}</h2>
              </Fragment>
            );
          }}
        /> */}
        <Index />
      </Fragment>
    );
  }
}

export default App;
