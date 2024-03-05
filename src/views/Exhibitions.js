import React from 'react'
// import ProjectComponent from '../components/Projects/ProjectComponent'
import './Exhibitions.css'

const Exhibitions = () => {
  return (
    <div className='exhibitions-page'>
      <h1>Exhibitions</h1>
      <div className='exhibitions-list'>
        
        <div className='exhibition-item'><p className='exhibition-name'>Solo Exhibition</p> <p>TBA</p></div>
        <div className='exhibition-item'><p className='exhibition-name'>We Would Like To Say Something…</p> <p>Artist, Co-organiser & Curator</p> <p>March 8 - 9 2024, Bournemouth, UK</p></div>
        <div className='exhibition-item'><p className='exhibition-name'>Circular Artspace 3rd Community Exhibition</p> <p>Artist</p> <p>March 1 - 24 2024, Bristol, UK</p></div>
        <div className='exhibition-item'><p className='exhibition-name'>Husby Konstsalong 2023</p> <p>Artist</p> <p>April 22 - 30 2023, Husby, Stockholm, Sweden</p></div>
        </div>
    </div>
  )
}

export default Exhibitions