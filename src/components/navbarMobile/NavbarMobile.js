import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavbarMobile.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';







const navbarMobile = () => {
  
  return (
    
    <Navbar expand="xxxl" className=" navbar-mobile-custom">
      <Container fluid>
        <h1 className='navbar-mobile-custom'>Sofia Mäkiniemi</h1>
        
        <Navbar.Toggle aria-controls=""  />
        <Navbar.Collapse id="">
          <Nav
            className="me-auto mb-5 my-xl-0"
            style={{ maxHeight: '100px' }}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Resume">Resume</NavLink>
            <NavLink to="/Practice">Practice</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            <div className='navbar-mobile-socials'>
              <Link to="https://www.linkedin.com/in/sofia-m%C3%A4kiniemi-832522228/" target={'_blank'}><i className="fa-brands fa-linkedin"></i></Link>
              <Link to="https://www.youtube.com/@SofiaM%C3%A4kiniemiArtist" target={'_blank'}><i class="fa-brands fa-youtube"></i></Link>
              <Link to="https://www.instagram.com/smakiniemi_art/" target={'_blank'}><i className="fa-brands fa-instagram"></i></Link>
            </div>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default navbarMobile