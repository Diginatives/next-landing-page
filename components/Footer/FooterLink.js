import React from "react";
import { Container, Row, Col } from "reactstrap";
const FooterLink = () => {
  return (
    <React.Fragment>
      <div className="footer-alt">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="float-start pull-none">
                <p className="copy-rights" style={{ color: "#98a0aa" }}>
                  2023 © All Rights Reserved
                </p>
              </div>

              <div className="clearfix"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FooterLink;
