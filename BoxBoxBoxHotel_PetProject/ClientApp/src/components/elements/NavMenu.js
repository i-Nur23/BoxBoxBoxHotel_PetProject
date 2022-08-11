import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.spaceBetween = this.spaceBetween.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  spaceBetween(){
    if (!this.state.collapsed){
      return null;
    } else {
    return (<p>&nbsp;&nbsp;&nbsp;</p>);
  }
  }

  isCenterText(){
    let classText = "text-dark"
    if (this.state.collapsed){
      return classText;
    } else {
    return classText + " text-center";
  }
  }

  render () {
      return (
          <header className="sticky-top">
            <Navbar className="navbar-expand-lg navbar-toggleable-sm ng-white border-bottom box-shadow mb-5" style={{ backgroundColor: '#b3f2c4'}} light>
              <Container className="container-fluid d-flex">
                <NavbarBrand className="" tag={Link} to="/">
                  <p className="h3 py-0 mb-0 brand-name">BoxBoxBox</p><p className="h6 mb-0"><font color="grey">сеть hi-tech гостиниц</font></p>
                </NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse class="d-sm-inline-flex flex-sm-row" isOpen={!this.state.collapsed} navbar>  
                  <ul className="navbar-nav pl-3 w-75">
                    <NavItem><this.spaceBetween/></NavItem>
                    <NavItem className="nav-info-items-custom">
                      <NavLink tag={Link} className = "text-dark text-center" to="/">Главная</NavLink>
                    </NavItem>
                    <NavItem className="nav-info-items-custom">
                      <NavLink tag={Link} className="text-dark text-center" to="/chain">Сеть</NavLink>
                    </NavItem>
                    <NavItem className="nav-info-items-custom">
                      <NavLink tag={Link} className="text-dark text-center" to="/rooms">Номера</NavLink>
                    </NavItem>
                    <NavItem className="nav-info-items-custom">
                      <NavLink tag={Link} className="text-dark text-center" to="/usingTechnologies">Технологии</NavLink>
                    </NavItem>
                  </ul>
                </Collapse>
                  <div className="d-inline-flex">
                  <ul className="navbar-nav flex-grow align-items-center">
                    <NavItem>
                        <NavLink tag={Link} className="btn btn-secondary p-2" to="/Enter"><font color="white">Войти</font></NavLink>
                      </NavItem>
                      <NavItem><this.spaceBetween/></NavItem>
                      <NavItem>
                        <NavLink tag={Link} className="btn btn-light p-2" to="/Register">Зарегистрироваться</NavLink>
                      </NavItem>
                  </ul></div>
              </Container>
            </Navbar>
          </header>
    );
  }
}
