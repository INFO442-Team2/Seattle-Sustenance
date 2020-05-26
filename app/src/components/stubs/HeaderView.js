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

    render() {
        return(
            <div className="header">
                {/* <Navbar color="light" light expand="md"> */}
                <Navbar className="navbar" expand="md">
                    {/* <LinkContainer to="/home"> */}
                    <LinkContainer to="/find">
                    <NavbarBrand className="home-link">
                        <img className="icon" alt="plate logo" src="images/plate-green-circle.png"/>
                        <h1 className="title">Seattle Sustenance</h1>
                        {/* <img className="icon" alt="REPLACE with ICON LINK" src="https://image.flaticon.com/icons/svg/1689/1689233.svg"/> */}
                    </NavbarBrand>
                    </LinkContainer>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <LinkContainer to="/about" activeClassName="curr-link" className="nav-item">
                            <NavItem className="nav-link"> <p>About</p></NavItem>
                        </LinkContainer>
                        <LinkContainer to="/browse" activeClassName="curr-link" className="nav-item">
                            <NavItem className="nav-link"> <p>Browse All</p></NavItem>
                        </LinkContainer>
                        <LinkContainer to="/find" activeClassName="curr-link" className="nav-item">
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