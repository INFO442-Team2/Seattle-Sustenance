import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Collapse } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            currentUser: null
        };
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
            currentUser: this.state.currentUser
        });
    }

    resetResults = () => {
        this.props.resetResults()
    }

    render() {
        return(
            <div className="header">
                <Navbar className="navbar" dark expand="lg">
                    <LinkContainer to="/find" onClick={this.resetResults}>
                    <NavbarBrand className="home-link">
                        <img className="icon" alt="plate logo" src={process.env.PUBLIC_URL + "/images/plate-green-circle.png"}/>
                        <h1 className="title">Seattle Sustenance</h1>
                    </NavbarBrand>
                    </LinkContainer>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <LinkContainer to="/about" onClick={this.resetResults} activeClassName="curr-link" className="nav-item">
                            <NavItem className="nav-link"> <p>About</p></NavItem>
                        </LinkContainer>
                        <LinkContainer to="/find" onClick={this.resetResults} activeClassName="curr-link" className="nav-item">
                            <NavItem className="nav-link"> <p>Find a Meal Program</p></NavItem>
                        </LinkContainer>
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header; 
