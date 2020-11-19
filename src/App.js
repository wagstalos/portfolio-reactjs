import React from 'react';
import './styles/App.css';

import Bio from './components/Bio';
import Projects from './components/Projects';

function App() {
  
    return(
      <div className="container">
        <header>
          <strong>Portfólio</strong>
        </header>
          <Bio />
          <Projects />

        <footer className="column">
          <div>
          <p>Desenvolvido por Wagner Paulo</p>  
          </div>
       
        </footer>
      </div>
    );
}

export default App;
