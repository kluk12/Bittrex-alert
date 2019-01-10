import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./componets/panel/Index";
// import {
import Navbar from "./componets/panel/Navbar";
import a from "./componets/panel/a";
import b from "./componets/panel/b";

// getmarkethistory,
//   getcurrencies,
//   getmarkets,
//   getmarketsummaries,
//   getorderbook,
//   getticker
// } from "./componets/api/public_api";

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
        <Index />
      </Fragment>
    );
  }
}

export default App;
