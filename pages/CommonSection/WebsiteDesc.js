import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import img3 from "assets/images/bg-pattern.png";
function WebsiteDesc(props) {
  return (
    <React.Fragment>
      <section className="section section-lg bg-web-desc">
        <div className="bg-overlay"></div>
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="text-white">Build your dream website today</h2>
              <p className="pt-3 home-desc">
              Development and programming: for bringing together all elements to create a high-quality.
              </p>
              {/* <Link
                                href="#"
                            >
                                <a className="btn btn-white mt-4 waves-effect waves-light mb-5">View Plan & Pricing</a>
                            </Link> */}
            </Col>
          </Row>
        </Container>
        <div className="bg-pattern-effect">
          <img alt="dorsin" src={img3.src} />
        </div>
      </section>
    </React.Fragment>
  );
}

export default WebsiteDesc;
