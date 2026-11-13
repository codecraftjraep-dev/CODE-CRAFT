import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import logo from "./assets/codecraft-logo.png";
import "./index.css";

const favicon = document.querySelector("link[rel='icon']");

if (favicon) {
  favicon.href = logo;
  favicon.type = "image/png";
} else {
  const icon = document.createElement("link");
  icon.rel = "icon";
  icon.type = "image/png";
  icon.href = logo;
  document.head.appendChild(icon);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
