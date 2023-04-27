import React, { useEffect, useState } from "react";
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
//Import Section Title
import SectionTitle from "components/Common/SectionTitle";

const Contact = () => {
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
      <section className="section " id="contact">
        <Container>
          {/* section title */}
          <SectionTitle title="GET IN TOUCH" />

          <Row>
            <Col lg={3}>
              <p className="mt-4">
                <span className="h5">Office Address USA:</span>
                <br />{" "}
                <span className="text-muted d-block mt-2">
                  Suite 200, MainSt. Milpitas, CA 96035, USA
                </span>
              </p>
            </Col>

            <Col lg={3}>
              <p className="mt-4">
                <span className="h5">Office Address Pak:</span>
                <br />{" "}
                <span className="text-muted d-block mt-2">
                  Office Number 112, Al Hafeez business center 89, Lahore.
                </span>
              </p>
            </Col>
            <Col lg={3}>
              <p className="mt-4">
                <span className="h5">Working Hours:</span>
                <br />{" "}
                <span className="text-muted d-block mt-2">
                  9:00AM To 6:00PM
                </span>
              </p>
            </Col>
            <Col lg={3}>
                {" "}
                <p className="mt-4">
                  <input
                    type="submit"
                    id="submit"
                    className="submitBnt btn btn-primary"
                    value="Hire Us"
                    onClick={toggle}
                  />
                </p>
            </Col>
          </Row>
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
                <Label for="project">
                  Tell us about your project(optional)
                </Label>
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
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Contact;
