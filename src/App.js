import React, { Component } from 'react';
import { FaFacebook, FaGithubAlt, FaLinkedinIn} from 'react-icons/fa';
import imageAvatar from './img/avatar.png';
import './styles/App.css';
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

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nutri: []
    };
  }

  componentDidMount(){
    let url = 'https://wpsgames.com.br/app/api/projetos.json'
    fetch(url)
    .then((r)=> r.json())
    .then((json)=>{
      let state = this.state;
      state.nutri = json;
      this.setState(state);
      console.log(json);

    })
  }

  render() {
    return(
      <div className="container">
        <header>
          <strong>Portfolio</strong>
        </header>
        <div>
            <div className="mt">
                <Equipe 
                nome="Wagner Paulo" 
                cargo="Game Developer" 
                info="Olá, Sou Wagner Paulo, profissional da área Desenvolvimento Web e Games formado em Design Gráfico(UNIP) e Desenvolvimento Jogos Digitais(ETEC)."
                facebook="https://www.facebook.com/wagstalos" 
                linkedin="https://www.linkedin.com/in/wagner-silva-6a163555/"
                github="https://github.com/wagstalos"/>
            </div>
        </div>

          <h1>Projetos</h1>

          {this.state.nutri.map((item)=>{
          return(
            <article key={item.id} className="post">
              <img className="capa" src={item.img} alt={item.title} />
              <strong className="titulo">{item.title}</strong>
              <p className='subtitulo'> {item.body} </p>
              <div className="flex">
                <p className='tag' >{item.tag} </p>
                <p className='tag categoria'>{item.categoria} </p>
              </div>
              <a className="botao" href={item.url} >Veja mais </a>
            </article>
          );
        })}
        <footer className="column">
          <div>
          <p>Desenvolvido por Wagner Paulo</p>  
          </div>
          <div>
          <Social
            facebook="https://www.facebook.com/wagstalos" 
            linkedin="https://www.linkedin.com/in/wagner-silva-6a163555/"
            github="https://github.com/wagstalos"/>
          </div>
       
               </footer>
      </div>
    );
  };
}

export default App;
