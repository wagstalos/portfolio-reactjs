import React, { Component } from 'react';
import '../styles/Projects.css';

class Projects extends Component {
  
    constructor(props) {
      super(props)
      this.state = {
        projects: []
      };
    }
  
    componentDidMount(){
      let url = 'https://wpsgames.com.br/app/api/projetos.json'
      fetch(url)
      .then((r)=> r.json())
      .then((json)=>{
        let state = this.state;
        state.projects = json;
        this.setState(state);
        console.log(json);
      })
    }
  
    render() {
      return(
        <div className="container">
            <h1>Projetos</h1>
           
            {this.state.projects.map((item)=>{
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
        </div>
      );
    };
  }

export default Projects;