import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter.jsx";
import { store } from "../store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
