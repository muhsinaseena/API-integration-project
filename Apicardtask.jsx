import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';

const Apicardtask = () => {
    const [product, setproduct] = useState([])
    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then((response) => setproduct(response.data.products))

    }, [])
    console.log(product);


    return (
        <div>
                <h1 style={{marginLeft:"500px"}}>PRODUCT LIST</h1>

        {product.map((test) => {

            return (
                
                <div className='d-inline-flex '>
                    <Card style={{margin:"10px", width:"300px",height:"540px" ,border:"2px solid brown"}}>
                        <Card.Img variant="top" src={test.images[0]} style={{height:"270px"}}/>
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title>
                                {test.title}
                            </Card.Title>
                            <Card.Text>
                                {test.description}
                            </Card.Text>
                            <Card.Text>
                                <Rating name="size-medium" defaultValue={test.rating} className={test.rating > 4.5 ? "text-success" : ""} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
            )

        })}
</div>
    )
}

export default Apicardtask