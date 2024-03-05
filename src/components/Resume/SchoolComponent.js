import React from 'react'
import ResumeComponent from './ResumeComponent'

const SchoolComponent = () => {

    const schoolList = [
        {
          "id": 1,
          // "date": "2020/08–2023/06",
          // "location": "Stockholms Universitet",
          // "title": "Marknadskommunikation (GI), Kandidatprogram",
          "description": "ARTS UNI. BOURNEMOUTH, MASTERS OF FINE ART, 60P, SEP 2023 - AUG 2024"
        },
        {
          "id": 2,
          // "date": "2019/09–2019/11",
          // "location": "Berghs School of Communication",
          // "title": "Grafisk Design Start",
          "description": "STOCKHOLM UNI., CURATORIAL QUALIFICATION, 30HP, AUG 2021 - JAN 2022"
        },
        {
          "id": 3,
          // "date": "2019/09–2019/11",
          // "location": "Berghs School of Communication",
          // "title": "Grafisk Design Start",
          "description": "STOCKHOLM UNI., BACHELORS IN ART HISTORY, FOCUS ON MUSEUMS AND CULTURAL HERITAGE, 180HP, AUG 2017 - AUG 2021"
        },
        {
          "id": 4,
          // "date": "2019/09–2019/11",
          // "location": "Berghs School of Communication",
          // "title": "Grafisk Design Start",
          "description": "STOCKHOLMS UNI., BACHELORS IN MUSICOLOGY, 180HP, AUG 2018 -JAN 2021"
        }
        
      ]
      

  return (
    <div className='schoolComponent'>
        <ResumeComponent resumeList={schoolList} heading="Education" key={schoolList.id}/>
    </div>
  )
}

export default SchoolComponent