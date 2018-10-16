import React, { Component } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import withRoot from "./withRoot";
import Header from "./components/Layout/Header";
import Dashboard from "./views/Dashboard";
import Register from "./views/Register";
import Signin from "./views/Signin";

function applyRouter(wrappedComponent) {
  return withRouter(wrappedComponent);
}

function applyRootStyles(wrappedComponent){
  return withRoot(wrappedComponent)
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/dashboard" render={applyRouter(Dashboard)} />
            <Route exact path="/register" render={applyRouter(Register)} />
            <Route exact path="/signin" render={applyRouter(Signin)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default applyRootStyles(App);
