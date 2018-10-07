import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import MainStore from './MainStore';

const Root = (
  <Provider MainStore={MainStore}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));
registerServiceWorker();
