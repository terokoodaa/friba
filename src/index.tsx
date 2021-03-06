import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

import "bulma/css/bulma.css";

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
