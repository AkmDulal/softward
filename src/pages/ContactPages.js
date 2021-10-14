import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsEnvelope, BsGeoAlt, BsPhone } from "react-icons/bs";
export class ContactPages extends Component {
    render() {
        return (
            <div>
                <div className="page_banner_area aboutBanner">
                    <Container>
                        <div className="page_banner_content">
                            <h2> Contact </h2>
                            <Link to="/profile"> Home </Link>
                            <Link className="active" to="/profile"> Contact </Link>
                        </div>
                    </Container>
                </div>
                <section className="contact_pages_area">
                    <Container>
                        <Row>
                            <Col sm={12} md={6} lg={4}>
                                <div className="contact-info-box">
                                    <div className="icon"> <BsEnvelope /> </div>
                                    <h3>Email Here</h3>
                                    <p><a href="mailto:hello@softwrd.com">hello@softwrd.com</a></p>
                                    <p><a href="mailto:support@softwrd.com">support@softwrd.com</a></p>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className="contact-info-box">
                                    <div className="icon"> <BsGeoAlt /> </div>
                                    <h3>Location Here</h3>
                                    <p> <a href="/"> Dhaka, Bangladesh </a> </p>
                                    <p> <a href="/"> Dhaka, Bangladesh </a> </p>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className="contact-info-box">
                                    <div className="icon"> <BsPhone /> </div>
                                    <h3>Call Here</h3>
                                    <p><a href="/"> +123 456 7890 </a></p>
                                    <p><a href="/"> +123 456 7890 </a></p>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={12}>
                                <div className="contact_from_boxx">
                                    <div className="services_header">
                                            <h5>Get in Touch </h5>
                                            <h2>Ready to Get Started?</h2>
                                    </div>
                                    <div className="contact-form">
                                        <form>
                                            <Row>
                                                <Col sm={12} md={6} lg={6}>
                                                    <div className="form-group">
                                                    <input type="text" name="name" placeholder="Your Name" className="form-control" ></input>
                                                    </div>
                                                </Col>
                                                <Col sm={12} md={6} lg={6}>
                                                    <div className="form-group">
                                                    <input type="email" name="email" placeholder="Your email address" className="form-control" ></input>
                                                    </div>
                                                </Col>
                                                <Col sm={12} md={6} lg={6}>
                                                    <div className="form-group">
                                                    <input type="number" name="phone" placeholder="Your phone number" className="form-control" ></input>
                                                    </div>
                                                </Col>
                                                <Col sm={12} md={6} lg={6}>
                                                    <div className="form-group">
                                                    <input type="text" name="subject" placeholder="Your Subject" className="form-control" ></input>
                                                    </div>
                                                </Col>
                                                <Col sm={12} md={12} lg={12}>
                                                    <div className="form-group">
                                                    <textarea name="text" placeholder="Write your message..." className="form-control textarea_class"></textarea>
                                                    </div>
                                                </Col>
                                                <Col sm={12} md={12} lg={12} className="justify-content-center">
                                                    <div className="btn_class contact_from_btn">
                                                        
                                                    <button type="submit" className="default-btn contact__btn">Send Message</button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </form>
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

export default ContactPages
