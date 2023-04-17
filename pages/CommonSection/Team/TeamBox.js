import React from "react";
import { Col } from "reactstrap";

const TeamBox = ({ teams }) => {
  return (
    <React.Fragment>
      {(teams || []).map((team, key) => (
        <Col lg={4} key={key}>
          <div className={"text-center pricing-box hover-effect"}>
            <img
              src={team?.image?.src}
              alt="No image"
              style={{ width: "120px", height: "120px" }}
            />
            <br />
            <br />
            <h3>{team?.title}</h3>
            <p>{team?.desc}</p>
          </div>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default TeamBox;
