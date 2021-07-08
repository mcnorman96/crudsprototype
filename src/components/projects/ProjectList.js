import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'


const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section"><div className="row">
      {projects && projects.map(project => {
        return (<div key={ProjectList.id} className="col-sm-4">
          <Link to={'/project/' + project.id} key={project.id}>
            <ProjectSummary project={project} />
          </Link></div>
        )
      })}
    </div></div>
  )
}

export default ProjectList
