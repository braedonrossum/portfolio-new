import React from 'react'
import About from '../../components/About/About'
import ProjectPage from '../ProjectPage/ProjectPage'

type HomePageProps = {
    darkMode: boolean;
  };

const HomePage: React.FC<HomePageProps> = ({darkMode}) => {
  return (
    <div>

    <About />
    <ProjectPage darkMode={darkMode} />
    </div>
  )
}

export default HomePage