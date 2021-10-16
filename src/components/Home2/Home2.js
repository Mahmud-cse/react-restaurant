import React, { useEffect, useState } from 'react';
import {Button, Row} from 'react-bootstrap';
import FoodList from '../FoodList/FoodList';
import './Home2.css';

const Home2 = () => {
    const [food,setFood]=useState([]);
    const [items,setItems]=useState([]);

    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setFood(data));
    },[]);

    useEffect(()=>{
        setItems(food);
    },[food]);

    const filterItem=(value)=>{
        const updatedItems= food.filter((data)=>{
            return data.strCategory===value;
        });
        setItems(updatedItems);
    }

    return (
        <div>
            <section className="section m-5">
            <div className="customHome2 gap-5 mb-5">
                <Button onClick={()=>filterItem('Breakfast')} variant="outline-primary">Breakfast</Button>
                <Button onClick={()=>filterItem('Lunch')} variant="outline-primary">Lunch</Button>
                <Button onClick={()=>filterItem('Dinner')} variant="outline-primary">Dinner</Button>
            </div>
            {/* card */}
              <Row>

                      {
                          items.map(data=><FoodList key={data.id} data={data}/>)
                      }
              </Row>
            </section>
        </div>
    );
};

export default Home2;