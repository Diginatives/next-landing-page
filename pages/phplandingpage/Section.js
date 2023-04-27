import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
// Modal Video
import img3 from "assets/images/bg-pattern.png";
const Section = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [isinput, setInput] = useState({
    project: "",
    companyName: "",
    fullName: "",
    phone: "",
    email: "",
  });
  const [isResult, setResult] = useState("");
  const { email, companyName, fullName, phone, project } = isinput;
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...isinput,
      [name]: value,
    });
  };
  const fetchData = async (userData) => {
    try {
      const response = await fetch(`http://localhost:5000/api/user`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      setResult(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleOnsubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      company: companyName,
      name: fullName,
      phone: phone,
      project: project,
    };
    fetchData(data);
  };
  useEffect(() => {
    if (isResult) {
      toast.success(
        "Thanks for contact to us Our legel team will contact to you Soon..!"
      );
      setTimeout(() => {
        setModal(false);
      }, 3000);
    } else if (isResult === "") {
      setTimeout(() => {
        setModal(false);
        // toast.warning("Error: Please again");
      }, 3000);
    }
  }, [isResult]);
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
                      type="button"
                      id="submit"
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
          <form onSubmit={handleOnsubmit}>
            <ModalHeader toggle={toggle}>
              Leave your contacts and we will provide free final estimation
            </ModalHeader>
            {/* <div > */}
            <FormGroup className="container mt-2">
              <Label for="fullName">Full Name*</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                onChange={handleOnchange}
              />
            </FormGroup>
            <FormGroup className="container">
              <Label for="companyName">Company Name*</Label>
              <Input
                id="companyName"
                name="companyName"
                type="text"
                required
                onChange={handleOnchange}
              />
            </FormGroup>
            <FormGroup className="container">
              <Label for="Phone">Phone*</Label>
              <Input
                id="phone"
                name="phone"
                required
                type="number"
                onChange={handleOnchange}
              />
            </FormGroup>
            <FormGroup className="container">
              <Label for="mail">E-mail*</Label>
              <Input
                id="mail"
                name="email"
                required
                type="email"
                onChange={handleOnchange}
              />
            </FormGroup>
            <FormGroup className="container">
              <Label for="project">Tell us about your project(optional)</Label>
              <Input
                id="project"
                name="project"
                type="text"
                onChange={handleOnchange}
              />
            </FormGroup>
            <ModalFooter>
              <Button color="submitBnt btn btn-primary" type="submit">
                Submit
              </Button>{" "}
              <Button color="submitBnt btn btn-dark" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </Modal>
        <ToastContainer position="bottom-right" newestOnTop />
      </section>
    </React.Fragment>
  );
};

export default Section;
