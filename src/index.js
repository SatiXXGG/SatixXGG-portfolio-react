import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
//Possible routes
import Home from "./Pages/Home.jsx";
import Prices from "./Pages/Prices.jsx";
import ExamplesUI from "./Pages/ExamplesUI.jsx";
import ExamplesBuild from "./Pages/ExamplesBuild.jsx";
import ScriptingExample from "./Pages/ExamplesScripting.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
alert("This site is made for Full HD devices and 100% zoom!");

const Router = createHashRouter([
  {
    path: "/SatixXGG-portfolio-react",
    element: <Home />,
  },

  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/SatixXGG-portfolio-react/prices",
    element: <Prices />,
  },
  {
    path: "/SatixXGG-portfolio-react/examples/UI",
    element: <ExamplesUI />,
  },
  {
    path: "/SatixXGG-portfolio-react/examples/Building",
    element: <ExamplesBuild />,
  },
  {
    path: "/SatixXGG-portfolio-react/examples/Scripting",
    element: <ScriptingExample />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={Router}>
    </RouterProvider>
  </React.StrictMode>
);
