import React from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "components/Common/SectionTitle";

//Import Pricing
import PricingBox from "./PricingBox";
import img3 from "assets/images/icons1.png";
import img7 from "assets/images/icones7.png";
import img10 from "assets/images/icones10.png";
import img2 from "assets/images/icons2.png";
import img33 from "assets/images/icons3.png";
import img5 from "assets/images/icons5.png";
import img6 from "assets/images/icons6.png";
import img9 from "assets/images/icons9.png";
import img11 from "assets/images/icons11.png";
import img12 from "assets/images/icons12.png";
import img13 from "assets/images/icons13.png";
const pricings = [
    {
        title: img3,
        
    },
   
    {
        title: img2,
        
    },
    {
        title: img33,
        
    },
    {
        title: img5,
        
    },
    {
        title: img6,
        
    },
    {
        title: img9,
        
    },
    {
        title: img12,
        
    },
    {
        title: img13,
        
    },
];

const Pricing = props => {
    return (
        <React.Fragment>
            <section className="section pt-5" id="pricing">
                <Container>
                    {/* section title */}
                    <SectionTitle
                        title="Technologies We Support"
                        desc="SoftPyramid is well-versed in a wide range of cutting-edge technologies and frameworks to help you achieve your business goals. We have expertise in the Laravel development frameworks for server-side scripting and front-end technologies such as Livewire, VueJs, React, and NodeJs. We leverage the latest PHP technologies and tools to create custom solutions that are scalable, dependable, and cost-effective."
                    />

                    <Row className="mt-5">
                        {/* pricing box */}
                        <PricingBox pricings={pricings} />
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Pricing;