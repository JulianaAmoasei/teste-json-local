import React from 'react';
import db from '../db.json';
import ProjectCard from '../src/components/ProjectCard'

function HomePage() {
  return (
    <>
      <div style={{display: "flex"}}>
        {db.projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          )
        })}        
      </div>
    </>
  )
}

export default HomePage