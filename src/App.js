import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./componets/panel/Index";
import Forms from "./componets/panel/forms/Index";
import FavoritAlert from "./componets/panel/FavoritAlert/Index";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/Addalert" component={Forms} />
            <Route path="/Favoritalert" component={FavoritAlert} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
