import React from "react";
import { MDBFooter, MDBIcon } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-black mt-5"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container">
        <div className="me-5 fw-bold fs-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/cdiaeg?mibextid=ZbWKwL"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="facebook-f" className="fs-4" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" className="fs-4" />
          </a>
          <a href="https://google.com/" className="me-4 text-reset">
            <MDBIcon fab icon="google" className="fs-4" />
          </a>
          <a
            href="https://instagram.com/cdiaeg?igshid=NTc4MTIwNjQ2YQ=="
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="instagram" className="fs-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/cdiaeg/"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="linkedin" className="fs-4" />
          </a>
          <a href="https://github.com/cdiaeg/" className="me-4 text-reset">
            <MDBIcon fab icon="github" className="fs-4" />
          </a>
        </div>
      </section>
    </MDBFooter>
  );
}
