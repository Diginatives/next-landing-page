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
            <Col lg={4} className="text-center">
              <h1 className="text-white projctNumSize">100+</h1>
              <h2 className="pt-3 home-desc project-completed">Completed Projects</h2>
            </Col>
            <Col lg={4} className="text-center">
              <h1 className="text-white projctNumSize">20+</h1>
              <h2 className="pt-3 home-desc project-completed">Employees</h2>
            </Col>
            <Col lg={4} className="text-center">
              <h1 className="text-white projctNumSize">2+</h1>
              <h2 className="pt-3 home-desc project-completed">Years Helping Businesses</h2>
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
