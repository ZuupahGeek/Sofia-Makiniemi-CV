import React from 'react'
import CuritorialProjects from '../components/Resume/CuritorialProjects'
import SchoolComponent from '../components/Resume/SchoolComponent'
import './CV.css'
import { Link } from 'react-router-dom'
import Exhibitions from '../components/Resume/Exhibitions'

const CV = () => {
  return (
    <div className='resume-page'>
      <Link><p>Download CV</p></Link>
      <div className='resume-components'>  
        <SchoolComponent />
      </div>
      <div className='resume-components'>
        <CuritorialProjects />
        </div>
      <div className='resume-components'>
        <Exhibitions />
        </div>
    </div>
  )
}

export default CV