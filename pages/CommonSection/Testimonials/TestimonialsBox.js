import React from "react";
import { Col } from "reactstrap";

const TestimonialsBox = ({ clients }) => {
  return (
    <React.Fragment>
      {(clients || []).map((client, key) => (
        <Col lg={2} key={key}>
          <div className="testimonial-box hover-effect mt-4">
            <img
              src={client?.image?.src}
              alt="client"
              className="img-fluid d-block img-thumbnail"
            />
          </div>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default TestimonialsBox;
