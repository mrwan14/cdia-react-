import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Cdia logo.png";

export default function ContactUsFooter() {
  return (
    <div>
      {" "}
      <section className="text-center contact-us text-white my-5">
        <h1 class="heading text-white">
          Contact <span>US</span>
        </h1>
        <div className="d-flex justify-content-around">
          <img src={logo} alt="" className="down-logo" />
          <div className="fs-3 d-flex align-items-center">
            {" "}
            Ready To Talk? DO YOU HAVE A BIG IDEA WE CAN HELP WITH?
          </div>{" "}
          <Link to={"/contact-us"} onClick={() => window.scrollTo(0, 0)}>
            {" "}
            <button className="btn ms-5">Contact us</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
