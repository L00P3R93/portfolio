import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Biosketch, Copyright, Quote, SocialMedia} from "..";
import socialMediaProfiles from '../../data/social-media.json'
import './style.scss'

const HomeFooter = () => {
    return (
        <footer>
            <div id="about-me-container" className="skewed-container">
                <Container>
                    <Row className="justify-content-center justify-content-lg-between">
                        <Col lg={6} className="align-self-start">
                            <Biosketch />
                            <Quote />
                        </Col>
                        <Col lg={4} className="col-auto align-self-center">
                            {
                                socialMediaProfiles
                                ? socialMediaProfiles.map((profile, i) =>
                                    <SocialMedia
                                        key={i}
                                        label={profile.label}
                                        icon={profile.icon}
                                        link={profile.link}
                                    />
                                    )
                                : ''
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
            <Copyright />
        </footer>
    )
}

export default HomeFooter