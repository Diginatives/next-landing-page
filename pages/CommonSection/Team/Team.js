import React from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "components/Common/SectionTitle";

import TeamBox from "./TeamBox";

import img1 from "assets/images/2nd@.png";
import img2 from "assets/images/3.png";
import img3 from "assets/images/4sdd.png";
import img4 from "assets/images/Asset6@4x-100.png";
import img5 from "assets/images/qa@.png";
import img6 from "assets/images/software-developer-300x300.png";

const teams = [
  {
    image: img1,
    title: "A PROJECT MANAGER",
    desc: "Oversees all aspects of the project from planning to completion.",
  },
  {
    image: img2,
    title: "A UI/UX DESIGNER",
    desc: "Designs intuitive and responsive interfaces with elevated user.",
  },
  {
    image: img3,
    title: "A BUSINESS ANALYST",
    desc: "Analyses business processes to improve efficiency.",
  },
  {
    image: img4,
    title: "A DEVOPS TEAM",
    desc: "Collaborates to optimise software delivery processes.",
  },
  {
    image: img5,
    title: "QA TEAM",
    desc: "Ensures software quality through comprehensive testing.",
  },
  {
    image: img6,
    title: "PHP DEVELOPERS",
    desc: "Experts who will work exclusively on your project.",
  },
];

const Team = (props) => {
  return (
    <React.Fragment>
      <section className="section pt-4" id="team">
        <Container>
          {/* section title */}
          <SectionTitle
            title="Your Project will be Supported by.."
            desc="It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout."
          />

          <Row className="mt-5">
            {/* team box */}
            
            <TeamBox teams={teams} />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Team;
