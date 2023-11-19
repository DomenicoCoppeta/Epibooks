import React from 'react';
import { Link } from 'react-router-dom';
import {Card, Col} from "react-bootstrap";


export default function SingleBook({book}) {
    
    
    return (
        <Col xs={8} md={5} lg={3} className=''>
        <Link to={`/books/${book.asin}`}>
        <Card>
            <Card.Img className='rounded-1' src={book.img}/>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                        Category: {book.category}
                        Price: {book.price} $
                </Card.Text>
            </Card.Body>
        </Card>
        </Link>
        </Col>
        )
}