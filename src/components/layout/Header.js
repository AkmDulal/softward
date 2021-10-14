import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Logo from "../../images/icon.png";
import { Link } from "react-router-dom";
import { Drawer } from 'antd';
import { VscListSelection, VscClose } from "react-icons/vsc";
export class Header extends Component {
    constructor(props){
        super(props)
        this.state = { visible: false, placement: 'left' };
    }

       // Menu Scrolled 
       componentDidMount(){
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if(isTop !== true){
                this.setState({ scrolled: true });
            } else {
                this.setState({ scrolled: false })
            }
        });
    }


    showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
      onClose = () => {
        this.setState({
          visible: false,
        });
      };
    
      onChange = e => {
        this.setState({
          placement: e.target.value,
        });
      };
    render() {
        const { placement, visible } = this.state;
        return (
            <div className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
                <section  className="header_area">
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={3}>
                                <div className="logo_area">
                                    <Link  to="/">
                                        <img src={Logo} alt="logo"></img>
                                        <h1> Softwrd </h1>
                                    </Link>
                                    <button className="rasponsive_icon" onClick={this.showDrawer}>
                                        <VscListSelection />
                                    </button>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={9}>
                                <div className="menu_area">
                                    <Link to="/">  Home </Link>
                                    <Link to="/about-us">  About Us </Link>
                                    <Link to="/profile">  Profile </Link>
                                    <Link to="/services">  Services </Link>
                                    <Link to="/career">  Career </Link>
                                    <Link to="/contact">  Contact </Link>
                                </div>

                                <div className="rasponsive_menu">
                                    <Drawer
                                        placement={placement}
                                        closable={false}
                                        onClose={this.onClose}
                                        visible={visible}
                                        key={placement}
                                        >
                                        <div className="logo_area">
                                            <Link  to="/">
                                                <img className="logo_" src={Logo} alt="logo"></img>
                                                <h1> Softwrd </h1>
                                            </Link>
                                            <button className="rasponsive_close" onClick={this.onClose}>
                                                <VscClose />
                                            </button>
                                        </div>
                                        
                                        <div className="menu_area rasponsive__menu_list">
                                            <Link to="/">  Home </Link>
                                            <Link to="/about-us">  About Us </Link>
                                            <Link to="/profile">  Profile </Link>
                                            <Link to="/services">  Services </Link>
                                            <Link to="/career">  Career </Link>
                                            <Link to="/contact">  Contact </Link>
                                        </div>
                                    </Drawer>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}

export default Header



