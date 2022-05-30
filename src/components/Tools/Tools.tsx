import { SiJavascript, SiTypescript, SiRubyonrails, SiGraphql, SiMongodb, SiPostgresql, SiReact, SiRedux, SiWebpack, SiHtml5, SiJquery, SiCss3, SiDocker, SiAmazonaws, SiNetlify, SiHeroku, SiContentful, SiMicrosoftazure, SiFigma, SiFirebase } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import './Tools.css'

const style = {fontSize: "3em" }
const Tools = () => {
  return (
    <article className='tools'>
        <header>My Tools</header>
        <div className="tools__icons">
          <p className="tools-icons__icone"><SiJavascript color="e8d44d" style={style} /><br/>JavaScript</p>
          <p className="tools-icons__icone"><SiTypescript color="027bcd" style={style} /><br/>TypeScript</p>
          <p className="tools-icons__icone"><SiRubyonrails color="c20202" style={style} /><br/>Rails</p>
          <p className="tools-icons__icone"><FaNode color="529b41" style={style} /><br/>Node</p>
          <p className="tools-icons__icone"><SiGraphql color="d40490" style={style} /><br/>Graphql</p>
          <p className="tools-icons__icone"><SiMongodb color="4ba13d" style={style} /><br/>MongoDB</p>
          <p className="tools-icons__icone"><SiPostgresql color="336790" style={style} /><br/>Posgresql</p>
          <p className="tools-icons__icone"><SiReact color="60dbfb" style={style} /><br/>React</p>
          <p className="tools-icons__icone"><SiRedux color="764abc" style={style} /><br/>Redux</p>
          <p className="tools-icons__icone"><SiJquery color="0767ac" style={style} /><br/>Jquery</p>
          <p className="tools-icons__icone"><SiWebpack color="1b78c0" style={style} /><br/>Webpack</p>
          <p className="tools-icons__icone"><SiHtml5 color="ff5721" style={style} /><br/>HTML</p>
          <p className="tools-icons__icone"><SiCss3 color="1471b6" style={style} /><br/>CSS</p>
          <p className="tools-icons__icone"><SiDocker color="2597ec" style={style} /><br/>Docker</p>
          <p className="tools-icons__icone"><SiFirebase color="f2c027" style={style} /><br/>Firebase</p>
          <p className="tools-icons__icone"><SiAmazonaws color="f29100" style={style}/><br/>AWS</p>
          <p className="tools-icons__icone"><SiNetlify color="25c7b7" style={style}/><br/>Netlify</p>
          <p className="tools-icons__icone"><SiHeroku color="410092" style={style}/><br/>Heroku</p>
          <p className="tools-icons__icone"><SiContentful style={style}/><br/>Contentful</p>
          <p className="tools-icons__icone"><SiMicrosoftazure color="0582cb" style={style}/><br/>Azure</p>
          <p className="tools-icons__icone"><SiFigma style={style}/><br/>Figma</p>          
        </div>
    </article>
  )
}

export default Tools