import React from "react";
import { Col } from "reactstrap";
import Link from "next/link";
const PricingBox = ({ pricings }) => {
  return (
    <React.Fragment>
      {(pricings || []).map((pricing, key) => (
        <Col lg={3} key={key}>
          <div
            className={
              pricing.isActive
                ? "text-center pricing-box bg-white hover-effect price-active"
                : "text-center pricing-box hover-effect"
            }
          >
            <img src={pricing.title.src} alt="No image" />
          </div>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default PricingBox;
