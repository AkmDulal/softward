import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AboutComponent from "../components/AboutComponent"
import OurTeamComponent from '../components/OurTeamComponent';
export class AboutPages extends Component {
    render() {
        return (
            <div>
                <div className="page_banner_area aboutBanner">
                    <Container>
                        <div className="page_banner_content">
                            <h2> About Us </h2>
                            <Link to="/about-us"> Home </Link>
                            <Link className="active" to="/about-us"> About Us </Link>
                        </div>
                    </Container>
                </div>
               
               
                <section className="about_pages_area">
                    <AboutComponent />
                    <OurTeamComponent />
                </section>
            </div>
        )
    }
}

export default AboutPages
