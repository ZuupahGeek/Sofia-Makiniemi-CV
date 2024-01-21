import React from 'react';
// import { Link } from 'react-router-dom';
import './ProjectComponent.css';
// import ImgKris from "../../assets/kris-thumbnail.webp";


const ProjectComponent = () => {

    const portfolioList = [
        {
          "id": 1,
          // "imgURL": ImgKris,
          "imgAlt": "Kris Turnén header"
        },
        
        
      ]

      const portfolioListMap = portfolioList.map(
        (element, id) => {
          return (
            <div className='portfolio-card' key={id}>
                <div className='portfolio-content' >
                    
                    <img src={element.imgURL} alt="portfolio" />
                    
                  
                    
                </div>
            </div>
                
          ) 
        }
      )


  return (
    <div className='portfolio-collection'>
        {portfolioListMap} 
    </div>
  )
}

export default ProjectComponent