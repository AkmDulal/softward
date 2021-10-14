import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BiUser, BiMap, BiListCheck, BiChalkboard } from "react-icons/bi";
import Profiledetails from "../images/portfolio-details.jpg"


export class ServicesDetails extends Component {
    render() {
        return (
            <div>
                <div className="page_banner_area aboutBanner">
                    <Container>
                        <div className="page_banner_content">
                            <h2> Services Details </h2>
                            <Link to="/profile"> Home </Link>
                            <Link className="active" to="/profile"> Services-details </Link>
                        </div>
                    </Container>
                </div>
                <section className="profile_details_area">
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={8}>
                                <img src={Profiledetails} alt="Profiledetails"></img>
                                <div className="portfolio_details_desc">
                                    <h3>Competitor Analysis</h3>
                                    <p>Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei latine prop riae na, mea cu purto debitis.</p>


                                    <div class="features_text">
                                        <h4>
                                            Core Development
                                        </h4>
                                        <p>No fake products and services. The customer is king their lives and needs are the inspiration.</p>
                                    </div>

                                    <div class="features_text">
                                        <h4>
                                            Define Your Choices
                                    </h4>
                                        <p>No fake products and services. The customer is king their lives and needs are the inspiration.</p>
                                    </div>


                                    <div class="features_text">
                                        <h4>
                                            Customer Satisfaction for a Digital Marketing Agency
                                    </h4>
                                        <p>Nost rud no eos, no impedit dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise. Ad po exerci nusquam eos te. Cu altera expet enda qui, munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui munere oblique theophr astus ea vix modus civiu mod eratius.</p>
                                    </div>


                                </div>

                            </Col>
                            <Col sm={12} md={12} lg={4}>
                                <div className="portfolio_details_right">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <BiUser />
                                            </div>
                                            <span>Client:</span>
                                            <Link to="#"> https://www.softwrd.ai/ </Link>
                                            <Link to="/"> cliend.com </Link>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <BiMap />
                                            </div>
                                            <span>Location:</span>
                                            Bangladesh
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <BiChalkboard />
                                            </div>
                                            <span>Technologies:</span>
                                            IT Startups & Digital Services
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <BiListCheck />
                                            </div>
                                            <span>Completed::</span>
                                            26 May 2021
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}

export default ServicesDetails
