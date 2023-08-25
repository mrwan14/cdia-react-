import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./contact-us.css";
import Contact_us from "../images/contact-us.jpg";
import { FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";

import Map from "../Map/Map";
import { useRef, useState } from "react";

export default function ContactUS() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, phone, email, subject, message } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const service_id = "service_zhfahan";
  const templete_id = "template_bdmmbxl";
  const public_key = "Sv62UuKwYWTNwt7-P";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here

    // Send the form data using EmailJS
    emailjs
      .sendForm(service_id, templete_id, e.target, public_key)
      .then((response) => {
        console.log(e.target);

        console.log("Email sent successfully!", response.text);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    // Reset form fields
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  const location = {
    address: "Heliopolis, Al Matar, El Nozha, Cairo Governorate",
    lat: 30.116466332255225,
    lng: 31.345222991572953,
  };
  return (
    <div className="contact-us">
      <div className="contact-img-container">
        <img src={Contact_us} alt="" />
      </div>
      <div className=" container p-5">
        <div className="row ">
          <div className="col-md-6 text-white ">
            <h4 className="main-color fas fa-italic ">send us Email</h4>
            <h1 className="fw-bolder mb-4 form-heading">
              Feel <span className="main-color">free</span> to write
            </h1>
            <Form onSubmit={handleSubmit} id="myForm">
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Control
                    placeholder="Phone"
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={subject}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your Message"
                    name="message"
                    value={message}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </div>
          <div className="col-md-5 offset-md-1 text-white">
            <h4 className="main-color fas fa-italic ">NEED ANY HELP?</h4>
            <h1 className="fw-bolder mb-4 form-heading">
              Get in <span className="main-color">touch</span> with us{" "}
            </h1>
            <div className="d-flex">
              <div className="icon-container">
                <FaLocationArrow className="fs-2 text-black" />
              </div>{" "}
              <div className="ms-4">
                {" "}
                <h2 className="fw-bolder">Our Address</h2>
                <h4 className="lead">
                  Heliopolis, Al Matar, El Nozha, Cairo Governorate
                </h4>
              </div>{" "}
            </div>
            <a href="mailto:">
              <div className="d-flex my-5">
                <div className="icon-container">
                  <MdEmail className="fs-1 text-black" />
                </div>{" "}
                <div className="ms-4">
                  {" "}
                  <h2 className="fw-bolder">Email address</h2>
                  <h4 className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, ad!
                  </h4>
                </div>{" "}
              </div>
            </a>
            <a href="tel:+20 106 033 3343">
              {" "}
              <div className="d-flex">
                <div className="icon-container">
                  <BsTelephoneFill className="fs-2 text-black" />
                </div>{" "}
                <div className="ms-4">
                  {" "}
                  <h2 className="fw-bolder">Call now</h2>
                  <h4 className="lead">+20 106 033 3343</h4>
                </div>{" "}
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="map">
        <Map location={location} zoomLevel={17} /> {/* include it here */}
      </div>
    </div>
  );
}
