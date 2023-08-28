import React from "react";
import DigitalMarketingImg from "../../images/marketing-2.png";
import slide3 from "../../images/slider3.png";
import icon from "../../images/icons/Social Media Management 2.png";
import digitalmarketing from "../../images/icons/Exclusive Discounts 2.png";
import client from "../../images/clients/a sushi.jpg";
import client2 from "../../images/clients/berry home lst.jpg";
import { BiLinkExternal } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import Carousel from "react-bootstrap/Carousel";

export default function Websites() {
  return (
    <div className="digital-marketing text-center container">
      <div className="my-5">
        <img src={DigitalMarketingImg} alt="" className="w-50 my-5" />
      </div>
      <h3 className="  my-5">
        we can develop a new marketing plans to support your business.
      </h3>
      <div className=" for-margin">
        <div className="row  ">
          <div className="col-md-5 offset-1 text-start ">
            <h1 className="my-5">Social media</h1>
            <h3 className="fw-light">
              We are talking here about right targeting, it’s not just social
              media! <br /> <br /> HERE, We make sure that you will reach your
              perfect target and get successful outputs.
            </h3>
          </div>
          <div className="col-md-6 text-center ">
            <img src={slide3} alt="" className="w-50" />
          </div>
        </div>
      </div>
      <div className=" for-margin">
        <div className="row  ">
          <div className="col-md-5 offset-1 text-start ">
            <div>
              {" "}
              <img src={icon} alt="" className=" rounded-circle w-25" />
            </div>{" "}
            <h1 className="mb-4">Marketing Plan</h1>
            <h3 className="fw-light">
              We appreciate your project idea and seek for adding a real value
              for it through a professional marketing plan that serve your
              activity in a practical way through a precise idea, content and
              targeting for your ads and modern and flexible engagement of your
              audience.
            </h3>
          </div>
          <div className="col-md-5  offset-1 for-right-margin text-start ">
            <div>
              {" "}
              <img src={icon} alt="" className=" rounded-circle w-25" />
            </div>{" "}
            <h1 className="mb-4">Marketing Plan</h1>
            <h3 className="fw-light">
              We appreciate your project idea and seek for adding a real value
              for it through a professional marketing plan that serve your
              activity in a practical way through a precise idea, content and
              targeting for your ads and modern and flexible engagement of your
              audience.
            </h3>{" "}
          </div>
        </div>
      </div>
      <div className=" for-margin">
        <div className="row  ">
          <div className="col-md-5 offset-1 text-start ">
            <div>
              {" "}
              <img src={icon} alt="" className=" rounded-circle w-25" />
            </div>{" "}
            <h1 className="mb-4">Marketing Plan</h1>
            <h3 className="fw-light">
              We appreciate your project idea and seek for adding a real value
              for it through a professional marketing plan that serve your
              activity in a practical way through a precise idea, content and
              targeting for your ads and modern and flexible engagement of your
              audience.
            </h3>
          </div>
          <div className="col-md-5  offset-1 for-right-margin text-start ">
            <div>
              {" "}
              <img src={icon} alt="" className=" rounded-circle w-25" />
            </div>{" "}
            <h1 className="mb-4">Marketing Plan</h1>
            <h3 className="fw-light">
              We appreciate your project idea and seek for adding a real value
              for it through a professional marketing plan that serve your
              activity in a practical way through a precise idea, content and
              targeting for your ads and modern and flexible engagement of your
              audience.
            </h3>{" "}
          </div>
        </div>
      </div>
      <div className="border my-5 "></div>

      <div>
        <div className="text-start  ">
          <h1 className=" for-heading-margin ">From Our Portfolio</h1>
        </div>
        <Carousel>
          <Carousel.Item className="my-5    ">
            <div className="d-flex justify-content-center">
              {" "}
              <div className="form-service-container m-auto">
                {" "}
                <div className="row ">
                  <div className="col-md-4 text-center my-5 ">
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
                  <div className="col-md-4 text-center my-5 ">
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
                  <div className="col-md-4 text-center my-5 ">
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
                  <div className="col-md-4 text-center my-5 ">
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
                  <div className="col-md-4 text-center my-5 ">
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
                  <div className="col-md-4 text-center my-5 ">
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
        </Carousel>
        <button className="btn btn-Portfolio"> Show All Portfolio</button>
      </div>

      <div className="border my-5 "></div>

      <div>
        {" "}
        <div className="text-start ">
          <h1 className=" for-heading-margin">Other Services</h1>
        </div>
        <div className="row">
          <div className="col-md-4 text-center my-5">
            <img src={digitalmarketing} className="w-25" alt="" />
            <h4 className=" my-3">Digital Marketing</h4>
          </div>
          <div className="col-md-4 text-center my-5">
            <img src={digitalmarketing} className="w-25" alt="" />
            <h4 className=" my-3">Digital Marketing</h4>
          </div>
          <div className="col-md-4 text-center my-5">
            <img src={digitalmarketing} className="w-25" alt="" />
            <h4 className=" my-3">Digital Marketing</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
