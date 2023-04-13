import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Social = () => {
  return (
    <React.Fragment>
      <section className="contact-social bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <ul className="list-inline social mt-4">
                <li className="list-inline-item">
                  <a
                    className="social-icon"
                    href="https://www.facebook.com/DiginativesPakistan/"
                    target="_blank"
                  >
                    <i className="mdi mdi-facebook"></i>
                  </a>
                  {/* <Link href="#">
                                    </Link> */}
                </li>
                <li className="list-inline-item">
                  <a
                    className="social-icon"
                    href="https://www.youtube.com/@diginativesio"
                    target="_blank"
                  >
                    <i className="mdi mdi-youtube"></i>
                  </a>
                  {/* <Link href="#">
                                    </Link> */}
                </li>
                <li className="list-inline-item">
                  <a
                    className="social-icon"
                    href="https://www.linkedin.com/company/diginatives-io/"
                    target="_blank"
                  >
                    <i className="mdi mdi-linkedin"></i>
                  </a>
                  {/* <Link href="#">
                                    </Link> */}
                </li>
              </ul>
            </Col>
            <Col lg={3} className="mt-4">
              <p className="contact-title">
                <i className="pe-7s-call"></i> &nbsp;+1 (714) 820-9946
              </p>
            </Col>
            <Col lg={3} className="mt-4 text-right">
              <p className="contact-title">
                <i className="pe-7s-mail-open"></i>&nbsp; info@diginatives.io
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Social;
