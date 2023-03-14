import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Store from "./GlobalStore/Reducer/index";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider  store={Store}>  
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>

);
