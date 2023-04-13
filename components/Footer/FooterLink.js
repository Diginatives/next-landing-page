import React from 'react';
import { Container, Row, Col } from "reactstrap";
import img3 from "assets/images/payment.png";
const FooterLink = () => {
    return (
        <React.Fragment>
            <div className="footer-alt">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="float-start pull-none">
                                <p className="copy-rights text-muted">
                                    2019 - 2020 © Dorsin - Themesbrand
                                </p>
                            </div>
                            <div className="float-end pull-none">
                                <img
                                    alt="payment"
                                    src={img3.src}
                                    height="36"
                                />
                            </div>
                            <div className="clearfix"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default FooterLink;