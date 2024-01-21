import React from 'react'
import './Home.css'
import BackgroundImg from '../assets/SofiaHeadshot.jpg'





const Home = () => {
  return (

        <div className='background-img'>
            <h2>Sofia Mäkiniemi</h2>
            {/* <h4>Junior Frontend Developer</h4> */}
            <img src={BackgroundImg} alt="Alexander Agelou Background" />
            
        </div>

  )
}

export default Home