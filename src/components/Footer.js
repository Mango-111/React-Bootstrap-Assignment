import React from 'react';
import { Component } from 'react';
import { Carousel, Container, Card, Col, Row, Button, Image } from 'react-bootstrap';
import background from '../Images/footer.jpg';



class Footer extends Component {
    render() {
        return (
            <section>
                <section>
                    <Container style={{ backgroundImage: `url(${background})`, height: 420 }}>
                        <section>
                            <Carousel>
                                <Carousel.Item className="mt-5">
                                    <Image src="/Pictures/tata1.jpg" roundedCircle style={{ width: 150, height: 100 }} />
                                    <Carousel.Caption>
                                        <p>" I have been constantly telling people to encourage people, to question the unquestioned and not to be ashamed to bring up new ideas, new processes to get things done."</p>
                                        <h2> Ratan Tata</h2>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="mt-5">
                                    <Image src="/Pictures/steve.jpg" roundedCircle style={{ width: 150, height: 100 }} />
                                    <Carousel.Caption>
                                        <p>"Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary. "</p>
                                        <h2> Steve Jobs</h2>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="mt-5">
                                    <Image src="/Pictures/tata.jpg" roundedCircle style={{ width: 150, height: 100 }} />
                                    <Carousel.Caption>
                                        <p>" There are many things that, if I have to relive, maybe I will do it another way. But I would not like to look back and think what I have not been able to."</p>
                                        <h2>Ratan Tata</h2>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </section>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row className="text-center text-white">
                            <Col>
                                <Card style={{ width: '12rem', backgroundColor: "darkblue" }}>
                                    <Card.Body>FACEBOOK</Card.Body>
                                </Card>
                            </Col>
                            <Col >
                                <Card bg="info" style={{ width: '12rem' }}>
                                    <Card.Body>TWITTER</Card.Body>
                                </Card>
                            </Col>
                            <Col >
                                <Card style={{ width: '12rem', backgroundColor: "purple" }}>
                                    <Card.Body>INSTAGRAM</Card.Body>
                                </Card>
                            </Col>
                            <Col >
                                <Card style={{ width: '12rem', backgroundColor: "palevioletred" }}>
                                    <Card.Body>ORANGE</Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg="danger" style={{ width: '12rem' }}>
                                    <Card.Body>PINTREST</Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <section>
                        <Container className="text-center text-white" style={{backgroundColor:"black",height:300}}>
                            <img src="/Pictures/bpk image.jpg" style={{width:100,height:60,marginTop:30}}/>
                            <p className="mt-4">Have you noticed that whatever sport you're trying to learn, some earnest person is always telling you to keep your knees bent?
                            <br/>Adversity causes some men to break; others to break records.</p>
                            <div>
                                <img src="/Pictures/logo1.png" style={{width:90,height:70}}/>
                                <img src="/Pictures/logo2.png" style={{width:80,height:60,marginLeft:5}}/>
                                 <img src="/Pictures/logo3.png" style={{width:90,height:70,marginLeft:5}}/>
                                <img src="/Pictures/logo4.png" style={{width:70,height:50,marginLeft:5}}/>
                                <img src="/Pictures/logo5.png" style={{width:70,height:50,marginLeft:5}}/>
                            </div>
                        </Container>
                     <p className="text-center mt-4"> Copyright @2021 Designed By<span style={{color:"blue"}}> Ambika Hadapad</span> All rights reserved</p>
                    </section>
                </section>
            </section>
        )
    }
}
export default Footer;

// style={{backgroundImage: "http://localhost:3000//Pictures/footer_bg.jpg"}}
