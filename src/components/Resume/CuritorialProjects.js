import React from 'react'
import ProjectsComponent from './ProjectsComponent'

const JobComponent = () => {

    const jobList = [
        {
          "id": 1,
          "date": "2024",
          // "location": "Hagabergs Folkhögskola",
          "title": "Lead Curator, Bread & Circus Gallery, Bournemouth Responsible for the summer program, scheduling, finding artists and curating.",
          "description1": "",

        },
        {
          "id": 2,
          "date": "",
          // "location": "Södra Stockholms Folkhögskola",
          "title": "Art From The Basement - Assisting Curator, TheGallery, Arts University Bournemouth An exhibition showing the graduating masters of fine art.",
          "description1": "Sofia Mäkiniemi, Christina Brouwer, Lisa Moro, Dayanny So, Jessica Tipper, Maanya Patel, Laleh Alsadat Ghavami, Maddie Dyer, Bhavana Rao"
        },
        {
          "id": 3,
          "date": "",
          // "location": "Internship",
          "title": "Journey of the Self - Consulting Curator, Bread & Circus Gallery, Bournemouth",
          "description1": "Anusha Ramshand, Elle Tuwei, Yihang Shi"
        },
        {
          "id": 4,
          "date": "",
          // "location": "Internship",
          "title": "New Queer Myth & Tales of Transcendence Artist Showcase- Curator, Bread & Circus Gallery, Bournemouth A showcase to present the artists participating in the first ever issue of the zine New Queer Myth & Tales of Transcendence created by Jessica Tipper.",
          "description1": "Jessica Tipper, Jeff Hunter, Harriet Beach, Birds Stone, Megan Lewis, Vincent Budzinski"
        },
        {
          "id": 5,
          "date": "",
          // "location": "Internship",
          "title": "We Would Like To Say Something... - Co-Host & Curator, Bournemouth An exhibition in honour of international women’s day opening up and allowing female and femme artists to share their creative practice alongside with their experiences of living in a patriarchal society.",
          "description1": "Sofia Mäkiniemi, Lisa Moro, Aurora-Zehra Rizvi, Ruth Fuller, Clare Winterbottom, Meg Lewis, Claudia Lilly, Laleh Ghavami, Christina Brouwer, Sarah Banerjee, Willow Rose Manning, Jessica Tipper, Bhavana Rao, Xue Wang, Madeline Dyer, Paula Maxwell"
        }
      ]

  return (
    <div className='jobComponent'>
        <ProjectsComponent resumeList={jobList} heading="Curitorial Projects" key={jobList.id} />
    </div>
  )



}

export default JobComponent


