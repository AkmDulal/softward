import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ServicesImg from "../images/Ban20.png"
import { DiAppstore, DiDatabase, DiHtml53DEffects } from "react-icons/di";
import { BiImage, BiGitMerge, BiCollection } from "react-icons/bi";

export class ServicesComponent extends Component {
    render() {
        return (
            <div>
                <section className="services_area">
                   <div className="services_header">
                         <h5>Technology solutions </h5>
                        <h2> We provide IT & Business solutions </h2>
                        <p>  Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry’s standard dummy text.Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                   </div>
                   <div className="services_contant services_contant_left">
                       <Container>
                           <Row>
                               <Col sm={12} md={12} lg={3}>
                                   <div className="services_all_box services_all_box_left">
                                        <div className="services_box">
                                            <DiAppstore />
                                            <div className="services_bx_cnt">
                                                <h3> Artificial intelligence </h3>
                                                <p> Lorem ipsum dolor intellig sit amet ... </p>
                                            </div>
                                        </div>
                                   </div>
                                   <div className="services_all_box services_all_box_left">
                                        <div className="services_box">
                                            <DiDatabase />
                                            <div className="services_bx_cnt">
                                                <h3> Data mining </h3>
                                                <p> Lorem ipsum dolor intellig sit amet ... </p>
                                            </div>
                                        </div>
                                   </div>
                                   <div className="services_all_box services_all_box_left">
                                        <div className="services_box">
                                            <DiHtml53DEffects />
                                            <div className="services_bx_cnt">
                                                <h3> Application architecture </h3>
                                                <p> Lorem ipsum dolor intellig sit amet ... </p>
                                            </div>
                                        </div>
                                   </div>
                               </Col>
                               <Col sm={12} md={12} lg={6}>
                                   <div className="services_all_box_img">
                                       <img src={ServicesImg} alt="ServicesImg"></img>
                                   </div>
                               </Col>
                               <Col sm={12} md={12} lg={3}>
                                   <div className="services_all_box services_all_box_right">
                                        <div className="services_box">
                                            <BiImage />
                                            <div className="services_bx_cnt">
                                                <h3> Image recognition </h3>
                                                <p> Lorem ipsum dolor intellig sit amet ... </p>
                                            </div>
                                        </div>
                                   </div>
                                   <div className="services_all_box services_all_box_right">
                                        <div className="services_box">
                                            <BiGitMerge />
                                            <div className="services_bx_cnt">
                                                <h3> Network optimization </h3>
                                                <p> Lorem ipsum dolor intellig sit amet ... </p>
                                            </div>
                                        </div>
                                   </div>
                                   <div className="services_all_box services_all_box_right">
                                        <div className="services_box">
                                            <BiCollection />
                                            <div className="services_bx_cnt">
                                                <h3> Interface design </h3>
                                                <p> Lorem ipsum dolor intellig sit amet ... </p>
                                            </div>
                                        </div>
                                   </div>
                               </Col>
                           </Row>
                       </Container>
                   </div>
                </section>
            </div>
        )
    }
}

export default ServicesComponent
