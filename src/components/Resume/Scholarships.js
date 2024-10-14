import React from 'react'
import ProjectsComponent from './ProjectsComponent'

const Scholarships = () => {

    const jobList = [
        {
          "id": 1,
          "date": "2023",
          // "location": "",
          "title": "European Postgraduate Scholarship A £5000 scholarship to recognise and support creative talent within the global community issued by Arts University Bournemouth",

        }
      ]

  return (
    <div className='jobComponent'>
        <ProjectsComponent resumeList={jobList} heading="Scholarships" key={jobList.id} />
    </div>
  )



}

export default Scholarships


