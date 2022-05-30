import './Projects.css'

const Projects = () => {
  return (
    <div className='projects'>
      <header className='projects__tittle'>My Projects</header>
      <article className='projects__info'>
        <h1  className='projects-info__name'>ParkN</h1>
        <p  className='projects-info__description'>
        eam Tasks is a task list application created with React, TypeScript and Firestore. <br/>
        Feature include basic CRUD functionality, drag and drop, livesharing, authentication and offline persistence.<br/>
        React, TypeScript, Firestore, Styled-Components, React Beautful DnD, HTML, CSS, JavaScript
        </p>
        <span  className='project-info__btns'>
          <button className='project-info__btn'>Live Demo</button>
          <button className='project-info__btn'>GitHub Link</button>
        </span>
      </article>
    </div>
  )
}

export default Projects
