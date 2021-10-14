import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CareersImg from "../images/services-7.jpg"
export class CareersPages extends Component {
    render() {
        return (
            <div>
                <div className="page_banner_area aboutBanner">
                    <Container>
                        <div className="page_banner_content">
                            <h2> Careers </h2>
                            <Link to="/profile"> Home </Link>
                            <Link className="active" to="/profile"> Careers </Link>
                        </div>
                    </Container>
                </div>
                <section className="Careers_pages_area">
                    <Container>
                        <Row>
                            <Col sm={12} md={6} lg={4}>
                                <div className="single-services-item">
                                    <div className="images">
                                        <img src={CareersImg} alt="CareersImg"></img>
                                    </div>
                                    <div className="content">
                                    <h3> <Link to="/career-details"> Full Stack Engineer </Link> </h3>
                                    <span><Link to="/career-details">Software Engineer</Link></span>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className="single-services-item">
                                    <div className="images">
                                        <img src={CareersImg} alt="CareersImg"></img>
                                    </div>
                                    <div className="content">
                                    <h3> <Link to="/career-details"> Full Stack Engineer </Link> </h3>
                                    <span><Link to="/career-details">Software Engineer</Link></span>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className="single-services-item">
                                    <div className="images">
                                        <img src={CareersImg} alt="CareersImg"></img>
                                    </div>
                                    <div className="content">
                                    <h3> <Link to="/career-details"> Full Stack Engineer </Link> </h3>
                                    <span><Link to="/career-details">Software Engineer</Link></span>
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

export default CareersPages
