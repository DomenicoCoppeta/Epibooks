import React from 'react';
import sciFi from '../scifi.json';
import horror from '../horror.json';
import history from '../history.json';
import romance from '../romance.json';
import { Container, Row, Tab, Tabs, Col} from "react-bootstrap";
import { useState } from "react";
import SingleBook from './SingleBook';
import Welcome from './Welcome';


export default function AllTheBooks( {searchTerm,}) {
    const [selectedBooks, setSelectedBooks] = useState({});
    

    const handleBookSelection = (key, bookAsin) => {
        setSelectedBooks({
            ...selectedBooks,
            [key]: bookAsin,
        });
    }

    return (
    <>
    <Welcome/>
    <Tabs id="controlled-tab-example"  className="mb-3 px-5 d-flex justify-content-evenly">
            <Tab eventKey="scifi" title="Sci-Fi" onSelect={(k) => setSelectedBooks({ ...selectedBooks, 'scifi': null })}>
                <Container  fluid className="text-center d-flex px-5">
                        <Col className="row gap-3 d-flex justify-content-center">
                            {sciFi
                                .filter((book) => book.title.toLowerCase().includes(searchTerm))
                                .map((book) => {
                                    return (
                                        <SingleBook 
                                        book={book} 
                                        key={book.asin} 
                                        selected={selectedBooks['scifi'] === book.asin} 
                                        onSelect={(bookAsin) => handleBookSelection('scifi', bookAsin)} />
                                    );
                            })}
                        </Col>
                </Container>
            </Tab>
            <Tab eventKey="horror" title="Horror" onSelect={(k) => setSelectedBooks({ ...selectedBooks, 'horror': null })}>
            <Container  fluid className="text-center d-flex px-5">
                        <Col className="row gap-3 d-flex justify-content-center">
                            {horror
                                .filter((book) => book.title.toLowerCase().includes(searchTerm))
                                .map((book) => {
                                    return (
                                        <SingleBook 
                                        book={book} 
                                        key={book.asin} 
                                        selected={selectedBooks['horror'] === book.asin} 
                                        onSelect={(bookAsin) => handleBookSelection('horror', bookAsin)} />
                                    );
                            })}
                        </Col>
                </Container>
            </Tab>
            <Tab eventKey="romance" title="Romance" onSelect={(k) => setSelectedBooks({ ...selectedBooks, 'romance': null })} >
            <Container fluid className="mx-3 text-center">
                    <Row className='d-flex'>
                    <Col className="row gap-3 d-flex justify-content-center">
                        {romance
                            .filter((book) => book.title.toLowerCase().includes(searchTerm))
                            .map((book) => {
                                return (
                                    <SingleBook 
                                    book={book} 
                                    key={book.asin} 
                                    selected={selectedBooks['romance'] === book.asin} 
                                    onSelect={(bookAsin) => handleBookSelection('romance', bookAsin)} />
                                );
                            })}
                    </Col>
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="history" title="History" onSelect={(k) => setSelectedBooks({ ...selectedBooks, 'history': null })}>
            <Container fluid className="mx-3 text-center">
                    <Row className='d-flex'>
                    <Col className="row gap-3 d-flex justify-content-center">
                        {history
                            .filter((book) => book.title.toLowerCase().includes(searchTerm))
                            .map((book) => {
                                return (
                                    <SingleBook 
                                    book={book} 
                                    key={book.asin} 
                                    selected={selectedBooks['history'] === book.asin} 
                                    onSelect={(bookAsin) => handleBookSelection('history', bookAsin)} />
                                );
                            })}
                    </Col>
                    </Row>
                </Container>
            </Tab>
    </Tabs>
    </>
    )
}

