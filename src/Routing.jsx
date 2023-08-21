import React from "react";
import "./index.css";
import { Outlet } from "react-router-dom";
import Navigationbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Routing() {
  return (
    <div>
      {" "}
      <Navigationbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
