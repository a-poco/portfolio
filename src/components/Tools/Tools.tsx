import { SiJavascript, SiTypescript, SiRubyonrails, SiGraphql } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import './Tools.css'

const Tools = () => {
  return (
    <article className='tools'>
        <header>My Tools</header>
        <div>
          <p><SiJavascript/></p>
          <p><SiTypescript/></p>
          <p><SiRubyonrails/></p>
          <p><FaNode/></p>
          <p><SiGraphql/></p>
        </div>
    </article>
  )
}

export default Tools