import React from 'react'
import Truncate from 'react-truncate'
import 'firebase/storage'


const ProjectSummary = ({ project }) => {

  return (

    < div className="card" >
      <img className="card-img-top" src={require('../images/' + project.img)} alt="movieimg" />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text"><Truncate lines={3}>{project.content}</Truncate></p>
        <p className="cardfooter">Time: {project.time}</p>
        <div href="#" className="btn btn-primary">Read More</div>
      </div>
    </div >

  )

}

export default ProjectSummary
