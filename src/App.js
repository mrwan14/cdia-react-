import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import About from "./About/About";
import Home from "./Home/Home";
import Navigationbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import ContactUS from "./Contact-Us/ContactUS";
import Routing from "./Routing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Routing />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About /> /* or like this */,
        },
        {
          path: "/contact-us",
          element: <ContactUS /> /* or like this */,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
