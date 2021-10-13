import React from 'react';
import { Component } from 'react';
import { Container, Col, Row ,Card } from 'react-bootstrap';

class Deals extends Component {
    render() {
        return (
            <section>
                <section>
                    <Container className="mt-5 text-center">
                        <h3>INSTAGRAM</h3>
                        <Row className="mt-5">
                            <Col md={2}>
                                <img src="/Pictures/water drinking.jpg" style={{ width: 155, height: 200 }} alt="Leatt Pro Jacket" />
                            </Col>
                            <Col md={2}>
                                <img src="/Pictures/car.jpg" style={{ width: 155, height: 200 }} alt="Boots" />
                            </Col>
                            <Col md={2}>
                                <img src="/Pictures/ploen.jpg" style={{ width: 155, height: 200 }} alt="Backpack" />
                            </Col>
                            <Col md={2}>
                                <img src="/Pictures/keep.jpg" style={{ width: 155, height: 200 }} alt="Sports shoes" />
                            </Col>
                            <Col md={2}>
                                <img src="/Pictures/birds.jpg" style={{ width: 155, height: 200 }} alt="Purse" />
                            </Col>
                            <Col md={2}>
                                <img src="/Pictures/mountain.jpg" style={{ width: 155, height: 200 }} alt="Glasses" />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row className="mt-4">
                            <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" style={{width:100, height:200}} src="/Pictures/jacket1.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Leatt Jacket</Card.Title>
                                        <Card.Text style={{color:"blue"}}>$500.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" style={{width:100, height:200}} src="/Pictures/pants.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Leatt Pants</Card.Title>
                                        <Card.Text style={{color:"blue"}}>$1000.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" style={{width:100, height:200}} src="/Pictures/cap.jpeg"/>
                                    <Card.Body>
                                        <Card.Title>Leatt Cap</Card.Title>
                                        <Card.Text style={{color:"blue"}}>$100.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" style={{width:100, height:200}} src="/Pictures/handgloves.jpeg"/>
                                    <Card.Body>
                                        <Card.Title>Leatt Handgloves</Card.Title>
                                        <Card.Text style={{color:"blue"}}>$500.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" style={{width:100, height:200}} src="/Pictures/purse.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Leatt Purse</Card.Title>
                                        <Card.Text style={{color:"blue"}}>$1000.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" style={{width:100, height:200}} src="/Pictures/glasses.png"/>
                                    <Card.Body>
                                        <Card.Title>Leatt Glasses</Card.Title>
                                        <Card.Text style={{color:"blue"}}>$100.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" style={{width:100, height:200}} src="/Pictures/boots.jpeg"/>
                                    <Card.Body>
                                        <Card.Title>Leatt Boots</Card.Title>
                                        <Card.Text style={{color:"blue"}}>$500.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" style={{width:100, height:200}} src="/Pictures/cap.jpeg"/>
                                    <Card.Body>
                                        <Card.Title>Leatt Cap</Card.Title>
                                        <Card.Text style={{color:"blue"}}>$1000.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" style={{width:100, height:200}} src="/Pictures/sports shoes.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Leatt Sports Shoes</Card.Title>
                                        <Card.Text style={{color:"blue"}}>$100.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>
        )
    }
}
export default Deals;
