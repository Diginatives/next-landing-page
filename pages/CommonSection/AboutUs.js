import React from "react";
import { Container, Row, Col } from "reactstrap";
import img3 from "assets/images/online-world.svg";
const AboutUs = (props) => {
  return (
    <React.Fragment>
      <section className="section bg-light" id="features">
        <Container>
          <Row className="vertical-content">
            <Col lg={5}>
              <div className="features-box">
                <h3>Why Laravel?</h3>
                <p className="text-muted web-desc">
                  Laravel is an open-source PHP framework that is perfect for
                  designing web solutions of all sizes with impeccable
                  appearance and stunning functionalities.
                </p>
                <ul className="text-muted list-unstyled mt-4 features-item-list">
                  <li className="">
                    Laravel framework currently has 38,000+ stars on GitHub.
                  </li>
                  <li className="">
                    Popular framework among developers thanks to the modular and
                    stress-free coding provided by it.
                  </li>
                  <li className="">
                    Perfect for projects of all sizes, whether start-up
                    applications or enterprise-level solutions.
                  </li>
                  <li className="">
                    Easily integrate-able with third-party services, plugins,
                    and extensions.
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
                <img
                  alt="macbook"
                  src="https://www.dynamologic.com/wp-content/themes/dynamologic2021/images/laravel-img.webp"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AboutUs;
