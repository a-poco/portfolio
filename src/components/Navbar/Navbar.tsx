import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1 className='navbar__title'>Cristina Salazar</h1>
      <section className='navbar__icones'>
        <a href={"https://github.com/a-poco"} target={"_blank" } className='navbar__icone' rel="noreferrer"><BsGithub /></a>
        <a  href={"https://www.linkedin.com/in/cristinasalazarmunguia/"} target={"_blank" } className='navbar__icone' rel="noreferrer"><BsLinkedin/></a>
        <a  href={"mailto:cristina.munguia@appliedtechnology.se?subject=Hey Cristina!"} target={"_blank" } rel="noreferrer" className='navbar__icone'><BsFillEnvelopeFill/></a>
      </section>
    </nav>
  ) 
}

export default Navbar
