import React from 'react';
import '../styles/Bio.css';
import { FaFacebook, FaGithubAlt, FaLinkedinIn} from 'react-icons/fa';
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
        <div className="flex">
          <div className="flex-item-1">
            <img src={imageAvatar} alt='Logo da aplicação' />
          </div>
          <div className="flex-item-1">
            <h2>{props.nome} </h2>
            <h3>Profissional: {props.cargo} </h3>
            <p>Sobre: {props.info} </p>
          </div>
        </div>
    );
  }
  
  const Social = (props) => {
    return (
        <div className="center">
            <a href={props.facebook} target="blank" ><FaFacebook size={26} color="rgba(255,117,77,1)" /> </a>
            <a href={props.linkedin} target="blank" ><FaLinkedinIn size={26} color="rgba(255,117,77,1)" /> </a>
            <a href={props.github}   target="blank" ><FaGithubAlt size={26} color="rgba(255,117,77,1)" /> </a>
        </div>
    );
  }

function Bio(){
    return(
        <div> 
            <div>
            <div>
                <Equipe 
                nome="Wagner Paulo" 
                cargo="Game Developer" 
                info="Olá, Sou Wagner Paulo, profissional da área Desenvolvimento Web e Games formado em Design Gráfico(UNIP) e Desenvolvimento Jogos Digitais(ETEC)."
                facebook="https://www.facebook.com/wagstalos" 
                linkedin="https://www.linkedin.com/in/wagner-silva-6a163555/"
                github="https://github.com/wagstalos"/>
            </div>
        </div>
        </div>
    )
}

export default Bio;