import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import img from "assets/images/bg-pattern-light.png";
import img1 from "assets/images/zuman.png";
import img2 from "assets/images/avari-1.png";
import img3 from "assets/images/bop-new-size.png";
import img5 from "assets/images/disney-1.png";
import img6 from "assets/images/google-1.png";
import img7 from "assets/images/gop-new-size.png";
import img8 from "assets/images/hp-1.png";
import img9 from "assets/images/imaan-foods.png";
import img10 from "assets/images/imaan-foods.png";
import img11 from "assets/images/izastro.png";
import img12 from "assets/images/samsung-1.png";
import PricingBox from "../Pricing/Pricing";
const GetStart = () => {
  const images = [
    { title: img1 },
    { title: img2 },
    { title: img3 },
    { title: img5 },
    { title: img6 },
    { title: img7 },
    { title: img8 },
    { title: img9 },
    { title: img10 },
    { title: img11 },
    { title: img12 },
  ];
  return (
    <React.Fragment>
      <section className="section section-lg bg-get-start">
        <div className="bg-overlay"></div>
        {/* <Container> */}
          <Row>
            <Col lg={{ size: 8, offset: 2 }} className="text-center">
              <h1 className="get-started-title text-white">OUR PROJECTS</h1>
              <div className="section-title-border mt-4 bg-white"></div>
              <p className="section-subtitle font-secondary text-white text-center pt-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{" "}
              </p>
             
              {/* <div class="hwrap">
                <div class="hmove">
                  {images.map((item, key) => (
                    <div class="hitem" key={key}>
                      <img alt="pattern" src={item.imagesInfo.src} />
                    </div>
                  ))}
                </div>
              </div> */}
            </Col>
          </Row>
        {/* </Container> */}
        <div className="bg-pattern-effect">
          <img alt="pattern" src={img.src} />
        </div>
      </section>
    </React.Fragment>
  );
};

export default GetStart;
