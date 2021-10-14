import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import AboutImg from "../images/about-2.jpg"
import AboutImg from "../images/about-3.png"
import AboutEffect from "../images/effect-1.png"
export class AboutComponent extends Component {
    render() {
        return (
            <div>
                {/* <section className="about_area">
                    <Container>
                        <Row>
                            <Col sm={6} md={12} lg={6}>
                                <img className="about_images" src={AboutImg} alt="AboutImg"></img>
                            </Col>
                            <Col sm={6} md={12} lg={6}>
                                <div className="about_contant">
                                    <div className="title-effect">
                                        <div className="bar bar-top"></div>
                                        <div className="bar bar-right"></div>
                                        <div className="bar bar-bottom"></div>
                                        <div className="bar bar-left"></div>
                                    </div>
                                    <span>About Us</span>
                                    <h3>We Help Companies to Generate Leads and Increase in Sales</h3>
                                    <div className="bar"></div>
                                    <p> <b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. </b> </p>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan ...<Link className="about_link" to="/"> Read More </Link> </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section> */}
                <section className="about_area">
                    <Container>
                        <Row>
                            <Col sm={6} md={12} lg={6}>
                                <div className="rs-animation-shape">
                                    <div className="a_images">
                                        <img  src={AboutImg} alt="AboutImg"></img>
                                    </div>
                                    <div className="middle-image2">
                                        <img className="dance" src={AboutEffect} alt="AboutEffect"></img>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} md={12} lg={6}>
                                <div className="about_contant">
                                    <div className="title-effect">
                                        <div className="bar bar-top"></div>
                                        <div className="bar bar-right"></div>
                                        <div className="bar bar-bottom"></div>
                                        <div className="bar bar-left"></div>
                                    </div>
                                    <span>About Us</span>
                                    <h3>We Are Increasing Business Success With Technology</h3>
                                    <div className="bar"></div>
                                    <p> Over 25 years working in IT services developing software applications and mobile apps for clients all over the world.  </p>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan ... </p>
                                    <div className="btn_class m_top">
                                        <Link className="about_link" to="/about-us"> Read More </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}

export default AboutComponent
