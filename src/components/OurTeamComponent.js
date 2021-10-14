import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import TeamMember from "../images/team-1.jpg"
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube  } from "react-icons/io";

export class OurTeamComponent extends Component {
    constructor(props){
        super(props)
        this.state= {
            responsive:{
                0: {
                    items: 1,
                },
                450: {
                    items: 2,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
                1366: {
                    items: 4,
                },
                1920: {
                    items: 4,
                },
            },
        }
    }
    render() {
        return (
            <div>
                <section className="team_area">
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <div className="team_header services_header">
                                    <h5> Team Member </h5>
                                    <h2> Our Expert Team </h2>
                                </div>
                                <div className="team_box">
                                    <OwlCarousel 
                                        className="owl-theme country_carosule_area" 
                                        autoplayHoverPause={true}
                                        loop 
                                        margin={10} 
                                        nav={false}
                                        dots={true}
                                        autoplay={true}
                                        autoplayTimeout={4000}
                                        responsive={this.state.responsive}
                                        >
                                        <Link to="/">
                                            <div className="item">
                                                <div className="single_team">
                                                    <img src={TeamMember} alt="TeamMember"></img>
                                                   <div className="image">
                                                        <ul className="social">
                                                            <li><Link className="a_s_link" to="/about-us"> <IoLogoFacebook className="a_social" /> </Link></li>
                                                            <li><Link className="a_s_link" to="/about-us"> <IoLogoLinkedin className="a_social" /> </Link></li>
                                                            <li><Link className="a_s_link" to="/about-us"> <IoLogoTwitter className="a_social" /> </Link></li>
                                                            <li>  <Link className="a_s_link" to="/about-us"> <IoLogoYoutube className="a_social" /> </Link> </li>
                                                           
                                                        </ul>
                                                        <div className="content">
                                                            <h3>Justin Roberto</h3>
                                                            <span>CEO - Founder</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </OwlCarousel>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}

export default OurTeamComponent
