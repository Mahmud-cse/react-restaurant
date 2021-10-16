import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import logo1 from '../img/logo.png';

const Footer = () => {
    return (
        <div className="customFooter">
             <Container className="p-5">
                <Row>
                    <Col lg="6">
                        <img src={logo1} alt="logo" style={{width:"200px",marginLeft:"-50px"}}/>
                    </Col>
                    <Col lg="6">
                        <Row>
                            <Col lg="4">
                                <ul className="list-unstyled" style={{color:"white"}}>
                                    <li>About Online Food</li>
                                    <li>Read Our Blog</li>
                                    <li>Sign up to deliver</li>
                                    <li>Add your restaurant</li>
                                </ul>
                            </Col>
                            <Col lg="4">
                                <ul className="list-unstyled" style={{color:"white"}}>
                                    <li>Get Help</li>
                                    <li>Read FAQs</li>
                                    <li>View all cities</li>
                                    <li>Restaurants near me</li>
                                </ul>
                            </Col>
                            <Col lg="4">
                                <ul className="list-unstyled" style={{color:"white"}}>
                                    <li>Facebook</li>
                                    <li>Instragram</li>
                                    <li>Twitter</li>
                                    <li>Youtube</li>
                                </ul>

                            </Col>
                        </Row>
                        <br />
                        <br />
                        
                    </Col>
                </Row>
                <Row>
                    <Col lg="6">
                        <b><p style={{color:"#6B7280"}}>Developed by 💗 S.M. Mahmud Hasan</p></b>
                    </Col>
                    <Col lg="6">
                        <div className="d-flex  gap-4 ml-auto " style={{float:"right",color:"white",marginRight:"105px"}}>
                            <div><p>Privacy Policy</p></div>
                            <div><p>Terms of Use</p></div>
                            <div><p>Pricing</p></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;