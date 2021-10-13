import React from 'react';
import { Component } from 'react';
import { Container , Nav, Col, Row} from 'react-bootstrap';

class Products extends Component {
    render() {
        return (
            <Container>
                <section>
                    <section className="text-center mt-5">
                        <h4> FEATURED COLLECTIONS</h4>
                    </section>
                    <section>
                        <Nav className="justify-content-center" activeKey="/home">
                            <Nav.Link href="/home">NEW ARRIVAL</Nav.Link>
                            <Nav.Link eventKey="link-1">CLOTHING</Nav.Link>
                            <Nav.Link eventKey="link-2">HATS</Nav.Link>
                            <Nav.Link eventKey="link-3"> SHOES</Nav.Link>
                            <Nav.Link eventKey="link-4"> BAGS</Nav.Link>
                            <Nav.Link eventKey="link-5"> ACCESSORIES</Nav.Link>
                        </Nav>
                    </section>
                    <section>
                    <Container>
                        <Row className="text-center">
                            <Col md={2}>
                                <img src="/Pictures/jacket.jpg" style={{width:100,height:200}}  alt="Leatt Pro Jacket"/>
                                <div>
                                    <p> Leatt Pro jacket</p>
                                    <p style={{color:"red"}}> $550.00</p>
                                </div>

                                <img src="/Pictures/sports shoes.jpg" style={{width:100,height:200}} alt="Sports shoes"/>
                                <div>
                                    <p> Sports Shoes</p>
                                    <p style={{color:"red"}}> $650.00</p>
                                </div>
                            </Col>
                            <Col  md={2}>
                                <img src="/Pictures/boots.jpeg" style={{width:100,height:200}} alt="Boots"/>
                                <div>
                                    <p> Leatt Pro boots</p>
                                    <p style={{color:"red"}}> $850.00</p>
                                </div>
                                <img src="/Pictures/purse.jpg" style={{width:100,height:200}} alt="Purse"/>
                                <div>
                                    <p> Leatt Pro Purse</p>
                                    <p style={{color:"red"}}> $750.00</p>
                                </div>
                            </Col>
                            <Col md={2}>
                                <img src="/Pictures/backpack.jpg" style={{width:100,height:200}} alt="Backpack"/>
                                <div>
                                    <p> Leatt Pro backpack</p>
                                    <p style={{color:"red"}}> $1550.00</p>
                                </div>
                                <img src="/Pictures/glasses.png" style={{width:100,height:200}} alt="Glasses"/>
                                <div>
                                    <p> Leatt Pro glasses</p>
                                    <p style={{color:"red"}}> $950.00</p>
                                </div>
                            </Col>
                        <Col md={2}>
                                <img src="/Pictures/handgloves.jpeg" style={{width:100,height:200}}  alt="Handgloves"/>
                                <div>
                                    <p> Leatt Pro handgloves</p>
                                    <p style={{color:"red"}}> $50.00</p>
                                </div>

                                <img src="/Pictures/jacket1.jpg" style={{width:100,height:200}} alt="Jacket"/>
                                <div>
                                    <p> Leatt Pro jacket</p>
                                    <p style={{color:"red"}}> $500.00</p>
                                </div>
                            </Col>
                            <Col md={2}>
                                <img src="/Pictures/pants.jpg" style={{width:100,height:200}} alt="Pants"/>
                                <div>
                                    <p> Leatt Pro Pants</p>
                                    <p style={{color:"red"}}> $750.00</p>
                                </div>
                                <img src="/Pictures/suit.jpg" style={{width:100,height:200}} alt="Suit"/>
                                <div>
                                    <p> Leatt Pro Suit</p>
                                    <p style={{color:"red"}}> $2550.00</p>
                                </div>
                            </Col>
                            <Col md={2}>
                                <img src="/Pictures/hat.jpg" style={{width:100,height:200}} alt="Hat"/>
                                <div>
                                    <p> Leatt Pro Hat</p>
                                    <p style={{color:"red"}}> $450.00</p>
                                </div>
                                <img src="/Pictures/cap.jpeg" style={{width:100,height:200}} alt="Cap"/>
                                <div>
                                    <p> Leatt Pro Cap</p>
                                    <p style={{color:"red"}}> $90.00</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    </section>
                </section>
            </Container>
        )
    }
}
export default Products;