import './Projects.css'

const Projects = () => {
  return (
    <div className='projects'>
      <header className='projects__tittle'>My Projects</header>
      <article className='projects__block'>
        <div className='projects-block__info'>
          <h1  className='projects-info__name'>ParkN</h1>
          <p  className='projects-info__description'>
          ParkN is an app created to find parks around stockholm! 
          Where you can see what facilities a park has and vote yourself.
          That way, others will know what this park has (and what it doesn't).
          Ruby on rails, JavaScript, HTML, CSS and deploy on Heroku.
          </p>
          <span  className='project-info__btns'>
            <button className='project-info__btn'>Live Demo</button>
            <button className='project-info__btn'>GitHub Link</button>
          </span>
        </div>
        <div className='project-info__img'>
          <img className='gif' src="projects/parknGif.gif" alt='Cristina'/>
        </div>
      </article>
      <article className='projects__block'>
        <div className='projects-block__info'>
          <h1  className='projects-info__name'>Another Weather app</h1>
          <p  className='projects-info__description'>
          A weather app where you can find the weather in any city! 
          Feching the information of the weather from an expertal api.
          Express.Js, Node.Js, JavaScript, React, TypeScript, HTML, CSS, 
          </p>
          <span  className='project-info__btns'>
            <button className='project-info__btn'>Live Demo</button>
            <button className='project-info__btn'>GitHub Link</button>
          </span>
        </div>
        <div className='project-info__img'>
          <img className='gif' src="projects/weather-app.gif" alt='Cristina'/>
        </div>
      </article>
      <article className='projects__block'>
        <div className='projects-block__info'>
          <h1  className='projects-info__name'>Pet me Up</h1>
          <p  className='projects-info__description'>
            Find the perfect macth for a play date to your dog!
            Pet me Up was created as a graduaction project for Salt JavaScript course.
            Mongodb, Node.js, Express.js, React, Redux, Typescript, Firebase, Geocoding, HTML, CSS,
          </p>
          <span  className='project-info__btns'>
            <button className='project-info__btn'>Live Demo</button>
            <button className='project-info__btn'>GitHub Link</button>
          </span>
        </div>
        <div className='project-info__img'>
          <img className='gif' src="projects/petMeUp.gif" alt='Cristina'/>
        </div>
      </article>
      <article className='projects__block'>
        <div className='projects-block__info'>
          <h1  className='projects-info__name'>Portfolio</h1>
          <p  className='projects-info__description'>
            My personal portfolio page built with React  <br/>
            which is used as a platform to display my work. <br/>
            The application is hosted on Netlify and is fully responsive <br/>
            React, HTML, CSS, <br/>
          </p>
          <span  className='project-info__btns'>
            <button className='project-info__btn'>GitHub Link</button>
          </span>
        </div>
        <div className='project-info__img'>
        </div>
      </article>
    </div>
  )
}

export default Projects
