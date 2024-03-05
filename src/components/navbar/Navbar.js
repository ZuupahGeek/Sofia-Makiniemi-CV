import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Headshot from '../../assets/SofiaHeadshot.jpg'
import { HashLink } from 'react-router-hash-link';


// let activeStyle = {
//   textDecoration: "underline",
//   color: "green",
// };





const Navbar = () => {
  
  return (
    <nav className='navbar'>
      <div className='navbar-header'>
        <HashLink smooth to="/#home" >
          <img src={Headshot} alt="" />
        </HashLink>
      </div>
      <div className='navbar-name'>
        <HashLink smooth to="/#home" > 
          <h1>Sofia Mäkiniemi</h1>
        </HashLink>
      </div>
      <div className='navbar-socials'>
        <Link to="https://www.linkedin.com/in/sofia-m%C3%A4kiniemi-832522228/" target={'_blank'}><i className="fa-brands fa-linkedin"></i></Link>
        <Link to="https://www.instagram.com/smakiniemi_art/" target={'_blank'}><i className="fa-brands fa-instagram"></i></Link>
       
       
      </div>
      <ul className='navbar-links'>
        
        <li>
          <HashLink smooth to="/#about">
            <span>Bio</span>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#resume">
          <span>Resume</span>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#exhibitions">
          <span>Exhibitions</span>
          </HashLink>
        </li>
        {/* <li>
          <HashLink smooth to="/#projects">
            <span>Portfolio</span>
          </HashLink>
        </li> */}
        <li>
          <HashLink smooth to="/#contact">
            <span>Contact</span>
          </HashLink>
        </li>
     
      </ul>
    </nav>
  );
}


export default Navbar