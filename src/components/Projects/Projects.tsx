import './Projects.css'

const Projects = () => {
  return (
    <div className='projects'>
      <header className='projects__tittle'>My Projects</header>
      <article className='projects__block'>
        <div className='projects-block__info'>
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
        </div>
        <div className='project-info__img'>
          <img className='gif' src="parknGif.gif" alt='Cristina'/>
        </div>
      </article>
      <article className='projects__block'>
        <div className='projects-block__info'>
          <h1  className='projects-info__name'>Another Weather app</h1>
          <p  className='projects-info__description'>
          eam Tasks is a task list application created with React, TypeScript and Firestore. <br/>
          Feature include basic CRUD functionality, drag and drop, livesharing, authentication and offline persistence.<br/>
          React, TypeScript, Firestore, Styled-Components, React Beautful DnD, HTML, CSS, JavaScript
          </p>
          <span  className='project-info__btns'>
            <button className='project-info__btn'>Live Demo</button>
            <button className='project-info__btn'>GitHub Link</button>
          </span>
        </div>
        <div className='project-info__img'>
          <img className='gif' src="weather-app.gif" alt='Cristina'/>
        </div>
      </article>
      <article className='projects__block'>
        <div className='projects-block__info'>
          <h1  className='projects-info__name'>Pet me Up</h1>
          <p  className='projects-info__description'>
          eam Tasks is a task list application created with React, TypeScript and Firestore. <br/>
          Feature include basic CRUD functionality, drag and drop, livesharing, authentication and offline persistence.<br/>
          React, TypeScript, Firestore, Styled-Components, React Beautful DnD, HTML, CSS, JavaScript
          </p>
          <span  className='project-info__btns'>
            <button className='project-info__btn'>Live Demo</button>
            <button className='project-info__btn'>GitHub Link</button>
          </span>
        </div>
        <div className='project-info__img'>
          <img className='gif' src="petMeUp.gif" alt='Cristina'/>
        </div>
      </article>
      <article className='projects__block'>
        <div className='projects-block__info'>
          <h1  className='projects-info__name'>Portfolio</h1>
          <p  className='projects-info__description'>
          eam Tasks is a task list application created with React, TypeScript and Firestore. <br/>
          Feature include basic CRUD functionality, drag and drop, livesharing, authentication and offline persistence.<br/>
          React, TypeScript, Firestore, Styled-Components, React Beautful DnD, HTML, CSS, JavaScript
          </p>
          <span  className='project-info__btns'>
            <button className='project-info__btn'>GitHub Link</button>
          </span>
        </div>
      </article>
    </div>
  )
}

export default Projects
