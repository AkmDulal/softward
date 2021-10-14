import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
export class ApplyPages extends Component {
    render() {
        
        return (
            <div>
                <section className="appley_pages_area">
                    <Container>
                    <Col sm={12} md={12} lg={12}>
                                <div className="contact_from_boxx">
                                    <div className="services_header">
                                            <h5>Apply for </h5>
                                            <h2>Front End Engineer Application</h2>
                                    </div>
                                    <div className="contact-form">
                                        <form>
                                            <Row>
                                                <Col sm={12} md={6} lg={6}>
                                                    <div className="form-group">
                                                    <input type="text" name="name" placeholder="Your Name" className="form-control" required ></input>
                                                    </div>
                                                </Col>
                                                <Col sm={12} md={6} lg={6}>
                                                    <div className="form-group">
                                                    <input type="email" name="email" placeholder="Your email address" className="form-control" required ></input>
                                                    </div>
                                                </Col>
                                                <Col sm={12} md={6} lg={6}>
                                                    <div className="form-group">
                                                    <input type="number" name="phone" placeholder="Your phone number" className="form-control" required ></input>
                                                    </div>
                                                </Col>
                                                <Col sm={12} md={6} lg={6}>
                                                    <div className="form-group">
                                                    <input type="text" name="subject" placeholder="Your Subject" className="form-control" required ></input>
                                                    </div>
                                                </Col>
                                                <Col sm={12} md={6} lg={6}>
                                                    <div className="form-group">
                                                    <input type="file" name="file" placeholder="Your Subject" className="form-control"  ></input>
                                                    </div>
                                                </Col>
                                                <Col sm={12} md={12} lg={12}>
                                                    <div className="form-group">
                                                    <textarea name="text" placeholder="Write your message..." className="form-control textarea_class" required></textarea>
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
                    </Container>
                </section>
            </div>
        )
    }
}

export default ApplyPages
