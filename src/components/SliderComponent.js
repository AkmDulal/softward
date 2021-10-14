import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from "../images/banner-image-4.jpg";
export class SliderComponent extends Component {
    render() {
        return (
            <div>
                <section className="slider_area">
                    <div className="container-fluid">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <div className="slider_contant_area">
                                    <div className="slider_content">
                                        <h1>Secure IT Solutions for a more secure environment </h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        <div className="btn_class">
                                            <Link to="/"> Services </Link>
                                        </div>
                                        <div className="slider_phone">
                                            <h3> Call us 888-123-4587 </h3>
                                            <p> For any question  </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <div className="main_banner_image">
                                    <img src={Banner} alt="Banner"></img>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </div>
        )
    }
}

export default SliderComponent
