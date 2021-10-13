import React from 'react';
import { Component } from 'react';
import { Carousel, Container, Card, Col, Row, Button } from 'react-bootstrap';


class Carr extends Component {
    render() {
        return (
            <section>
                <section>
                    <Container>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Pictures/bg1.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>The World <br />Of Extreme Sports</h3>
                                    <p>SAVE 20% ON ALL APPAREL</p>
                                    <Button variant="dark"> SHOP NOW</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Pictures/run_bg.jpg"
                                    alt="Second slide"
                                />
                            <Carousel.Caption>
                                    <h3 >Chicago</h3>
                                    <p>Thank you, Chicago!</p>
                                    <Button variant="dark"> SHOP NOW</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Pictures/shop_bg.jpg"
                                    alt="Third slide"
                                />
                            <Carousel.Caption>
                                    <h3 style={{ color: "black" }}>New York</h3>
                                    <p style={{ color: "blue" }}>We love the Big Apple!</p>
                                    <Button variant="warning"> SHOP NOW</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Container>
                </section>

                <section>
                    <Container>
                        <Row className="text-center mt-4 text-white">
                            <Col>
                                <Card bg="info" style={{ width: '22rem'}}>
                                    <Card.Body>FREE SHIPPING WORLDWIDE</Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg="danger" style={{ width: '22rem' }}>
                                    <Card.Body>100% MONEY BACK-48 HOURS</Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg="warning" style={{ width: '22rem' }}>
                                    <Card.Body>24/7 ONLINE CUSTOMER-SUPPORT</Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>

        )
    }
}

export default Carr;