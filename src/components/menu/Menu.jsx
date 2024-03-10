import React from 'react'
import "./menu.css"
import {Container,Row} from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.png"
import { RiArrowDropDownLine } from "react-icons/ri";

const Menu = () => {
  return (
    <div>
         <Navbar expand="lg" className="bg-main">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="" className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className='pro'>Product <RiArrowDropDownLine  className='drop'/></Nav.Link>
            <Nav.Link href="#link" className='pro'>Template <RiArrowDropDownLine className='drop'/></Nav.Link>
            <Nav.Link href="#link" className='pro'>Blog <RiArrowDropDownLine className='drop'/></Nav.Link>
            <Nav.Link href="#link" className='pro'>Pricing <RiArrowDropDownLine className='drop'/></Nav.Link>
             </Nav>
             <div className='nav_right'>
             <a href="" className='sign'> Sign In </a>
             <a href="" className='start'> Start Free </a>
             </div>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
    
    
    </div>
  )
}

export default Menu