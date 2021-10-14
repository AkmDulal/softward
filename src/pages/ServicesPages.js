import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ServicesItemImg from "../images/services-1.png" 
export class ServicesPages extends Component {
    render() {
        return (
            <div>
                <div className="page_banner_area aboutBanner">
                    <Container>
                        <div className="page_banner_content">
                            <h2> Services </h2>
                            <Link to="/profile"> Home </Link>
                            <Link className="active" to="/profile"> Services </Link>
                        </div>
                    </Container>
                </div>
                <section className="services_pages_area">
                    <Container>
                        <Row>
                            <Col sm={12} md={6} lg={4}>
                                <div className="single-services">
                                    <div className="image">
                                        <Link to="/services-details">
                                            <img src={ServicesItemImg} alt="ServicesItemImg"></img>
                                        </Link>
                                    </div>
                                    <h3>  <Link to="/services-details"> Website Development </Link> </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                                    <Link className="services_link" to="/services-details"> Read More </Link>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className="single-services">
                                    <div className="image">
                                        <Link to="/services-details">
                                            <img src={ServicesItemImg} alt="ServicesItemImg"></img>
                                        </Link>
                                    </div>
                                    <h3>  <Link to="/services-details"> Website Development </Link> </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                                    <Link className="services_link" to="/services-details"> Read More </Link>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className="single-services">
                                    <div className="image">
                                        <Link to="/services-details">
                                            <img src={ServicesItemImg} alt="ServicesItemImg"></img>
                                        </Link>
                                    </div>
                                    <h3>  <Link to="/services-details"> Website Development </Link> </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                                    <Link className="services_link" to="/services-details"> Read More </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}

export default ServicesPages
