import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

// Modal Video
import img3 from "assets/images/bg-pattern.png";
const Section = () => {
  return (
    <React.Fragment>
      <section
        className="section bg-home home-half"
        data-image-src="images/bg-home.jpg"
        id="home"
      >
        <div className="bg-overlay"></div>
        <div className="display-table">
          <div className="display-table-cell">
            <Container>
              <Row className="justify-content-centePser">
                <Col lg={8} className="text-white text-center">
                  <h1 className="home-title">Laravel Development Services</h1>
                  <h3 className="home-title1">
                    Custom Elegantly Coded Solutions
                  </h3>
                  <p className="pt-3 home-desc">
                    We develop maintainable and sustainable PHP web applications
                    using the Laravel framework that are loaded with high-level
                    features and sophisticated functionalities.
                  </p>
                  <p className="play-shadow mt-4">
                    {/* <Link href="#">
                                            <a
                                                onClick={() => {
                                                    openModal();
                                                }}
                                                className="play-btn video-play-icon"><i className="mdi mdi-play text-center"></i></a>
                                        </Link> */}
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="bg-pattern-effect">
          <img alt="dorsin" src={img3.src} />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Section;
