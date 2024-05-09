import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.js";

i18n.init({
  interpolation: { escapeValue: false },  // React already does escaping
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App/>
    </I18nextProvider>
  </React.StrictMode>
);
