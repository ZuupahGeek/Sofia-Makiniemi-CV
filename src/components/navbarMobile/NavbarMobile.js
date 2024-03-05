import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarMobile.css'
import { HashLink } from 'react-router-hash-link';








const navbarMobile = () => {
  
  return (
    <nav className='navbar-mobile'>
      {/* <div className='navbar-mobile-header'> */}
        {/* <HashLink smooth to="/#home" >
          <img src={Headshot} alt="" />
        </HashLink> */}
      {/* </div> */}
      <div className='navbar-mobile-name'>
        <HashLink smooth to="/#home" > 
          <h1>Sofia Mäkiniemi</h1>
        </HashLink>
      </div>
      
      <div className='navbar-mobile-links'>
        
      
          <HashLink smooth to="/#about">
            <span>Bio</span>
          </HashLink>
        
      
          <HashLink smooth to="/#resume">
          <span>Resume</span>
          </HashLink>


          <HashLink smooth to="/#exhibitions">
          <span>Exhibitions</span>
          </HashLink>
        
      
          {/* <HashLink smooth to="/#projects">
            <span>Portfolio</span>
          </HashLink> */}
        
     
      </div>
      <div className='navbar-mobile-socials'>
        <Link to="https://www.linkedin.com/in/sofia-m%C3%A4kiniemi-832522228/" target={'_blank'}><i className="fa-brands fa-linkedin"></i></Link>
        <Link to="https://www.instagram.com/smakiniemi_art/" target={'_blank'}><i className="fa-brands fa-instagram"></i></Link>
        
      </div>
    </nav>
  );
}


export default navbarMobile