import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavbarMobile.css'








const navbarMobile = () => {
  
  return (
    <nav className='navbar-mobile'>
      {/* <div className='navbar-mobile-header'> */}
        {/* <HashLink smooth to="/#home" >
          <img src={Headshot} alt="" />
        </HashLink> */}
      {/* </div> */}
      <div className='navbar-mobile-name'>
        <NavLink to="/" > 
          <h1>Sofia Mäkiniemi</h1>
        </NavLink>
      </div>
      
      <div className='navbar-mobile-links'>
        
          <NavLink to="/">
          <span>Home</span>
          </NavLink>
 

          <NavLink to="/CV">
            <span>CV</span>
          </NavLink>


          <NavLink to="/Practice">
          <span>Practice</span>
          </NavLink>


          <NavLink to="/Contact">
          <span>Contact</span>
          </NavLink>

          <NavLink to="/">
          <span>Home</span>
          </NavLink>


          <NavLink to="/CV">
            <span>CV</span>
          </NavLink>


          <NavLink to="/Practice">
          <span>Practice</span>
          </NavLink>


          <NavLink to="/Contact">
          <span>Contact</span>
          </NavLink>

        
     
      </div>
      <div className='navbar-mobile-socials'>
        <Link to="https://www.linkedin.com/in/sofia-m%C3%A4kiniemi-832522228/" target={'_blank'}><i className="fa-brands fa-linkedin"></i></Link>
        <Link to="https://www.youtube.com/@SofiaM%C3%A4kiniemiArtist" target={'_blank'}><i class="fa-brands fa-youtube"></i></Link>
        <Link to="https://www.instagram.com/smakiniemi_art/" target={'_blank'}><i className="fa-brands fa-instagram"></i></Link>
        
      </div>
    </nav>
  );
}


export default navbarMobile