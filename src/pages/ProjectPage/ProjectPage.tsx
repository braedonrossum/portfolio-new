import React from 'react'
import projectsLogo from '../../assets/projects-logo-black.svg'
import projectsLogoWhite from '../../assets/projects-logo-white.svg'

type ProjectPageProps = {
    darkMode: boolean;
  };

const ProjectPage: React.FC<ProjectPageProps> = ({darkMode}) => {
  return (
    <div>
        <img src={ darkMode ? projectsLogoWhite : projectsLogo } alt="" />
    </div>
  )
}

export default ProjectPage