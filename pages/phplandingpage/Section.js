import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

// Modal Video
import img3 from "assets/images/bg-pattern.png";
const Section = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
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
                  {/* <a href="mailto:info@diginatives.io"> */}{" "}
                  <p className="mt-4">
                    <input
                      type="submit"
                      id="submit"
                      // name="send"
                      className="submitBnt btn btn-dark"
                      value="Hire Us"
                      onClick={toggle}
                    />
                  </p>
                  {/* </a> */}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="bg-pattern-effect">
          <img alt="dorsin" src={img3.src} />
        </div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            Leave your contacts and we will provide free final estimation
          </ModalHeader>
          {/* <div > */}
          <FormGroup className="container mt-2">
            <Label for="fullName">Full Name*</Label>
            <Input id="fullName" name="fullName" type="text" required />
          </FormGroup>
          <FormGroup className="container">
            <Label for="companyName">Company Name*</Label>
            <Input id="companyName" name="companyName" type="text" required />
          </FormGroup>
          <FormGroup className="container">
            <Label for="Phone">Phone*</Label>
            <Input id="phone" name="phone" required type="number" />
          </FormGroup>
          <FormGroup className="container">
            <Label for="mail">E-mail*</Label>
            <Input id="mail" name="email" required type="email" />
          </FormGroup>
          <FormGroup className="container">
            <Label for="project">
              Tell us about your project(optional)
            </Label>
            <Input id="project" name="project" type="text" />
          </FormGroup>
          {/* </div> */}
          <ModalFooter>
            <Button color="submitBnt btn btn-primary" onClick={toggle}>
              Submit
            </Button>{" "}
            <Button color="submitBnt btn btn-dark" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </section>
    </React.Fragment>
  );
};

export default Section;
