import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaBriefcaseMedical } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import webesite from "../../images/web-design-1.png";
import middle from "../../images/middle-image.png";
import "./websites.css";
import { BsWordpress } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Websites() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="websites">
      <div className=" container ">
        <div className="row main-content">
          <div className="col-md-5 p-5 offset-1">
            <img src={webesite} alt="" className="w-100" />
          </div>
          <div className="col-md-5 p-5 ">
            <div>
              <h1 className="mt-5">
                Cdia is the best choice for <br /> building your website
              </h1>{" "}
              <h5 className="fw-light  mt-5 ">
                Developing your brand and appearing it among competitors
                requires a special and distinguished website with a strong
                structure and fast use. Owning a website increases the
                opportunity to reach your customers faster at the local and
                international levels. Cdia helps you build a website with
                the latest SEO standards and distinct designs with powerful
                programming suitable for various commercial and non-commercial
                fields.
              </h5>
              <div className="row mt-5">
                <div className="col-sm-6 ">
                  <div className="d-flex justify-content-between  align-items-center">
                    <BsWordpress className=" websites-icon me-3  " />
                    <h3>WordPress control panel</h3>
                  </div>
                  <div className="d-flex justify-content-between  align-items-center my-5">
                    <BsWordpress className=" websites-icon me-3  " />
                    <h3>WordPress control panel</h3>
                  </div>
                  <div className="d-flex justify-content-between  my-5 align-items-center">
                    <BsWordpress className=" websites-icon me-3  " />
                    <h3>WordPress control panel</h3>
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <div className="d-flex justify-content-between  align-items-center">
                    <BsWordpress className=" websites-icon me-3  " />
                    <h3>WordPress control panel</h3>
                  </div>
                  <div className="d-flex justify-content-between  align-items-center my-5">
                    <BsWordpress className=" websites-icon me-3  " />
                    <h3>WordPress control panel</h3>
                  </div>
                  <div className="d-flex justify-content-between  align-items-center">
                    <BsWordpress className=" websites-icon me-3  " />
                    <h3>WordPress control panel</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-style">
        <div className="container">
          <div className="row">
            <div className="col-md-5 offset-1 p-5">
              <img src={middle} alt="" className="w-100" />
            </div>
            <div className="col-md-5  p-5 text-center m-auto ">
              {" "}
              <h4 className=" middle-style-desc">
                Show your website on all search engines and make it suitable for
                all devices and screens
              </h4>{" "}
              <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
                {" "}
                <button className="btn fs-5 mt-5">
                  {" "}
                  Order Your Website Now
                </button>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container text-center mt-5 p-5">
          <h2 className="p-5">
            We choose for you a design compatible with your brand and easy use
            for your visitors to access all your services without any
            consequences with fast navigation between pages
          </h2>
          <section className="my-5 ">
            {" "}
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive2}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div>
                <div className="my-5">
                  <FaBriefcaseMedical className="website-carsoul-icons" />

                  <h4 className="">Medical Fields</h4>
                </div>
              </div>
              <div>
                {" "}
                <div className="my-5">
                  <FaBriefcaseMedical className="website-carsoul-icons" />

                  <h4 className="">Medical Fields</h4>
                </div>
              </div>
              <div>
                {" "}
                <div className="my-5">
                  <FaBriefcaseMedical className="website-carsoul-icons" />

                  <h4 className="">Medical Fields</h4>
                </div>
              </div>
              <div>
                <div className="my-5">
                  <FaBriefcaseMedical className="website-carsoul-icons" />

                  <h4 className="">Medical Fields</h4>
                </div>
              </div>
            </Carousel>
          </section>
          <div className="border my-5 "></div>

          <div className="mt-5 from-our-portfolio">
            <div className="  d-flex justify-content-between  align-items-center  ">
              <h1 className=" for-heading-margin ">From Our Portfolio</h1>
              <Link to="/websites-portfolio" onClick={() => window.scrollTo(0, 0)}>
                {" "}
                <button className="btn fs-3">Show More </button>
              </Link>{" "}
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
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div>
                <div className="from-our-portfolio-container text-center my-5 ">
                  {" "}
                  <div className="service-container">
                    <div className="img-service-container">
                      <img src={middle} className="w-100" alt="" />
                    </div>{" "}
                    <div>
                      {" "}
                      <h4 className="text-warning my-3"> </h4>
                      <h2 className="text-warning my-5">Armada Restraunt </h2>
                      <div className=" d-flex justify-content-between align-items-center">
                        {" "}
                        <h5 className="text-start m-5  ">Web Design</h5>
                        <div className="d-flex  m-5 justify-content-around align-items-end ">
                          {" "}
                          <ImStatsBars className=" fs-1 me-2" />
                          <h5>123</h5>
                        </div>{" "}
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div className="from-our-portfolio-container text-center my-5 ">
                  {" "}
                  <div className="service-container">
                    <div className="img-service-container">
                      <img src={middle} className="w-100" alt="" />
                    </div>{" "}
                    <div>
                      {" "}
                      <h4 className="text-warning my-3"> </h4>
                      <h2 className="text-warning my-5">Armada Restraunt </h2>
                      <div className=" d-flex justify-content-between align-items-center">
                        {" "}
                        <h5 className="text-start m-5  ">Web Design</h5>
                        <div className="d-flex  m-5 justify-content-around align-items-end ">
                          {" "}
                          <ImStatsBars className=" fs-1 me-2" />
                          <h5>123</h5>
                        </div>{" "}
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div className="from-our-portfolio-container text-center my-5 ">
                  {" "}
                  <div className="service-container">
                    <div className="img-service-container">
                      <img src={middle} className="w-100" alt="" />
                    </div>{" "}
                    <div>
                      {" "}
                      <h4 className="text-warning my-3"> </h4>
                      <h2 className="text-warning my-5">Armada Restraunt </h2>
                      <div className=" d-flex justify-content-between align-items-center">
                        {" "}
                        <h5 className="text-start m-5  ">Web Design</h5>
                        <div className="d-flex  m-5 justify-content-around align-items-end ">
                          {" "}
                          <ImStatsBars className=" fs-1 me-2" />
                          <h5>123</h5>
                        </div>{" "}
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div>
                <div className="from-our-portfolio-container text-center my-5 ">
                  {" "}
                  <div className="service-container">
                    <div className="img-service-container">
                      <img src={middle} className="w-100" alt="" />
                    </div>{" "}
                    <div>
                      {" "}
                      <h4 className="text-warning my-3"> </h4>
                      <h2 className="text-warning my-5">Armada Restraunt </h2>
                      <div className=" d-flex justify-content-between align-items-center">
                        {" "}
                        <h5 className="text-start m-5  ">Web Design</h5>
                        <div className="d-flex  m-5 justify-content-around align-items-end ">
                          {" "}
                          <ImStatsBars className=" fs-1 me-2" />
                          <h5>123</h5>
                        </div>{" "}
                      </div>
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
                      <div className="col-md-4 text-center my-5 ">
                        <div className="service-container">
                          <div className="img-service-container">
                            <img src={middle} className="w-100" alt="" />
                          </div>{" "}
                          <div>
                            {" "}
                            <h4 className="text-warning my-3"> </h4>
                            <h2 className="text-warning my-5">
                              Armada Restraunt{" "}
                            </h2>
                            <div className=" d-flex justify-content-between align-items-center">
                              {" "}
                              <h5 className="text-start m-5  ">Web Design</h5>
                              <div className="d-flex  m-5 justify-content-around align-items-end ">
                                {" "}
                                <ImStatsBars className=" fs-1 me-2" />
                                <h5>123</h5>
                              </div>{" "}
                            </div>
                          </div>{" "}
                        </div>
                      </div>
                      <div className="col-md-4 text-center my-5 ">
                        <div className="service-container">
                          <div className="img-service-container">
                            <img src={middle} className="w-100" alt="" />
                          </div>{" "}
                          <div>
                            {" "}
                            <h4 className="text-warning my-3"> </h4>
                            <h2 className="text-warning my-5">
                              Armada Restraunt{" "}
                            </h2>
                            <div className=" d-flex justify-content-between align-items-center">
                              {" "}
                              <h5 className="text-start m-5  ">Web Design</h5>
                              <div className="d-flex  m-5 justify-content-around align-items-end ">
                                {" "}
                                <ImStatsBars className=" fs-1 me-2" />
                                <h5>123</h5>
                              </div>{" "}
                            </div>
                          </div>{" "}
                        </div>
                      </div>
                      <div className="col-md-4 text-center my-5 ">
                        <div className="service-container">
                          <div className="img-service-container">
                            <img src={middle} className="w-100" alt="" />
                          </div>{" "}
                          <div>
                            {" "}
                            <h4 className="text-warning my-3"> </h4>
                            <h2 className="text-warning my-5">
                              Armada Restraunt{" "}
                            </h2>
                            <div className=" d-flex justify-content-between align-items-center">
                              {" "}
                              <h5 className="text-start m-5  ">Web Design</h5>
                              <div className="d-flex  m-5 justify-content-around align-items-end ">
                                {" "}
                                <ImStatsBars className=" fs-1 me-2" />
                                <h5>123</h5>
                              </div>{" "}
                            </div>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="my-5    ">
                <div className="d-flex justify-content-center">
                  {" "}
                  <div className="form-service-container m-auto">
                    {" "}
                    <div className="row ">
                      <div className="col-md-4 text-center my-5 ">
                        <div className="service-container">
                          <div className="img-service-container">
                            <img src={middle} className="w-100" alt="" />
                          </div>{" "}
                          <div>
                            {" "}
                            <h4 className="text-warning my-3"> </h4>
                            <h2 className="text-warning my-5">
                              Armada Restraunt{" "}
                            </h2>
                            <div className=" d-flex justify-content-between align-items-center">
                              {" "}
                              <h5 className="text-start m-5  ">Web Design</h5>
                              <div className="d-flex  m-5 justify-content-around align-items-end ">
                                {" "}
                                <ImStatsBars className=" fs-1 me-2" />
                                <h5>123</h5>
                              </div>{" "}
                            </div>
                          </div>{" "}
                        </div>
                      </div>
                      <div className="col-md-4 text-center my-5 ">
                        <div className="service-container">
                          <div className="img-service-container">
                            <img src={middle} className="w-100" alt="" />
                          </div>{" "}
                          <div>
                            {" "}
                            <h4 className="text-warning my-3"> </h4>
                            <h2 className="text-warning my-5">
                              Armada Restraunt{" "}
                            </h2>
                            <div className=" d-flex justify-content-between align-items-center">
                              {" "}
                              <h5 className="text-start m-5  ">Web Design</h5>
                              <div className="d-flex  m-5 justify-content-around align-items-end ">
                                {" "}
                                <ImStatsBars className=" fs-1 me-2" />
                                <h5>123</h5>
                              </div>{" "}
                            </div>
                          </div>{" "}
                        </div>
                      </div>
                      <div className="col-md-4 text-center my-5 ">
                        <div className="service-container">
                          <div className="img-service-container">
                            <img src={middle} className="w-100" alt="" />
                          </div>{" "}
                          <div>
                            {" "}
                            <h4 className="text-warning my-3"> </h4>
                            <h2 className="text-warning my-5">
                              Armada Restraunt{" "}
                            </h2>
                            <div className=" d-flex justify-content-between align-items-center">
                              {" "}
                              <h5 className="text-start m-5  ">Web Design</h5>
                              <div className="d-flex  m-5 justify-content-around align-items-end ">
                                {" "}
                                <ImStatsBars className=" fs-1 me-2" />
                                <h5>123</h5>
                              </div>{" "}
                            </div>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel> */}
            <div className="border my-5 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
