import React from "react";
import { Container, Row, Col, Form } from "reactstrap";
import Link from "next/link";
import FooterLink from "./FooterLink";

const links = [
  {
    title: "DORSIN",
    child: [
      { link: "#", title: "Home", target: "#home" },
      { link: "#", title: "Blog", target: "#blog" },
      { link: "#", title: "Contact", target: "#contact" },
    ],
  },
  {
    title: "Information",
    child: [
      { link: "#", title: "Services", target: "#services" },
      { link: "#", title: "Features", target: "#features" },
    ],
  },
  {
    title: "Support",
    child: [
      { link: "#", title: "Team", target: "#team" },
      { link: "#", title: "Pricing", target: "#pricing" },
    ],
  },
];

console.log(
  links.map((item) => item.title),
  "links"
);
const Footer = (props) => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container>
          <Row>
            {links.map((fLink, key) => (
              <Col key={key} lg={3} className="mt-4">
                <h4>{fLink.title}</h4>
                <div className="text-muted mt-4">
                  <ul className="list-unstyled footer-list">
                    {fLink.child.map((fLinkChild, key) => (
                      <li key={key}>
                        {/* <Link href={fLinkChild.link}><a>{fLinkChild.title}</a></Link> */}
                        <a href={fLinkChild.target}>{fLinkChild.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}

            <Col lg={3} className="mt-4">
              <h4>About</h4>
              <div className="text-muted mt-4">
                <p>
                  We are a software solutions company with focus on providing
                  custom and personalized technology solutions.
                </p>
              </div>
              {/* <Form className="subscribe">
                <input placeholder="Email" className="form-control" required />
                {/* <Link href="#" legacyBehavior>
                                    {/* <a className="submit"><i className="pe-7s-paper-plane"></i></a> */}
              {/* </Link> */}
              {/* </Form> */}
            </Col>
          </Row>
        </Container>
      </footer>
      {/* import Footer link */}
      <FooterLink />
    </React.Fragment>
  );
};

export default Footer;
