import { Component } from "react";
import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import ContactUS from './ContactUS'
import { BrowserRouter as Route, Switch, Link, Router } from 'react-router-dom'

class Navv extends Component {
    render() {
        return (
            <Container>
                <Navbar bg="light" variant="light">
                    <div>
                        <Nav className="me-auto">
                            <Navbar.Brand>
                                <img src={"/Pictures/bpk image.jpg"} alt="BPK SHOP" style={{ marginTop: -7, width: 50, height: 50 }} /> SHOP
                            </Navbar.Brand>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#">SHOP</Nav.Link>
                            <Nav.Link href="#">PCMC</Nav.Link>
                            <Nav.Link href="#">PAGE</Nav.Link>
                            <Nav.Link href="#">PROMOTION</Nav.Link>
                            <Nav.Link href="#">BLOG</Nav.Link>
                            <Nav.Link href="/ContactUS">CONTACT US</Nav.Link>
                        </Nav>
                    </div>
                </Navbar>
            </Container>
        )
    }
}

export default Navv;