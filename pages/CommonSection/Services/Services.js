import React from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "components/Common/SectionTitle";
import ServiceBox from "./ServiceBox";

const services1 = [
  {
    icon: "pe-7s-monitor",
    title: "Custom Software Development",
    desc: "Dedicated web and mobile software solutions tailored to the growth stage including research and business consultation support.",
  },
  {
    icon: "pe-7s-display2",
    title: "SOFTWARE DEVELOPMENT",
    desc: "Outsourcing of an entire software project or staff augmentation in response to the unique needs of a particular business.",
  },
  {
    icon: "pe-7s-chat",
    title: "Cloud Application Development",
    desc: "Modern web and mobile applications based on cloud solutions. Cloud increases security and ensures instant access.",
  },
];
const services2 = [
  {
    icon: "pe-7s-science",
    title: "API Integration Services",
    desc: "We create unique APIs and integrate systems using existing solutions. We deliver full integrations between existing platforms.",
  },
  {
    icon: "pe-7s-user",
    title: "Front-End Development Services",
    desc: "Modern front-end frameworks and tools for user-loved web applications. Fully responsive and powerful applications.",
  },
  {
    icon: "pe-7s-plane",
    title: "Artificial Intelligence Development",
    desc: "We provide AI-based solutions using Python and other tools for optimal results. We develop comprehensive AI tools.",
  },
];

function Services(props) {
  return (
    <React.Fragment>
      <section className="section pt-5" id="services">
        <Container>
          {/* section title */}
          <SectionTitle
            title="Laravel Development Services"
            desc="We develop maintainable and sustainable PHP web applications using the Laravel framework that are loaded with high-level features and sophisticated functionalities.."
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
