import React from "react";
import Cdiaabout from "../images/cdia-about-us.png";
import Card from "react-bootstrap/Card";
import contract from "../images/icons/Contract for Granted Rights 2.png";
import exclusive from "../images/icons/Exclusive Discounts 2.png";
import Flexable from "../images/icons/Flexible Payment Options 2.png";
import Graphic from "../images/icons/Graphic Creative Designs 2.png";
import FreeHousting from "../images/icons/Free Hosting & Domain 2.png";
import FreeSll from "../images/icons/Free SSL 2.png";
import MobileApps from "../images/icons/Mobile Apps 2.png";
import Phetography from "../images/icons/Photography 2.png";
import Performane from "../images/icons/Performance Guarantees 2.png";
import Carousel from "react-bootstrap/Carousel";
import Eslam_Fares from "../images/team/WhatsApp Image 2023-08-27 at 12.55.21.jpeg";
import Maria_Refaat from "../images/team/WhatsApp Image 2023-08-27 at 12.55.21 (1).jpeg";
import Eslam_Mohamed from "../images/team/WhatsApp Image 2023-08-27 at 12.55.21 (2).jpeg";
import Amr_Elmahd from "../images/team/WhatsApp Image 2023-08-27 at 12.55.21 (3).jpeg";
import Ashraf_Nabil from "../images/team/WhatsApp Image 2023-08-27 at 12.55.21 (4).jpeg";
import Marwan from "../images/team/marwan.jpeg";

import "./about.css";
export default function About() {
  return (
    <div className="about text-white ">
      <div class="container  p-5 ">
        <div class="  text-center   roll-in-left">
          <img src={Cdiaabout} alt="" class="w-50" />
        </div>
        <div className="row">
          <div className=" col-md-6 p-5">
            <div>
              <h1 className="about-heading primart-heading">About Us - Cdia</h1>
              <h4 className="about-descriptoin">
                Welcome to Cdia, where innovation meets transformation. As a
                pioneering software and marketing company, we're dedicated to
                propelling businesses into the digital future with ingenious
                solutions and impactful strategies.
              </h4>
            </div>
            <div className=" my-5">
              <h1 className="primart-heading">Our Story</h1>
              <h4 className="our-story-description">
                Founded 2017, Cdia emerged from a shared vision among a group of
                tech enthusiasts and marketing mavericks. Our journey began with
                a simple yet powerful idea: to bridge the gap between
                exceptional software and dynamic marketing, providing businesses
                with a holistic approach to growth.
              </h4>
              <h3 class="bg-warning text-white my-5 w-25 p-2">
                This Is Not All .....
              </h3>
            </div>
          </div>
          <dic className="col-md-6 p-5">
            <div className="">
              <h1 className="primart-heading">Why Choose Cdia?</h1>
              <h4 className="why-chooce-description">
                Innovative Fusion: We're the catalyst for change, seamlessly
                merging the realms of software and marketing to create
                strategies that resonate, captivate, and convert.
                <br /> Tailored Solutions: We understand that each business has
                unique needs.
                <br /> That's why our approach is never one-size-fits-all.
                <br /> We craft customized software and marketing strategies
                that align perfectly with your goals.
                <br /> Expertise Beyond Boundaries: Our team comprises visionary
                software architects and dynamic marketing strategists. <br />{" "}
                With a wealth of expertise, we're equipped to tackle challenges
                from every angle. Results-Driven: We're not satisfied with
                mediocrity.
                <br /> Our driving force is the pursuit of exceptional results –
                the kind that transform businesses and set new industry
                standards.
                <br />
                Client-Centric Approach: Your success is our purpose.
                <br /> We thrive on collaboration, valuing your insights and
                vision every step of the way.
                <br /> Infinite Possibilities: In a digital world that's always
                evolving, we're your constant partners.
                <br /> We keep our finger on the pulse of technology and trends
                to ensure your solutions remain cutting-edge.
              </h4>
            </div>
          </dic>
        </div>

        <section className="my-5">
          {" "}
          <h1 class="heading text-white">Meet The Team </h1>
          <Carousel>
            <Carousel.Item className="my-5   ">
              <div className="d-flex justify-content-center">
                {" "}
                <div class="row w-75 ">
                  <div class="d-flex gap-2">
                    <div class="col-md-4 text-center">
                      <img
                        src={Eslam_Fares}
                        alt=""
                        class="    cursor-img-container rounded-circle "
                      />
                      <div className="p-2 mt-3">
                        <h1 className="team-heading-name">Eslam Fares</h1>
                        <p className="team-description">
                          Founder & Mobile Developer
                        </p>
                      </div>
                    </div>

                    <div class="col-md-4 text-center">
                      <img
                        src={Eslam_Mohamed}
                        alt=""
                        class="    cursor-img-container rounded-circle "
                      />
                      <div className="p-2 mt-3">
                        <h1 className="team-heading-name">Eslam Mohamed</h1>
                        <p className="team-description">Backend Developer </p>
                      </div>
                    </div>
                    <div class="col-md-4 text-center">
                      <img
                        src={Amr_Elmahd}
                        alt=""
                        class="    cursor-img-container rounded-circle "
                      />

                      <div className="p-2 mt-3">
                        <h1 className="team-heading-name">Amr Elmahdy</h1>
                        <p className="team-description">
                          Founder & Marketing Specialist{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </Carousel.Item>
            <Carousel.Item className="my-5   ">
              <div className="d-flex justify-content-center">
                {" "}
                <div class="row w-75 ">
                  <div class="d-flex gap-2">
                    <div class="col-md-4 text-center ">
                      <img
                        src={Maria_Refaat}
                        alt=""
                        class="   cursor-img-container rounded-circle "
                      />
                      <div className="p-2 mt-3">
                        <h1 className="team-heading-name">Maria Refaat</h1>
                        <p className="team-description">Sales Executive </p>
                      </div>
                    </div>

                    <div class="col-md-4 text-center ">
                      <img
                        src={Ashraf_Nabil}
                        alt=""
                        class="  cursor-img-container rounded-circle"
                      />
                      <div className="p-2 mt-3">
                        <h1 className="team-heading-name">Ashraf Nabil</h1>
                        <p className="team-description">Frontend Developer</p>
                      </div>
                    </div>
                    <div class="col-md-4 text-center ">
                      <img
                        src={Marwan}
                        alt=""
                        class=" cursor-img-container rounded-circle"
                      />
                      <div className="p-2 mt-3">
                        <h1 className="team-heading-name">Marwan</h1>
                        <p className="team-description">Frontend Developer</p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </Carousel.Item>
          </Carousel>
        </section>
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
                <Card.Text className="lead  mt-3">
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
                <Card.Text className="lead  mt-3">
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
                <Card.Text className="lead  mt-3">
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
                <Card.Text className="lead  mt-3">
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
                <Card.Text className="lead  mt-3">
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
                <Card.Text className="lead  mt-3">
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
                <Card.Text className="lead  mt-3">
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
                <Card.Text className="lead  mt-3">
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
                <Card.Text className="lead  mt-3">
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
