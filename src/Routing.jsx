import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import About from "./About/About";
import Home from "./Home/Home";
import Navigationbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Routing() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About /> /* or like this */,
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Navigationbar />

      <RouterProvider router={router} />
      <Footer/>
    </React.StrictMode>
  );

  return <div></div>;
}
