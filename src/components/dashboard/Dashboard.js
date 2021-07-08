import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="container">
        <div className="row">
          <h1>Movie review</h1>
          <ProjectList projects={projects} />
        </div>
      </div>
    )
  }
}


//Redux
//As the first argument passed in to connect, 
//mapStateToProps is used for selecting the part of the data from the store that the connected component needs. 
//It is called every time the store state changes.
//It receives the entire store state, and should return an object of data this component needs.
const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ]))(Dashboard)
