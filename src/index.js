import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { getTotals } from "./redux/slices/cartSlice";

store.dispatch(getTotals())
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
