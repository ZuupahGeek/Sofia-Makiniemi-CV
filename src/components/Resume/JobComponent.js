import React from 'react'
import ResumeComponent from './ResumeComponent'

const JobComponent = () => {

    const jobList = [
        {
          "id": 1,
          "date": "January - June 2023",
          "location": "Hagabergs Folkhögskola",
          "title": "",
          "description1": "I enrolled on the course Livskunskap Skapande that focused on giving the students a routine in their daily life and healing through making art. I chose to take this course as I was in a deep depression and needed to give myself more time and space to be creative. This term gave me tools to use the negative energy that I put out through anxiety and depression and instead channel it into my creative process.",
          // "description2": "Konfektionsansvarig",
          // "description3": "Inventeringsansvarig"
        },
        {
          "id": 2,
          "date": "January - April 2022",
          "location": "Södra Stockholms Folkhögskola",
          "title": "",
          "description1": "I was enrolled in the Digital Studio course, which focuses on creative production with digital tools such as procreate and digital cameras. I took this course to acquire new knowledge that I will be able to transfer into my professional life in the creation of e.g. creative concepts or campaigns."
        },
        {
          "id": 3,
          "date": "November - December 2021",
          "location": "Internship",
          "title": "",
          "description1": "During five weeks of the autumn of 2021, I worked as an intern at WAY Gallery in Stockholm, as part of the Curator Qualification at Stockholm University. The objective of the internship was to provide experience of work in the cultural sector"
        }
      ]

  return (
    <div className='jobComponent'>
        <ResumeComponent resumeList={jobList} heading="Professional Experience" key={jobList.id} />
    </div>
  )



}

export default JobComponent


