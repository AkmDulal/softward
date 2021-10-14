import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {  BiStop } from "react-icons/bi";

export class CareerDetailsPages extends Component {
    render() {
        return (
            <div>
                <div className="page_banner_area aboutBanner">
                    <Container>
                        <div className="page_banner_content">
                            <h2> Careers-Details </h2>
                            <Link to="/profile"> Home </Link>
                            <Link className="active" to="/profile"> Careers-Details </Link>
                        </div>
                    </Container>
                </div>
                <section className="profile_details_area">
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={8}>
                                <div className="portfolio_details_desc">
                                    <h3>Description</h3>
                                    <p> Our business centers around building intelligent systems based on the synthesis and analysis of data, and packaging these in intuitive and easy-to-use user interfaces. You will be working with the front end and back end systems and teams, playing a key role in bridging the gap between the two. You will be collecting and processing large datasets, analyzing the data, creating reliable and secure back ends to serve the applications, and developing user-friendly interfaces that are smooth, fast and intuitive. </p>


                                    <div class="features_text">
                                        <h4> Practicals </h4>
                                        <p> <BiStop /> Proficient in oral and written English</p>
                                        <p> <BiStop/>  2-5 years experience </p>
                                        <p> <BiStop /> Live in / willing to move to Dhaka </p>
                                        <p> <BiStop /> Need to be able to start soon </p>
                                    </div>

                                    <div class="features_text">
                                        <h4> Qualifications </h4>
                                        <p> <BiStop /> Minimum Bachelors in Computer Science or Equivalent</p>
                                        <p> <BiStop/>  Expert in Python, experience with Rust, C++, Java is favorable </p>
                                        <p> <BiStop /> Expert in SQL and technologies like MySQL (preferred) or PostgreSQL </p>
                                        <p> <BiStop /> Expert in HTML, CSS and Javascript </p>
                                        <p> <BiStop /> Ability to meet tight deadlines and be willing to put in extra effort when it matters </p>
                                        <p> <BiStop /> A track record of exceptional performance </p>
                                    </div>

                                    <div class="features_text">
                                        <h4> Pay </h4>
                                        <p> <BiStop /> 100,000 BDT per month + annual bonus</p>
                                       
                                    </div>
                                    <div class="features_text">
                                        <h4> Application Process </h4>
                                        <p> <BiStop /> Send your CV along with a cover letter stating why you are a good fit for this company. Include your name, phone number, and email address.</p>
                                        <p> <BiStop /> In the subject line, add the title you are applying for.</p>
                                        <p> <BiStop /> In your cover letter, please include a story that says something interesting about you</p>
                                        <p> <BiStop /> If your application is accepted, you will receive an email from us with details of your interview. </p>
                                       
                                    </div>
                                </div>

                            </Col>
                            <Col sm={12} md={12} lg={4}>
                                <div className="portfolio_details_right">
                                    <ul>
                                        <li className="job_summry_list">
                                            <span>Job Summary</span>
                                            <p> <BiStop /> Published on: 25 May 2021 .</p>
                                            <p> <BiStop /> Vacancy:  Not specific  .</p>
                                            <p> <BiStop /> Employment Status: Full-time   .</p>
                                            <p> <BiStop /> Experience: 4 to 5 year(s)    .</p>
                                            <p> <BiStop /> Experience: 4 to 5 year(s)    .</p>
                                            <p> <BiStop /> Job Location: Dhaka     .</p>
                                            <p> <BiStop /> Salary: Negotiable      .</p>
                                            <p> <BiStop /> Application Deadline: 5 Jun 2021      .</p>
                                            <div className="btn_class ">
                                                <Link to="/apply-from">
                                                    <button type="submit" className="default-btn">   Apply  </button>
                                                </Link>
                                            </div>
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

export default CareerDetailsPages
