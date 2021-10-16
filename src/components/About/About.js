import React from 'react';
import { Card, Col, Container, Row} from 'react-bootstrap';
import img1 from '../img/Other/first.png';
import img2 from '../img/Other/second.png';
import img3 from '../img/Other/third.png';
import icon1 from '../img/ICON/Group204.png';

const About = () => {
    return (
        <div>
            <div  style={{marginLeft:"20px",marginBottom:"50px"}}>
                    <Container style={{marginLeft:"70px"}}>
                      <h2>Why you choose us</h2>
                      <p>While eating at a restaurant is an enjoyable and <br /> most individuals and families prepare their meals at home.</p>
                    </Container>
                    <br />
                    <br />
                    <br />
                    <div className="d-flex justify-content-center justify-content-evenly">
                    <Card className="border-0" style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={img1} />
                          <Card.Body className="d-flex">
                            <Row>
                              <Col lg={2}>
                              <img src={icon1} alt=""  style={{width:"40px",height:"40px"}}/>
                              </Col>
                              <Col lg={10} style={{marginLeft:"0px"}}>
                                <Card.Title>Fast Delivery</Card.Title>
                              <p>Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.</p>
                              </Col>
                            </Row>
                          </Card.Body>
                      </Card>
                      <Card className="border-0" style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={img2} />
                          <Card.Body className="d-flex">
                            <Row>
                              <Col lg={2}>
                              <img src={icon1} alt=""  style={{width:"40px",height:"40px"}}/>
                              </Col>
                              <Col lg={10} style={{marginLeft:"0px"}}>
                                <Card.Title>Fast Delivery</Card.Title>
                              <p>Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.</p>
                              </Col>
                            </Row>
                          </Card.Body>
                      </Card>
                      <Card className="border-0" style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={img3} />
                          <Card.Body className="d-flex">
                            <Row>
                              <Col lg={2}>
                              <img src={icon1} alt=""  style={{width:"40px",height:"40px"}}/>
                              </Col>
                              <Col lg={10} style={{marginLeft:"0px"}}>
                                <Card.Title>Fast Delivery</Card.Title>
                              <p>Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.</p>
                              </Col>
                            </Row>
                          </Card.Body>
                      </Card>
                    </div>
            </div>  
        </div>
    );
};

export default About;