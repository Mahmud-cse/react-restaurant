import React from 'react';
import {Card,Button, Col} from 'react-bootstrap';

const FoodList = (props) => {
    const {image,strMeal,strInstructions,strPrice}=props.data;
    return (
    
                <Col md={4} className="gap-5 mb-5">
                    <Card>
                            <Card.Img className="mt-3" variant="top" src={image} style={{width:"50%",height:"50%",margin:"auto"}}/>
                            <Card.Body>
                              <Card.Title>{strMeal}</Card.Title>
                              <Card.Text className="text-muted">
                                {strInstructions}
                              </Card.Text>
                            </Card.Body>
                            <Card.Footer className="mx-auto mb-3">
                                <Button variant="outline-primary">{strPrice}</Button>
                            </Card.Footer>
                    </Card>
                </Col>
    );
};

export default FoodList;
