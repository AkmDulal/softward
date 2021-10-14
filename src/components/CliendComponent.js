import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ClindImage from "../images/Img01.png" 
import CliendTitle from "../images/Img02.png" 
export class CliendComponent extends Component {
    render() {
        return (
            <div>
                <section className="cliend_area">
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={6}>
                                <div className="cliend_img">
                                    <img src={ClindImage} alt="ClindImage"></img>
                                    <img className="Cliend_down_img" src={CliendTitle} alt="ClindImage"></img>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={6}>
                                <div className="cliend_contant_area">
                                    <h6> Simple To Get Started </h6>
                                    <h3> To make your claim contact us on given </h3>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry’s standard dummy text.Lorem Ipsum is simply dummy text of the printing and typesettin  Morbi sagittis hendrt nulla ultricies. Cras en diam ips elementum pretium hendrerit ultricies. Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry’s </p>
                                    <div className="btn_class m_top">
                                        <Link to="/"> View All </Link>
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

export default CliendComponent
