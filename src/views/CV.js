import React from 'react'
import CuritorialProjects from '../components/Resume/CuritorialProjects'
import SchoolComponent from '../components/Resume/SchoolComponent'
import './CV.css'
import Exhibitions from '../components/Resume/Exhibitions'
import Scholarships from '../components/Resume/Scholarships'
import CV_PDF from '../assets/CV.pdf'

const CV = () => {
  return (
    <div className='resume-page'>
      <a href={CV_PDF} rel="noreferrer" target='_blank'><p>Download resume</p></a>
      <div className='resume-components'>  
        <SchoolComponent />
      </div>
      <div className='resume-components'>
        <Exhibitions />
        </div>
        <div className='resume-components'>
        <CuritorialProjects />
        </div>
      <div className='resume-components'>
        <Scholarships />
        </div>
    </div>
  )
}

export default CV