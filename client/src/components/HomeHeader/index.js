import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Intro, NavBar, Portrait} from "../index";
import './style.scss'

const HomeHeader = () => {
    return (
        <header>
            <div id="intro-container" className="skewed-container">
                <Container fluid="lg" className="text-center">
                    <Row className="justify-content-between">
                        <Col lg={4} className="text-lg-left">
                            {/*Personal Logo*/}
                        </Col>
                        <Col lg={8} className="pl-0 pr-0 text-lg-right">
                            <NavBar />
                        </Col>
                    </Row>
                    <Row className="mt-3 justify-content-between">
                        <Col lg={7} className="align-self-center text-lg-left">
                            <Intro />
                        </Col>
                        <Col lg={5} className="align-self-center text-lg-right">
                            <Portrait />
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    )
}

export default HomeHeader