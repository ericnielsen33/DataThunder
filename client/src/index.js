import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Store from "./redux/store";
import App from "./components/App";

ReactDOM.render(
  <Store>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Store>,
  document.getElementById("root")
);
