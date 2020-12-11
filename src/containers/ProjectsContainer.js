import React, { Component } from 'react';
import ProjectModel from '../models/Project';

class ProjectsContainer extends Component {
  render() {
    ProjectModel.all().then((res) => {
      console.log(res);
    })
    return (
      <div className="projectsContainer">
        <h2>Projects Container</h2>
      </div>
    )
  }
}

export default ProjectsContainer;