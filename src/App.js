import React from 'react';
import './styles/App.css';

import Bio from './pages/Bio';
import Projects from './pages/Projects';

function App() {
  
    return(
      <div className="container">
        <header>
          <strong>Portfolio</strong>
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
