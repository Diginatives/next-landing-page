import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

//Import Section Title
import SectionTitle from "components/Common/SectionTitle";

import ProcessBox from "./ProcessBox";

const processes = [
  {
    icon: "pe-7s-pen",
    title: "Analysis and Planning",
    desc: "A detailed roadmap you crafted during the planning phase, highlighting the project’s milestones.",
  },
  {
    icon: "pe-7s-id",
    title: "Design of Software Development Product",
    desc: "Translates functional requirements into technical specifications, ensuring the software will be efficient.",
  },
  {
    icon: "pe-7s-target",
    title: "Deliver high quality product",
    desc: "Upon successful pre-launch testing, your software progresses to the production stage. At Relevant, we expertly orchestrate software product releases.",
  },
];

const Process = (props) => {
  return (
    <React.Fragment>
      <section className="section bg-light" id='careers'>
        <Container>
          {/* section title */}
          <SectionTitle
            title="5 Reasons to Join Us"
            // desc="In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts."
          />

          <Row>
            {/* <Col lg={6} className="text-center process-left-icon-1">
                            <i className="pe-7s-angle-right"></i>
                        </Col>
                        <Col lg={6} className="text-center process-left-icon-2">
                            <i className="pe-7s-angle-right"></i>
                        </Col> */}
            <img
              decoding="async"
              title="career"
              src="http://softpyramid.com/wp-content/uploads/2023/04/career-illus-4.gif?1681883770543"
              alt=""
              class="img-responsive wp-image-4441"
            />
          </Row>
          {/* <Row className="mt-5">
                        <ProcessBox processes={processes} />
                        <div className="text-center mx-auto">
                            {/* <Link
                                href="#"
                            >
                                <a className="btn btn-primary waves-light waves-effect mt-5">Get Started <i className="mdi mdi-arrow-right"></i></a>
                            </Link> */}
          {/* </div> */}
          {/* </Row> */}
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Process;
