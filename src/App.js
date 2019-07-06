import React from 'react';
import './assets/css/style.css';
import jiros from './assets/js/heroes';
import HeroTable from './components/HeroTable';

function App() {
  return (
    <div className="index">
      <h2>Fellowship of the Ring</h2>
      <div className={'container'}>
        <HeroTable arreglo={jiros}/>
      </div>
    </div>
  );
}

export default App;
