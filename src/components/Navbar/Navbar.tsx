import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1 className='navbar__title'>Cristina Salazar</h1>
      <section className='navbar__icones'>
        <p className='navbar__icone'><BsGithub/></p>
        <p className='navbar__icone'><BsLinkedin/></p>
        <p className='navbar__icone'><BsFillEnvelopeFill/></p>
      </section>
    </nav>
  )
}

export default Navbar
