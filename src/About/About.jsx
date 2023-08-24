import React from "react";
import Cdiaabout from "../images/cdia-about-us.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import contract from "../images/Contract for Granted Rights.png";
import exclusive from "../images/Exclusive Discounts.png";
import Flexable from "../images/Flexible Payment Options.png";
import Graphic from "../images/Graphic Creative Designs.png";
import FreeHousting from "../images/Free Hosting & Domain.png";
import FreeSll from "../images/Free SSL.png";
import MobileApps from "../images/Mobile Apps.png";
import Phetography from "../images/Photography.png";
import Performane from "../images/Performance Guarantees.png";

import "./about.css";
export default function About() {
  return (
    <div className="about bg-white ">
      <div class="container  p-5 ">
        <div class="row ">
          <div class="col-md-6 d-flex align-items-center mt-5">
            <div>
              <h1>About Cdia</h1>
              <h4>
                Cdia Company is one of the leading companies in the field of
                digital marketing, website design, mobile apps development, and
                media production. <br />
                <br />
                It was founded in 2017 and has been a part of numerous
                successful projects, engaging with over 300 clients across
                various industries.
                <br />
                <br />
                We always strive to select the most qualified professionals to
                work with us, ensuring the highest quality that we aim to
                deliver from day one.
              </h4>
              <h3 class="bg-warning text-white my-3 w-25">
                This Is Not All .....
              </h3>
            </div>
          </div>
          <div class="col-md-6">
            <img src={Cdiaabout} alt="" class="w-100" />
          </div>
        </div>
        <h2>Benfites You Get From Cdia .</h2>
        <div className="container  text-center my-5">
          <div className="row gap-5   ">
            <Card className="ms-5   card  ">
              <div className="d-flex justify-content-center mt-5">
                <Card.Img variant="top" src={contract} className="w-50 " />
              </div>
              <Card.Body>
                <Card.Title className="fs-3 fw-bold mt-4">
                  Contract for Granted Rights
                </Card.Title>
                <Card.Text className="lead mt-3">
                  Establishing a formal contract that outlines the rights and
                  responsibilities of both the client and the company, ensuring
                  transparency and legal clarity.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="ms-5   card  ">
              <div className="d-flex justify-content-center mt-5">
                <Card.Img variant="top" src={exclusive} className="w-50 " />
              </div>
              <Card.Body>
                <Card.Title className="fs-3 fw-bold mt-4">
                  Exclusive Discounts{" "}
                </Card.Title>
                <Card.Text className="lead mt-3">
                  Providing Special Pricing Or Exclusive Discounts To Long-Term
                  Or High-Volume Clients.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="ms-5   card  ">
              <div className="d-flex justify-content-center mt-5">
                <Card.Img variant="top" src={Flexable} className="w-50 " />
              </div>
              <Card.Body>
                <Card.Title className="fs-3 fw-bold mt-4">
                  Flexible Payment Options{" "}
                </Card.Title>
                <Card.Text className="lead mt-3">
                  Offering Flexible Payment Plans Or Financing Options To Make
                  Products Or Services More Accessible.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="ms-5   card  ">
              <div className="d-flex justify-content-center mt-5">
                <Card.Img variant="top" src={Graphic} className="w-50 " />
              </div>
              <Card.Body>
                <Card.Title className="fs-3 fw-bold mt-4">
                  Graphic Creative Designs{" "}
                </Card.Title>
                <Card.Text className="lead mt-3">
                  Offering Expert Graphic Design Services For Branding,
                  Marketing Materials, Logos, And Visuals That Enhance Clients'
                  Visual Identity.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="ms-5   card  ">
              <div className="d-flex justify-content-center mt-5">
                <Card.Img variant="top" src={FreeHousting} className="w-50 " />
              </div>
              <Card.Body>
                <Card.Title className="fs-3 fw-bold mt-4">
                  Free Hosting & Domain
                </Card.Title>
                <Card.Text className="lead mt-3">
                  Including A Complimentary Year Of Hosting Services And A
                  Domain Name Registration For Clients' Websites, Reducing
                  Initial Costs.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="ms-5   card  ">
              <div className="d-flex justify-content-center mt-5">
                <Card.Img variant="top" src={FreeSll} className="w-50 " />
              </div>
              <Card.Body>
                <Card.Title className="fs-3 fw-bold mt-4">Free SSL</Card.Title>
                <Card.Text className="lead mt-3">
                  Providing Clients With Free Secure Sockets Layer (SSL)
                  Certificates To Enhance The Security Of Their Websites And
                  Protect Sensitive Data.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="ms-5   card  ">
              <div className="d-flex justify-content-center mt-5">
                <Card.Img variant="top" src={MobileApps} className="w-50 " />
              </div>
              <Card.Body>
                <Card.Title className="fs-3 fw-bold mt-4">
                  Mobile Apps
                </Card.Title>
                <Card.Text className="lead mt-3">
                  Developing Mobile Applications That Enable Clients To Engage
                  With Their Customers And Provide Valuable Services On
                  Smartphones And Tablets.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="ms-5   card  ">
              <div className="d-flex justify-content-center mt-5">
                <Card.Img variant="top" src={Phetography} className="w-50 " />
              </div>
              <Card.Body>
                <Card.Title className="fs-3 fw-bold mt-4">
                  Photography
                </Card.Title>
                <Card.Text className="lead mt-3">
                  Providing Professional Photography Services For Clients'
                  Products, Events, Locations, Or Personnel To Enhance Their
                  Visual Representation.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="ms-5   card   ">
              <div className="d-flex justify-content-center mt-5">
                <Card.Img variant="top" src={Performane} className="w-50 " />
              </div>
              <Card.Body>
                <Card.Title className="fs-3 fw-bold mt-4">
                  Performance Guarantees{" "}
                </Card.Title>
                <Card.Text className="lead mt-3">
                  Guaranteeing Specific Performance Outcomes For Products Or
                  Services, Providing Assurance To Clients.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
