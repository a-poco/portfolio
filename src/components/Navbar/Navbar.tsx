import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";
import './Navbar.css'

const style = { backgroundColor: "white"}
const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1 className='navbar__title'>Cristina Salazar</h1>
      <section className='navbar__icones'>
        <a href={"https://github.com/a-poco"} target={"_blank" } className='navbar__icone' rel="noreferrer"><BsGithub style={style} /></a>
        <a  href={"https://www.linkedin.com/in/cristinasalazarmunguia/"} target={"_blank" } className='navbar__icone' rel="noreferrer"><BsLinkedin style={style} /></a>
        <a  href={"mailto:cristina.munguia@appliedtechnology.se?subject=Hey Cristina!"} target={"_blank" } rel="noreferrer" className='navbar__icone'><BsFillEnvelopeFill style={style} /></a>
      </section>
    </nav>
  ) 
}

export default Navbar
