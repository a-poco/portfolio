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
          Ruby on rails, JavaScript, HTML, Heroku.
          </p>
          <span  className='project-info__btns'>
            <a href={"https://www.parkn.club/"} target={"_blank" } className='project-info__btn' rel="noreferrer">Live Demo</a>
            <a href={"https://github.com/a-poco/parkn"} target={"_blank" } className='project-info__btn' rel="noreferrer">GitHub Link</a>
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
          Express.Js, Node.Js, JavaScript, React, TypeScript, HTML, CSS. 
          </p>
          <span  className='project-info__btns'>
            <a href={"https://www.parkn.club/"} target={"_blank" } className='project-info__btn' rel="noreferrer">Live Demo</a>
            <a href={"https://github.com/a-poco/weather-app"} target={"_blank" } className='project-info__btn' rel="noreferrer">GitHub Link</a>
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
            Mongodb, Node.js, Express.js, React, Redux, Typescript, Firebase, Geocoding, HTML, CSS.
          </p>
          <span  className='project-info__btns'>
            <a href={"https://ancient-basin-65065.herokuapp.com/"} target={"_blank" } className='project-info__btn' rel="noreferrer">Live Demo</a>
            <a href={"https://github.com/a-poco/pet_app"} target={"_blank" } className='project-info__btn' rel="noreferrer">GitHub Link</a>
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
            My personal portfolio page built with React 
            which is used as a platform to display my work.
            The application is fully responsive. 
            React, TypeScript, HTML, CSS.
            Deploy on Netlify.
          </p>
          <span  className='project-info__btns'>
          <a href={"https://github.com/a-poco/portfolio"} target={"_blank" } className='project-info__btn' rel="noreferrer">GitHub Link</a>
          </span>
        </div>
        <div className='project-info__img'>
        </div>
        <div className='project-info__img'>
          <img className='gif' src="projects/portafolio.gif" alt='Cristina'/>
        </div>
      </article>
    </div>
  )
}

export default Projects
