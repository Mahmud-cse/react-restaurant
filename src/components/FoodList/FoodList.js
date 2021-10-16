import React from 'react';
import {Card,Button, Col} from 'react-bootstrap';
import './FoodList.css';

const FoodList = (props) => {
    const {image,strMeal,strInstructions,strPrice}=props.data;
    return (
    
                <Col md={4} className="gap-5 mb-5">
                    <Card className="border-0 rounded-3 card">
                            <Card.Img className="mt-3" variant="top" src={image} style={{width:"50%",height:"50%",margin:"auto"}}/>
                            <Card.Body>
                              <Card.Title>{strMeal}</Card.Title>
                              <Card.Text className="text-muted">
                                {strInstructions}
                              </Card.Text>
                            </Card.Body>
                            <div className="mx-auto mb-3">
                              <b  style={{textAlign:"center",fontSize:"20px"}}><p>{strPrice}</p></b>
                              <Button variant="outline-primary">Order Now</Button>
                            </div>
                    </Card>
                </Col>
    );
};

export default FoodList;
