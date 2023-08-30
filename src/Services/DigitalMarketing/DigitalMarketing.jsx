import React from "react";
import "./digital-marketing.css";
import DigitalMarketingImg from "../../images/marketing-2.png";
import slide3 from "../../images/slider3.png";
import icon from "../../images/icons/Social Media Management 2.png";
import digitalmarketing from "../../images/icons/Exclusive Discounts 2.png";
import client from "../../images/clients/a sushi.jpg";
import client2 from "../../images/clients/berry home lst.jpg";
import { BiLinkExternal } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

export default function DigitalMarketing() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      className="digital-marketing text-center container"
      id="digital-marketing"
    >
      <div className="my-5">
        <img src={DigitalMarketingImg} alt="" className="w-50 my-5" />
      </div>
      <h3 className="  my-5">
        we can develop a new marketing plans to support your business.
      </h3>
      <div className=" for-margin">
        <div className="row  ">
          <div className="col-sm-5 offset-1 text-start ">
            <h1 className="my-5">Social media</h1>
            <h3 className="fw-light py-3 px-2  ">
              We are talking here about right targeting, it’s not just social
              media! <br /> HERE, We make sure that you will reach your perfect
              target and get successful outputs.
            </h3>
          </div>
          <div className="col-sm-6 text-center ">
            <img src={slide3} alt="" className="w-50" />
          </div>
        </div>
      </div>
      <div className=" for-margin">
        <div className="row  ">
          <div className="col-sm-5 offset-1 text-start ">
            <div>
              {" "}
              <img src={icon} alt="" className=" rounded-circle w-25" />
            </div>{" "}
            <h1 className="mb-4">Marketing Plan</h1>
            <h3 className="fw-light py-5 px-2 ">
              We appreciate your project idea and seek for adding a real <br />{" "}
              value for it through a professional marketing plan that serve{" "}
              <br /> your activity in a practical way through a precise idea,
              <br /> content and targeting for your ads and modern and flexible
              engagement of your audience.
            </h3>
          </div>
          <div className="col-sm-5  offset-1 for-right-margin text-start ">
            <div>
              {" "}
              <img src={icon} alt="" className=" rounded-circle w-25" />
            </div>{" "}
            <h1 className="mb-4">Marketing Plan</h1>
            <h3 className="fw-light py-5 px-2 ">
              We appreciate your project idea and seek for adding a real <br />{" "}
              value for it through a professional marketing plan that serve{" "}
              <br /> your activity in a practical way through a precise idea,
              <br /> content and targeting for your ads and modern and flexible
              engagement of your audience.
            </h3>
          </div>
        </div>
      </div>
      <div className=" for-margin">
        <div className="row  ">
          <div className="col-sm-5 offset-1 text-start ">
            <div>
              {" "}
              <img src={icon} alt="" className=" rounded-circle w-25" />
            </div>{" "}
            <h1 className="mb-4">Marketing Plan</h1>
            <h3 className="fw-light py-5 px-2 ">
              We appreciate your project idea and seek for adding a real <br />{" "}
              value for it through a professional marketing plan that serve{" "}
              <br /> your activity in a practical way through a precise idea,
              <br /> content and targeting for your ads and modern and flexible
              engagement of your audience.
            </h3>
          </div>
          <div className="col-sm-5  offset-1 for-right-margin text-start ">
            <div>
              {" "}
              <img src={icon} alt="" className=" rounded-circle w-25" />
            </div>{" "}
            <h1 className="mb-4">Marketing Plan</h1>
            <h3 className="fw-light py-5 px-2 ">
              We appreciate your project idea and seek for adding a real <br />{" "}
              value for it through a professional marketing plan that serve{" "}
              <br /> your activity in a practical way through a precise idea,
              <br /> content and targeting for your ads and modern and flexible
              engagement of your audience.
            </h3>
          </div>
        </div>
      </div>
      <div className="border my-5 "></div>

      <div>
        <div className="text-start  ">
          <h1 className=" for-heading-margin ">From Our Portfolio</h1>
        </div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .3"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            {" "}
            <div className="from-our-portfolio-container text-center my-5 ">
              <div className="service-container">
                <div className="img-service-container">
                  <img src={client} className="w-100" alt="" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="text-warning my-3">
                    {" "}
                    <BiLinkExternal /> Visit
                  </h4>
                  <h5 className=" m-5">
                    <BsFillBookmarkFill /> Digital Marketing, Facebook{" "}
                  </h5>
                  <h3 className="text-warning">Armada Restraunt </h3>
                  <p className="text-center m-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorem, ratione dolorum? Nostrum, repellat iusto vero est
                    mollitia beatae odit obcaecati voluptas inventore aut neque
                    animi error hic quis eaque quaerat.
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="from-our-portfolio-container text-center my-5 ">
              <div className="service-container">
                <div className="img-service-container">
                  <img src={client} className="w-100" alt="" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="text-warning my-3">
                    {" "}
                    <BiLinkExternal /> Visit
                  </h4>
                  <h5 className=" m-5">
                    <BsFillBookmarkFill /> Digital Marketing, Facebook{" "}
                  </h5>
                  <h3 className="text-warning">Armada Restraunt </h3>
                  <p className="text-center m-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorem, ratione dolorum? Nostrum, repellat iusto vero est
                    mollitia beatae odit obcaecati voluptas inventore aut neque
                    animi error hic quis eaque quaerat.
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="from-our-portfolio-container text-center my-5 ">
              <div className="service-container">
                <div className="img-service-container">
                  <img src={client2} className="w-100" alt="" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="text-warning my-3">
                    {" "}
                    <BiLinkExternal /> Visit
                  </h4>
                  <h5 className=" m-5">
                    <BsFillBookmarkFill /> Digital Marketing, Facebook{" "}
                  </h5>
                  <h3 className="text-warning">Armada Restraunt </h3>
                  <p className="text-center m-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorem, ratione dolorum? Nostrum, repellat iusto vero est
                    mollitia beatae odit obcaecati voluptas inventore aut neque
                    animi error hic quis eaque quaerat.
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="from-our-portfolio-container text-center my-5 ">
              <div className="service-container">
                <div className="img-service-container">
                  <img src={client2} className="w-100" alt="" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="text-warning my-3">
                    {" "}
                    <BiLinkExternal /> Visit
                  </h4>
                  <h5 className=" m-5">
                    <BsFillBookmarkFill /> Digital Marketing, Facebook{" "}
                  </h5>
                  <h3 className="text-warning">Armada Restraunt </h3>
                  <p className="text-center m-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorem, ratione dolorum? Nostrum, repellat iusto vero est
                    mollitia beatae odit obcaecati voluptas inventore aut neque
                    animi error hic quis eaque quaerat.
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="from-our-portfolio-container text-center my-5 ">
              <div className="service-container">
                <div className="img-service-container">
                  <img src={client2} className="w-100" alt="" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="text-warning my-3">
                    {" "}
                    <BiLinkExternal /> Visit
                  </h4>
                  <h5 className=" m-5">
                    <BsFillBookmarkFill /> Digital Marketing, Facebook{" "}
                  </h5>
                  <h3 className="text-warning">Armada Restraunt </h3>
                  <p className="text-center m-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorem, ratione dolorum? Nostrum, repellat iusto vero est
                    mollitia beatae odit obcaecati voluptas inventore aut neque
                    animi error hic quis eaque quaerat.
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="from-our-portfolio-container text-center my-5 ">
              <div className="service-container">
                <div className="img-service-container">
                  <img src={client2} className="w-100" alt="" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="text-warning my-3">
                    {" "}
                    <BiLinkExternal /> Visit
                  </h4>
                  <h5 className=" m-5">
                    <BsFillBookmarkFill /> Digital Marketing, Facebook{" "}
                  </h5>
                  <h3 className="text-warning">Armada Restraunt </h3>
                  <p className="text-center m-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorem, ratione dolorum? Nostrum, repellat iusto vero est
                    mollitia beatae odit obcaecati voluptas inventore aut neque
                    animi error hic quis eaque quaerat.
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="from-our-portfolio-container text-center my-5 ">
              <div className="service-container">
                <div className="img-service-container">
                  <img src={client} className="w-100" alt="" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="text-warning my-3">
                    {" "}
                    <BiLinkExternal /> Visit
                  </h4>
                  <h5 className=" m-5">
                    <BsFillBookmarkFill /> Digital Marketing, Facebook{" "}
                  </h5>
                  <h3 className="text-warning">Armada Restraunt </h3>
                  <p className="text-center m-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorem, ratione dolorum? Nostrum, repellat iusto vero est
                    mollitia beatae odit obcaecati voluptas inventore aut neque
                    animi error hic quis eaque quaerat.
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
        </Carousel>
        ;
        {/* <Carousel>
          <Carousel.Item className="my-5    ">
            <div className="d-flex justify-content-center">
              {" "}
              <div className="form-service-container m-auto">
                {" "}
                <div className="row ">
                  <div className="from-our-portfolio-container text-center my-5 ">
                    <div className="service-container">
                      <div className="img-service-container">
                        <img src={client} className="w-100" alt="" />
                      </div>{" "}
                      <div>
                        {" "}
                        <h4 className="text-warning my-3">
                          {" "}
                          <BiLinkExternal /> Visit
                        </h4>
                        <h5 className=" m-5">
                          <BsFillBookmarkFill /> Digital Marketing, Facebook{" "}
                        </h5>
                        <h3 className="text-warning">Armada Restraunt </h3>
                        <p className="text-center m-5">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dolorem, ratione dolorum? Nostrum, repellat
                          iusto vero est mollitia beatae odit obcaecati voluptas
                          inventore aut neque animi error hic quis eaque
                          quaerat.
                        </p>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="from-our-portfolio-container text-center my-5 ">
                    <div className="service-container">
                      <div className="img-service-container">
                        <img src={client2} className="w-100" alt="" />
                      </div>{" "}
                      <div>
                        {" "}
                        <h4 className="text-warning my-3">
                          {" "}
                          <BiLinkExternal /> Visit
                        </h4>
                        <h5 className=" m-5">
                          <BsFillBookmarkFill /> Digital Marketing, Facebook{" "}
                        </h5>
                        <h3 className="text-warning">Armada Restraunt </h3>
                        <p className="text-center m-5">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dolorem, ratione dolorum? Nostrum, repellat
                          iusto vero est mollitia beatae odit obcaecati voluptas
                          inventore aut neque animi error hic quis eaque
                          quaerat.
                        </p>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="from-our-portfolio-container text-center my-5 ">
                    <div className="service-container">
                      <div className="img-service-container">
                        <img src={client} className="w-100" alt="" />
                      </div>{" "}
                      <div>
                        {" "}
                        <h4 className="text-warning my-3">
                          {" "}
                          <BiLinkExternal /> Visit
                        </h4>
                        <h5 className=" m-5">
                          <BsFillBookmarkFill /> Digital Marketing, Facebook{" "}
                        </h5>
                        <h3 className="text-warning">Armada Restraunt </h3>
                        <p className="text-center m-5">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dolorem, ratione dolorum? Nostrum, repellat
                          iusto vero est mollitia beatae odit obcaecati voluptas
                          inventore aut neque animi error hic quis eaque
                          quaerat.
                        </p>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="my-5   ">
            <div className="d-flex justify-content-center">
              {" "}
              <div className="form-service-container m-auto">
                {" "}
                <div className="row ">
                  <div className="from-our-portfolio-container text-center my-5 ">
                    <div className="service-container">
                      <div className="img-service-container">
                        <img src={client} className="w-100" alt="" />
                      </div>{" "}
                      <div>
                        {" "}
                        <h4 className="text-warning my-3">
                          {" "}
                          <BiLinkExternal /> Visit
                        </h4>
                        <h5 className=" m-5">
                          <BsFillBookmarkFill /> Digital Marketing, Facebook{" "}
                        </h5>
                        <h3 className="text-warning">Armada Restraunt </h3>
                        <p className="text-center m-5">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dolorem, ratione dolorum? Nostrum, repellat
                          iusto vero est mollitia beatae odit obcaecati voluptas
                          inventore aut neque animi error hic quis eaque
                          quaerat.
                        </p>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="from-our-portfolio-container text-center my-5 ">
                    <div className="service-container">
                      <div className="img-service-container">
                        <img src={client} className="w-100" alt="" />
                      </div>{" "}
                      <div>
                        {" "}
                        <h4 className="text-warning my-3">
                          {" "}
                          <BiLinkExternal /> Visit
                        </h4>
                        <h5 className=" m-5">
                          <BsFillBookmarkFill /> Digital Marketing, Facebook{" "}
                        </h5>
                        <h3 className="text-warning">Armada Restraunt </h3>
                        <p className="text-center m-5">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dolorem, ratione dolorum? Nostrum, repellat
                          iusto vero est mollitia beatae odit obcaecati voluptas
                          inventore aut neque animi error hic quis eaque
                          quaerat.
                        </p>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="from-our-portfolio-container text-center my-5 ">
                    <div className="service-container">
                      <div className="img-service-container">
                        <img src={client} className="w-100" alt="" />
                      </div>{" "}
                      <div>
                        {" "}
                        <h4 className="text-warning my-3">
                          {" "}
                          <BiLinkExternal /> Visit
                        </h4>
                        <h5 className=" m-5">
                          <BsFillBookmarkFill /> Digital Marketing, Facebook{" "}
                        </h5>
                        <h3 className="text-warning">Armada Restraunt </h3>
                        <p className="text-center m-5">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dolorem, ratione dolorum? Nostrum, repellat
                          iusto vero est mollitia beatae odit obcaecati voluptas
                          inventore aut neque animi error hic quis eaque
                          quaerat.
                        </p>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel> */}
        <Link to="/digital-marketing-portfolio"  onClick={() => window.scrollTo(0, 0)} >
          <button className="btn btn-Portfolio"> Show All Portfolio</button>
        </Link>{" "}
      </div>

      <div className="border my-5 "></div>

      <div>
        {" "}
        <div className="text-start ">
          <h1 className=" for-heading-margin">Other Services</h1>
        </div>
        <div className="d-flex justify-content-between">
          <div className=" text-center my-5">
            <img src={digitalmarketing} className="w-25" alt="" />
            <h4 className=" my-3">Digital Marketing</h4>
          </div>
          <div className=" text-center my-5">
            <img src={digitalmarketing} className="w-25" alt="" />
            <h4 className=" my-3">Digital Marketing</h4>
          </div>
          <div className=" text-center my-5">
            <img src={digitalmarketing} className="w-25" alt="" />
            <h4 className=" my-3">Digital Marketing</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
