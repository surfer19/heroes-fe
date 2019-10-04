import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class GnomeNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <div className="container">
          <NavbarBrand>
            <img src="./images/gnome.svg" width="50px" alt="logo"/>
             Brastlewark
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>              
              <NavItem>
                <NavLink href="https://github.com/surfer19/heroes-fe" target="_blank">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>        
      </div>
    );
  }
}