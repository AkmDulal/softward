import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProfileImages from "../images/portfolio-9.jpg" 
import { VscAdd } from "react-icons/vsc";
export class ProfilePages extends Component {
    render() {
        return (
            <div>
                <div className="page_banner_area aboutBanner">
                    <Container>
                        <div className="page_banner_content">
                            <h2> Profile </h2>
                            <Link to="/profile"> Home </Link>
                            <Link className="active" to="/profile"> Profile </Link>
                        </div>
                    </Container>
                </div>
                <section className="profile_pahes_area">
                    <Container>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <div className="single_portfolio">
                                    <div className="portfolio_image">
                                        <img src={ProfileImages} alt="ProfileImages"></img>
                                    </div>
                                    <div className="portfolio_content">
                                        <Link to="/profile-details">
                                            <VscAdd />
                                        </Link>
                                        <h3>
                                            <Link to="/profile-details">
                                            Creative Web Design
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <div className="single_portfolio">
                                    <div className="portfolio_image">
                                        <img src={ProfileImages} alt="ProfileImages"></img>
                                    </div>
                                    <div className="portfolio_content">
                                        <Link to="/profile-details">
                                            <VscAdd />
                                        </Link>
                                        <h3>
                                            <Link to="/profile-details">
                                            Creative Web Design
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <div className="single_portfolio">
                                    <div className="portfolio_image">
                                        <img src={ProfileImages} alt="ProfileImages"></img>
                                    </div>
                                    <div className="portfolio_content">
                                        <Link to="/profile-details">
                                            <VscAdd />
                                        </Link>
                                        <h3>
                                            <Link to="/profile-details">
                                            Creative Web Design
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <div className="single_portfolio">
                                    <div className="portfolio_image">
                                        <img src={ProfileImages} alt="ProfileImages"></img>
                                    </div>
                                    <div className="portfolio_content">
                                        <Link to="/profile-details">
                                            <VscAdd />
                                        </Link>
                                        <h3>
                                            <Link to="/profile-details">
                                            Creative Web Design
                                            </Link>
                                        </h3>
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

export default ProfilePages
