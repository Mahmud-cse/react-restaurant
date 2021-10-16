import React from 'react';
import {Button, Container, Form, FormControl, Row } from 'react-bootstrap';
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
                                <div className="rounded-pill custom1">
                                    <FormControl
                                      type="search"
                                      placeholder="Search"
                                      className="rounded-pill"
                                      aria-label="Search"
                                    />
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
        </>
    );
};

export default Home;