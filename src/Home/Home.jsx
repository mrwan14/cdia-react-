import React from "react";
import Swiper from "../Swiper/Swiper";
import ReadMoreReact from "read-more-react";
import Carousel from "react-bootstrap/Carousel";
import vision from "../images/2.png";
import mission from "../images/1.png";
import mediaProduction from "../images/media production.png";
import digitalMarketing from "../images/digital marketing.png";
import software from "../images/software.png";
import client1 from "../images/clients/161283482_113333390819131_6224718751849317736_n.jpg";
import client2 from "../images/clients/311290518_5737231059671638_8541144970786491117_n.jpg";
import client3 from "../images/clients/327399269_1333245204138499_4987552102262279841_n.png";
import client4 from "../images/clients/Trivel logo color.jpg";
import client5 from "../images/clients/Untitled-1.jpg";
import client6 from "../images/clients/a sushi.jpg";
import client7 from "../images/clients/a3det 7awa pro.jpg";
import client8 from "../images/clients/aaaa.jpg";
import client9 from "../images/clients/berry home lst.jpg";
import client10 from "../images/clients/brunch profile 27 feb 2023.jpg";
import client11 from "../images/clients/et.jpg";
import client12 from "../images/clients/gob pro pic mar 2023.jpg";
import logo from "../images/Cdia logo.png";
import "./home.css";
export default function Home() {
  return (
    <div>
      <Swiper />
      <div className="">
        <div className="vision container my-5 ">
          <div className="row    ">
            <div className="col-md-5 text-center bg-white rounded-5  my-3">
              <div className="d-flex justify-content-center ">
                <div className="img-container ">
                  {" "}
                  <img src={vision} alt="" className="w-75" />
                </div>{" "}
              </div>
              <h3 className=" fw-bolder fs-2 fst-italic ">Our Vision</h3>
              <div className="vision-desc">
                <ReadMoreReact
                  text="
              At [Cdia], our vision is to become a global leader in technology and marketing, revolutionizing how businesses succeed. We aim to blend innovative software solutions with creative marketing strategies to set new standards of excellence. By using the latest technologies like AI and IoT, we want to create game-changing solutions that benefit industries worldwide.
              
              We're driven to reshape marketing, making it more engaging and data-driven. Our goal is to help businesses connect better with their customers by predicting trends and using imaginative approaches. We see ourselves as agents of positive change, contributing to communities around the world through technology and marketing.
              
              Collaboration is key to our vision. We want to bring together partners, clients, and experts to co-create amazing products and strategies. Upholding strong ethics is central to who we are. We're dedicated to being an example of integrity, encouraging ethical practices in the tech and marketing sectors.
              
              We're passionate about our employees' growth and creativity. Our workplace will be a hub of innovation, attracting the best talents who can thrive and contribute to our vision. Ultimately, at [Cdia], our vision is to shape a future where technology and marketing work hand in hand, driving businesses to unprecedented success and leaving a lasting impact on the world.
              "
                  min={200}
                  ideal={400}
                  max={500}
                  readMoreText=" read more...."
                />
              </div>
            </div>
            <div className="col-md-5 offset-lg-2 text-center bg-white rounded-5 my-3">
              <div className="d-flex justify-content-center ">
                <div className="img-container ">
                  {" "}
                  <img src={mission} alt="" className="w-75" />
                </div>{" "}
              </div>{" "}
              <h3 className=" fw-bolder fs-2 fst-italic ">Our Mission</h3>
              <div className="vision-desc">
                <ReadMoreReact
                  text="
              At [Cdia], our vision is to become a global leader in technology and marketing, revolutionizing how businesses succeed. We aim to blend innovative software solutions with creative marketing strategies to set new standards of excellence. By using the latest technologies like AI and IoT, we want to create game-changing solutions that benefit industries worldwide.
              
              We're driven to reshape marketing, making it more engaging and data-driven. Our goal is to help businesses connect better with their customers by predicting trends and using imaginative approaches. We see ourselves as agents of positive change, contributing to communities around the world through technology and marketing.
              
              Collaboration is key to our vision. We want to bring together partners, clients, and experts to co-create amazing products and strategies. Upholding strong ethics is central to who we are. We're dedicated to being an example of integrity, encouraging ethical practices in the tech and marketing sectors.
              
              We're passionate about our employees' growth and creativity. Our workplace will be a hub of innovation, attracting the best talents who can thrive and contribute to our vision. Ultimately, at [Cdia], our vision is to shape a future where technology and marketing work hand in hand, driving businesses to unprecedented success and leaving a lasting impact on the world.
              "
                  min={200}
                  ideal={400}
                  max={500}
                  readMoreText=" read more...."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <section className=" container  mb-5" id="services">
          <h1 className="heading text-white">
            our <span>services</span>
          </h1>

          <div className="box-container ">
            <div className="box">
              <div class="flip-card-inner">
                <div class="flip-card-front  ">
                  <div className="my-5">
                    <img src={mediaProduction} alt="Avatar" />
                    <h1> MEDIA</h1>
                    <h3 className="text-white">Production</h3>
                  </div>
                </div>
                <div class="flip-card-back d-flex  align-items-center">
                  <div>
                    <h1 className="">Media Production</h1>
                    <p className="lead  fw-bold">
                      We Design All Kinds Of Websites For Our Clients - From
                      Landing Pages To Online Stores
                    </p>
                    <a href="mobileWorks.html" className="btn">
                      learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div class="flip-card-inner">
                <div class="flip-card-front  ">
                  <div className="my-5">
                    <img src={digitalMarketing} alt="Avatar" />
                    <h1> DIGITAL</h1>
                    <h3 className="text-white">Marketing</h3>
                  </div>
                </div>
                <div class="flip-card-back d-flex  align-items-center">
                  <div>
                    <h1 className="">digital marketing</h1>
                    <p className="lead  fw-bold">
                      our team has a successful track record of helping brands
                      scale profitably based on high-performing strategies
                    </p>
                    <a href="mobileWorks.html" className="btn">
                      learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div class="flip-card-inner">
                <div class="flip-card-front  ">
                  <div className="my-5">
                    <img src={software} alt="Avatar" />
                    <h1> SOFTWARE</h1>
                    <h3 className="text-white">Mobile Application</h3>
                  </div>
                </div>
                <div class="flip-card-back d-flex  align-items-center">
                  <div>
                    <h1 className="">Mobile Application</h1>
                    <p className="lead  fw-bold">
                      we design and develop mobile apps that delight your users
                      and grow your business. enterprise-grade development
                      combined with outstanding design
                    </p>
                    <a href="mobileWorks.html" className="btn">
                      learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="my-5 our-clients">
        {" "}
        <h1 class="heading text-white">
          <span>Our</span> Clinets
        </h1>
        <Carousel>
          <Carousel.Item className="my-5   ">
            <div className="d-flex justify-content-center">
              {" "}
              <div class="row w-75 ">
                <div class="d-flex gap-2">
                  <div class="col-md-3">
                    <img src={client1} alt="" class="w-75" />

                    <p class="text-white lead"></p>
                  </div>
                  <div class="col-md-3">
                    <img src={client2} alt="" class="w-75" />

                    <p class="text-white lead"></p>
                  </div>
                  <div class="col-md-3">
                    <img src={client3} alt="" class="w-75" />

                    <p class="text-white lead"></p>
                  </div>
                  <div class="col-md-3">
                    <img src={client4} alt="" class="w-75" />

                    <p class="text-white lead"></p>
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
                  <div class="col-md-3">
                    <img src={client5} alt="" class="w-75" />

                    <p class="text-white lead"></p>
                  </div>
                  <div class="col-md-3">
                    <img src={client6} alt="" class="w-75" />

                    <p class="text-white lead"></p>
                  </div>
                  <div class="col-md-3">
                    <img src={client7} alt="" class="w-75" />

                    <p class="text-white lead"></p>
                  </div>
                  <div class="col-md-3">
                    <img src={client8} alt="" class="w-75" />

                    <p class="text-white lead"></p>
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
                  <div class="col-md-3">
                    <img src={client9} alt="" class="w-75" />

                    <p class="text-white lead"></p>
                  </div>
                  <div class="col-md-3">
                    <img src={client10} alt="" class="w-75" />

                    <p class="text-white lead"></p>
                  </div>
                  <div class="col-md-3">
                    <img src={client11} alt="" class="w-75" />

                    <p class="text-white lead"></p>
                  </div>
                  <div class="col-md-3">
                    <img src={client12} alt="" class="w-75" />

                    <p class="text-white lead"></p>
                  </div>
                </div>
              </div>{" "}
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="text-center contact-us text-white my-5">
        <h1 class="heading text-white">
          Contact <span>US</span>
        </h1>
        <img src={logo} alt="" className="w-25" />
        Ready To Talk? DO YOU HAVE A BIG IDEA WE CAN HELP WITH?
        <button className="btn ms-5">Contact us</button>
      </section>
    </div>
  );
}
