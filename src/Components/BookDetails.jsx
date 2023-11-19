import { Card, Row, Col } from 'react-bootstrap';
import CommentArea from './CommentArea';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from "react";
import sciFi from '../scifi.json';
import horror from '../horror.json';
import history from '../history.json';
import romance from '../romance.json';

export default function BookDetails(theme) {

    const [data, setData] = useState([])
    const [book, setBook] = useState(null);
    const { asin } = useParams();

    useEffect(() => {
    const fullCatalog = [...sciFi, ...horror, ...history, ...romance]
    setData(fullCatalog);
    },[]);

    const findBook = useCallback(() => {
        const foundBook = data.find(book => book.asin === asin);
        setBook(foundBook);
        return foundBook;
    }, [asin, data]);
 
    useEffect(() => {
        findBook();
    },[findBook]);

    return (
    <>
        { book &&
        <Row className='gap-4 px-5 align-top justify-content-center mt-5'>
            <Col lg={3} md={6} xs={8} className='px-0'>
            <Card className=''>    
                <Card.Img className='rounded-1' src={book.img}/>
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Category: {book.category}</Card.Text>
                    <Card.Text>Price:  {book.price} $</Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col lg={5} className='px-0'>
                <CommentArea asin={book.asin}/>
            </Col>
        </Row> }
    </>
    )
}