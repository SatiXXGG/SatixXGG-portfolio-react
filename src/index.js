import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationBar, ContactBar } from "./Utils";
const root = ReactDOM.createRoot(document.getElementById("root"));
alert("This site is made for Full HD devices and 100% zoom!")

root.render(
  <React.StrictMode>
    <NavigationBar />
    <ContactBar />
    <App />
  </React.StrictMode>
);
