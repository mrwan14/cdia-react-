import React from "react";
import "./index.css";
import { Outlet } from "react-router-dom";
import Navigationbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import ContactUsFooter from "./Home/ContactUsFooter";

export default function Routing() {
  return (
    <div>
      <Navigationbar />
      <Outlet></Outlet>
      <ContactUsFooter />
      <Footer />
    </div>
  );
}
