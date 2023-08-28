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
import PageNotFound from "./PageNotFound/PageNotFound";
import DigitalMarketing from "./Services/DigitalMarketing/DigitalMarketing";
import Websites from "./Services/Websites/Websites";
import MobileApps from "./Services/MobileApps/MobileApps";
import DigitalMarketingPortfolio from "./Portfolio/DigitalMarketing/DigitalMarketingPortfolio";
import WebsiesPortfolio from "./Portfolio/Websites/WebsiesPortfolio";
import MobileAppsPortfolio from "./Portfolio/MobileApps/MobileAppsPortfolio";

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
          path: "*",
          element: <PageNotFound /> /* or like this */,
        },
        {
          path: "/about",
          element: <About /> /* or like this */,
        },
        {
          path: "/contact-us",
          element: <ContactUS /> /* or like this */,
        },
        {
          path: "/digital-marketing",
          element: <DigitalMarketing /> /* or like this */,
        },
        {
          path: "/websites",
          element: <Websites /> /* or like this */,
        },
        {
          path: "/mobile-apps",
          element: <MobileApps /> /* or like this */,
        },
        {
          path: "/digital-marketing-portfolio",
          element: <DigitalMarketingPortfolio /> /* or like this */,
        },
        {
          path: "/websites-portfolio",
          element: <WebsiesPortfolio /> /* or like this */,
        },
        {
          path: "/mobile-apps-portfolio",
          element: <MobileAppsPortfolio /> /* or like this */,
        },
      ],
      // errorElement: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
