import React from 'react';
import '../styles/Bio.css';
import { FaFacebookSquare, FaGithubAlt, FaLinkedin, FaHtml5, FaCss3Alt, FaJsSquare, FaReact} from 'react-icons/fa';
import imageAvatar from '../img/avatar.png';

const Equipe = (props) => {
    return (
        <div className="card">
            <Sobre nome={props.nome} cargo={props.cargo} info={props.info} />
            <Social facebook={props.facebook} linkedin={props.linkedin} github={props.github} />
        </div>
    );
  }
  
  const Sobre = (props) => {
    return (
        <div>
            <img src={imageAvatar} alt='Logo da aplicação' />
            <h1>{props.nome} </h1>
            <div>
              <FaHtml5 className="mr" size={26} color="#ff754d" /> 
              <FaCss3Alt className="mr" size={26} color="#2965F1" /> 
              <FaJsSquare className="mr" size={26} color="#FFEB3B" /> 
              <FaReact size={26} color="#57b7ef" /> 
            </div>
            <h3>{props.cargo} </h3>
            <p> {props.info} </p> 
        </div>
    );
  }
  
  const Social = (props) => {
    return (
        <div className="center">
            <a href={props.facebook} target="blank" ><FaFacebookSquare className="mr" size={26} color="#5e9fed" /> </a>
            <a href={props.linkedin} target="blank" ><FaLinkedin className="mr" size={26} color="#5e9fed" /> </a>
            <a href={props.github}   target="blank" ><FaGithubAlt size={26} color="#5e9fed" /> </a>
        </div>
    );
  }

function Bio(){
    return(
      <div>
        <div>
          <Equipe 
            nome="Wagner Paulo" 
            cargo="Game Developer | Des. Front-end" 
            info="Olá, sou Wagner Paulo, profissional da área Desenvolvimento Web e Games, formado em Design Gráfico(UNIP) e Desenvolvimento Jogos Digitais(ETEC)."
            facebook="https://www.facebook.com/wagstalos" 
            linkedin="https://www.linkedin.com/in/wagner-silva-6a163555/"
            github="https://github.com/wagstalos"/>
        </div>
        
      </div>
    )
}

export default Bio;