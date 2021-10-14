import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Logo from "../../images/icon.png";
import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube  } from "react-icons/io";

export class Footer extends Component {
    render() {
        return (
            <div>
                <section className="footer_area">
                    <div className="divider"></div>
                    <div className="footer_contant_area">
                        <Container>
                            <Row>
                                <Col sm={12} md={4} lg={4}>
                                    <div className="logo_area footer_logo_">
                                        <Link  to="/">
                                            <img src={Logo} alt="logo"></img>
                                            <h1> Softwrd </h1>
                                        </Link>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                    </div>
                                </Col>
                                <Col sm={6} md={2} lg={2}>
                                    <div className="logo_area footer__contant">
                                       <h3> Company </h3>
                                       <Link to="/">  About Us </Link>
                                        <Link to="/">  Services </Link>
                                        <Link to="/">  Career </Link>
                                    </div>
                                </Col>
                                <Col sm={6} md={2} lg={2}>
                                    <div className="logo_area footer__contant">
                                       <h3> Support </h3>
                                       <Link to="/">  FAQ's </Link>
                                        <Link to="/">  Privacy Policy </Link>
                                        <Link to="/">  Terms & Conditions </Link>
                                        <Link to="/">  Contact </Link>
                                    </div>
                                </Col>
                                <Col sm={12} md={4} lg={4}>
                                    <div className="logo_area footer__contant">
                                        <h3> Contact Info </h3>
                                        <p> Location: <span> Dhaka, Bangladesh </span> </p>
                                        <p> Email: <span> info@softwrd.com  </span></p>
                                        <p> Phone: <span> +0 (123) 456 789 </span> </p>
                                        <div className="footer_social_icon">
                                            <Link to="/"> <IoLogoFacebook /> </Link>
                                            <Link to="/"> <IoLogoLinkedin /> </Link>
                                            <Link to="/"> <IoLogoTwitter /> </Link>
                                            <Link to="/"> <IoLogoYoutube /> </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={12} lg={12}>
                                <p className="footer_bottom">  Copyright © 2021 Google. Designed by <a href="https://www.behance.net/dulalhossa1d06"> AKM Dulal Hossain </a> </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default Footer
