import React from 'react';
import { Card,Button } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <div  style={{marginLeft:"50px"}}>
                    <h2>Why you choose us</h2>
                    <p>While eating at a restaurant is an enjoyable and <br /> most individuals and families prepare their meals at home.</p>


                    <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default About;