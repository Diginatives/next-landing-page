import React from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "components/Common/SectionTitle";
import ServiceBox from "./ServiceBox";

const services1 = [
  {
    icon: "pe-7s-monitor",
    title: "MOBILITY",
    desc: "Enterprise mobility is key to digital transformation.",
  },
  {
    icon: "pe-7s-display2",
    title: "SOFTWARE DEVELOPMENT",
    desc: "Full-stack web application development services.",
  },
  {
    icon: "pe-7s-chat",
    title: "CHATBOTS",
    desc: "We build chatbots that use predictive intelligence and analytics.",
  },
];
const services2 = [
  {
    icon: "pe-7s-science",
    title: "QUALITY ASSURANCE",
    desc: "Reduce time to market, lower development costs, and streamline delivery.",
  },
  {
    icon: "pe-7s-user",
    title: "USER EXPERIENCE",
    desc: "An engaging, seamless user experience is the surest path to business success.",
  },
  {
    icon: "pe-7s-plane",
    title: "ARTIFICIAL INTELLIGENCE",
    desc: "Empower your business with AI. Innovate, automate and grow.",
  },
];

function Services(props) {
  return (
    <React.Fragment>
      <section className="section pt-5" id="services">
        <Container>
          {/* section title */}
          <SectionTitle
            title="Our Services"
            desc="We are helping customers digitalize existing business, build innovative new products, and augment teams with high performance members."
          />
          <Row className="mt-4">
            {/* services box */}
            <ServiceBox services={services1} />
          </Row>
          <Row className="mt-4">
            {/* service box */}
            <ServiceBox services={services2} />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Services;
