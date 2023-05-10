import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Context } from "./Context";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Provider } from "react-redux";
import { store } from "./components/Store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context>
    <Provider store={store}>
      <App />
    </Provider>
  </Context>
);
