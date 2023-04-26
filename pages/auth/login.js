import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const Login = () => {
  return (
    <React.Fragment>
      <div className="account-home-btn d-none d-sm-block"></div>
      <section className="bg-account-pages vh-100">
        <div className="display-table">
          <div className="display-table-cell">
            <Container>
              <Row className="justify-content-center">
                <Col lg={5}>
                  <Card className="account-card">
                    <CardBody>
                      <div className="text-center mt-3">
                        <h3 className="font-weight-bold"></h3>
                        <p className="text-muted">
                          Sign in to continue to Dorsin.
                        </p>
                      </div>
                      <div className="p-3"></div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
