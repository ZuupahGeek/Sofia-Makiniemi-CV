import React from 'react'
import ProjectsComponent from './ProjectsComponent'

const Exhibitions = () => {

    const jobList = [
        {
          "id": 1,
          "date": "2024",
          // "location": "",
          "title": "Postgraduate Exhibition 2024 - TheGallery, Arts University Bournemouth",

        },
        {
          "id": 2,
          "date": "",
          // "location": "",
          "title": "Art From The Basement - TheGallery, Arts University Bournemouth",

        },
        {
          "id": 3,
          "date": "",
          // "location": "",
          "title": "We Would Like To Say Something... - Bournemouth",
          // "description1": ""
        },
        {
          "id": 4,
          "date": "",
          // "location": "Internship",
          "title": "3rd Community Exhibition - Circular ArtSpace, Bristol",
          // "description1": ""
        },
        {
          "id": 4,
          "date": "2023",
          // "location": "Internship",
          "title": "Husby Konstsalong 2023 - Husby Konsthall, Stockholm",
          // "description1": ""
        }
      ]

  return (
    <div className='jobComponent'>
        <ProjectsComponent resumeList={jobList} heading="Exhibitions" key={jobList.id} />
    </div>
  )



}

export default Exhibitions


