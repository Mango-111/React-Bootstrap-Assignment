import React from 'react';
import { Component } from 'react';
import { Container , Col, Row} from 'react-bootstrap';

class Main extends Component {
    render() {
        return (
            <Container className="mt-5">
                <Row>
                    <Col>
                    <img src="/Pictures/sports.jpg"/>
                    </Col>
                    <Col>
                    <h4> HOT DEALS</h4>
                        <h2> Tulos Draey Skirts</h2>
                        <h3><span style={{color:"red"}}>$230.00</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque modi nobis libero architecto sequi quasi, a ducimus et,
                             molestiae mollitia quibusdam similique temporibus enim, reiciendis officiis quam commodi facere quo.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum doloribus id perspiciatis ullam ducimus, ut quidem natus
                             quisquam eveniet suscipit corporis voluptas nam autem dolorum, earum quasi facilis ex? Repellat!
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Main;