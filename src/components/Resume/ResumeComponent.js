// import {useState} from 'react';
import './ResumeComponent.css';



const ResumeComponent = ({resumeList = [{}], heading}) => {

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
          <div className='resume-card' key={id}>
              <div className='resume-card-content' >
                  <div className='date-text'><p>{element.date}</p></div>
                  <p>{element.title}</p>
                  <p>{element.location}</p>
                  {/* <p>{element.description}</p> */}
                  {element.description1 != null ? <p>{element.description1}</p> : ""}
              </div>
          </div>
              
        ) 
      }
    )

  return (
    <div className='rendered-resume'>
            <h1>{heading}</h1>
            {resumeListMap}
            {/* <button className="btn" onClick={() => handleShowMore()}>
            {showMore === 1 ? "Visa Mer" : "Visa Mindre"}
            </button> */}
    </div>
  )
}

export default ResumeComponent