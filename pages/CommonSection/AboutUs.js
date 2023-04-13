import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import img3 from "assets/images/online-world.svg";
const AboutUs = (props) => {
  return (
    <React.Fragment>
      <section className="section bg-light" id="features">
        <Container>
          <Row className="vertical-content">
            <Col lg={5}>
              <div className="features-box">
                <h3>
                  PHP developers write server-side web applications using
                  Hypertext Preprocessor (PHP) scripting languages.
                </h3>
                <p className="text-muted web-desc">
                  Knowledge of frameworks, also called platforms, used to create
                  PHP applications can allow you to increase productivity and
                  accuracy while coding. Many frameworks have capabilities that
                  allow you to use code from a PHP library.
                </p>
                <ul className="text-muted list-unstyled mt-4 features-item-list">
                  <li className="">Manages Order Effectively.</li>
                  <li className="">Efficient and Secure.</li>
                  <li className="">Proper Workflow Management.</li>
                  <li className="">Submit Your Orgnization.</li>
                  <li className="">
                    Build efficient, testable, and reusable PHP modules.
                  </li>
                </ul>
                {/* <Link
                                    href="#"
                                >
                                    <a className="btn btn-primary mt-4 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></a>
                                </Link> */}
              </div>
            </Col>
            <Col lg={7}>
              <div className="features-img features-right text-right">
                <img alt="macbook" src={img3.src} className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AboutUs;
