// import {useState} from 'react';
import './ProjectsComponent.css';



const ProjectsComponent = ({resumeList = [{}], heading}) => {

    // let [showMore, setShowMore] = useState(1);
    let arrayLength = resumeList.length + 1;

    // function handleShowMore() {
    //   if (showMore === 1) {
    //     setShowMore(arrayLength)}
    //     else {
    //     setShowMore(1)
    //   }
    // }

    const resumeListMap = resumeList.slice(0, arrayLength).map(
      (element, id) => {
        return (
          <div className='project-card' key={id}>
              <div className='project-card-content' >
                  <div className='date-text'><p>{element.date}</p></div>
                  <p className='text-right'>{element.title}</p>
                  
              </div>
              {element.description1 != null ? <p className='text-left'>{element.description1}</p> : ""}
          </div>
              
        ) 
      }
    )

  return (
    <div className='rendered-project'>
            <h1>{heading}</h1>
            {resumeListMap}
            {/* <button className="btn" onClick={() => handleShowMore()}>
            {showMore === 1 ? "Visa Mer" : "Visa Mindre"}
            </button> */}
    </div>
  )
}

export default ProjectsComponent