import React from "react";
import { Container, Row, Col, Form } from "reactstrap";
import Link from "next/link";
import FooterLink from "./FooterLink";
const links = [
  {
    title: "Services",
    child: [
      { link: "#", title: "SaaS Web App Development", target: "#" },
      { link: "#", title: "Full-stack Development", target: "#" },
      { link: "#", title: "Technology Consulting", target: "#" },
      { link: "#", title: "UI/UX Design Services", target: "#" },
      { link: "#", title: "Consultation", target: "#" },
    ],
  },
  {
    title: "Information",
    child: [
      { link: "#", title: "Services", target: "#services" },
      { link: "#", title: "Home", target: "#home" },
      { link: "#", title: "Portfolio", target: "#portfolio" },
      { link: "#", title: "Careers", target: "#careers" },
      { link: "#", title: "Contact", target: "mailto:info@diginatives.io" },
    ],
  },
  {
    title: "Office Address",
    child: [
      {
        link: "",
        title: "Suite 200, MainSt. Milpitas, CA 96035, USA",
        target: "",
      },
      {
        link: "",
        title: "Phone: +1(714)820-9946",
        target: "tel:+1(714)820-9946",
      },
      {
        link: "",
        title: "Email: info@diginatives.io",
        target: "mailto:info@diginatives.io",
      },
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
                <p style={{ color: "#98a0aa" }}>
                  We are a software solutions company with focus on providing
                  custom and personalized technology solutions.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <FooterLink />
    </React.Fragment>
  );
};

export default Footer;
