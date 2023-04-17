import React from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "components/Common/SectionTitle";

import TestimonialsBox from "./TestimonialsBox";

//import images
import img2 from "assets/images/clutch-1-1.png";
import img1 from "assets/images/good.png";
import img3 from "assets/images/sortlist-1.png";
import img4 from "assets/images/top.png";
import img5 from "assets/images/upcitynew.png";
import img6 from "assets/images/slooth-logo.png";

const clients = [
  {
    image: img2,
    title: "RUBEN REED ",
    subTitle: "Charleston",
    desc: "I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why I need to throw curve balls.",
  },
  {
    image: img1,
    title: "MICHAEL P. HOWLETT ",
    subTitle: "Worcester",
    desc: "Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.",
  },
  {
    image: img3,
    title: "THERESA D. SINCLAIR",
    subTitle: "Lynchburg",
    desc: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
  {
    image: img4,
    title: "THERESA D. SINCLAIR",
    subTitle: "Lynchburg",
    desc: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
  {
    image: img5,
    title: "THERESA D. SINCLAIR",
    subTitle: "Lynchburg",
    desc: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
  {
    image: img6,
    title: "THERESA D. SINCLAIR",
    subTitle: "Lynchburg",
    desc: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
];

const Testimonials = (props) => {
  return (
    <React.Fragment>
      <section className="section" id="testi">
        <Container>
          {/* section title */}
          <SectionTitle
            title="PROUD PARTNERS"
            desc="Business partnerships are often crucial strategies that enable companies to expand into new markets, increase their customer reach, and earn higher revenues. Collaborating with other businesses through strategic partnerships has been a widely-used tactic among successful entrepreneurs to increase the success of their businesses."
          />

          <Row className="mt-5">
            <TestimonialsBox clients={clients} />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Testimonials;
