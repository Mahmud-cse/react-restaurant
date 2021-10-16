import React from 'react';
import {Button, Container, Form, FormControl, Row } from 'react-bootstrap';
import About from '../About/About';
import Home2 from '../Home2/Home2';
import './Home.css';

const Home = () => {
    return (
        <>
            <div  className="custom">
                <Container fluid>
                    <Row>
                        <h2>Search Your Most Favourite Food Over Here</h2>
                        <div className="mt-3 custom0">
                            <Form className="d-flex">
                                <div className=" custom1">
                                <Form.Control className="rounded-pill" type="email" placeholder="Enter email" />
                                </div>
                                <Button variant="danger" className="rounded-pill custom2">Search</Button>
                              </Form>
                        </div>
                    </Row>
                </Container>
            </div>

            {/* Second part */}
            <div className="mt-5">
                <Home2></Home2>
            </div>

            {/* About us */}
            <div className="mt-5">
                <About></About>
            </div>
        </>
    );
};

export default Home;