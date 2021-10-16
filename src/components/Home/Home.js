import React from 'react';
import {Button, Container, Form, Row } from 'react-bootstrap';
import About from '../About/About';
import Home2 from '../Home2/Home2';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="customHome">
                <Container fluid>
                    <Row>
                        <h2>Search Your Most Favourite Food</h2>
                        <div className="mt-3 custom0">
                            <Form className="d-flex">
                                <div className=" ">
                                <Form.Control className="rounded-pill custom1" type="email" placeholder="Enter email" />
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