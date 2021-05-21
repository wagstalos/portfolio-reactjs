import React from 'react';
import '../styles/Bio.css';
import { FaFacebookSquare, FaGithubAlt, FaLinkedin, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDownload } from 'react-icons/fa';
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
    <div className="container">
      <img className="rounded blob blue" src={imageAvatar} alt='Imagem do autor' />
      <h1>{props.nome} </h1>
      <p>{props.cargo} </p>
      <div>
        <FaHtml5 className="mr" size={26} color="#ff754d" />
        <FaCss3Alt className="mr" size={26} color="#2965F1" />
        <FaJsSquare className="mr" size={26} color="#FFEB3B" />
        <FaReact size={26} color="#57b7ef" />
      </div>
      <button className="text-center mt" > 
        <a href="curriculo_wagner.pdf" download="curriculo_wagner.pdf"> Download CV</a>
        <a href="http://projetos.dpcontent.com.br/DPContent/poc/btg/download/pdf/exame.pdf" download="curriculo_wagner.pdf"> Download CV</a>
        <FaDownload className="ml" size={18} color="#FFF" />
      </button>
      <p className="mt"> {props.info} </p>
      <img className="img-90 mt" src="https://camo.githubusercontent.com/a7597898fc41706ea4c787223f3a787f28d9955f/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d7761677374616c6f732673686f775f69636f6e733d74727565267468656d653d746f6b796f6e69676874" alt="stats github" />
      <img className="img-90 mt" src="https://camo.githubusercontent.com/48329a1d133d86c17b21ad072c99fb3e1f1e3a9d/68747470733a2f2f6769746875622d726561646d652d73746174732e7361626573616e73617468616e616e7468616e2e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d7761677374616c6f73266c61796f75743d636f6d70616374267468656d653d746f6b796f6e69676874" alt="Most used languages" />
    </div>
  );
}

const Social = (props) => {
  return (
    <div className="center mt">
      <h4>Redes Sociais</h4>
      <a href={props.facebook} target="blank" ><FaFacebookSquare className="mr" size={26} color="#fff" /> </a>
      <a href={props.linkedin} target="blank" ><FaLinkedin className="mr" size={26} color="#fff" /> </a>
      <a href={props.github} target="blank" ><FaGithubAlt size={26} color="#fff" /> </a>
    </div>
  );
}

function Bio() {
  return (
    <>
      <div>
        <Equipe
          nome="Wagner Paulo"
          cargo="Game Developer | Front-end"
          info="Olá, sou Wagner Paulo, profissional da área Desenvolvimento Web e Games, 
            formado em Design Gráfico(UNIP) e Desenvolvimento Jogos Digitais(ETEC)."
          facebook="https://www.facebook.com/wagstalos"
          linkedin="https://www.linkedin.com/in/wagner-silva-6a163555/"
          github="https://github.com/wagstalos" />
      </div>

    </>
  )
}

export default Bio;