import React from 'react';
import {Button, Container, Form, FormControl, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <div  className="custom">
            <Container>
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
    );
};

export default Home;