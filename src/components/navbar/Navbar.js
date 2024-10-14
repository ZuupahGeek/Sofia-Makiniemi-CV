import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import Headshot from '../../assets/SofiaWebpageProfilePic.jpg'
// import { HashLink } from 'react-router-hash-link';


// let activeStyle = {
//   textDecoration: "underline",
//   color: "green",
// };





const Navbar = () => {
  
  return (
    <nav className='navbar'>
      <div className='navbar-header'>
        <NavLink to="/" >
          <img src={Headshot} alt="" />
        </NavLink>
      </div>
      <div className='navbar-name'>
        <NavLink to="/" > 
          <h1>Sofia Mäkiniemi</h1>
        </NavLink>
      </div>
      <div className='navbar-socials'>
        <Link to="https://www.linkedin.com/in/sofia-m%C3%A4kiniemi-832522228/" target={'_blank'}><i className="fa-brands fa-linkedin"></i></Link>
        <Link to="https://www.instagram.com/smakiniemi_art/" target={'_blank'}><i className="fa-brands fa-instagram"></i></Link>
       
       
      </div>
      <ul className='navbar-links'>
      <li>
          <NavLink to="/">
          <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/CV">
            <span>CV</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Practice">
          <span>Practice</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact">
          <span>Contact</span>
          </NavLink>
        </li>
     
      </ul>
    </nav>
  );
}


export default Navbar