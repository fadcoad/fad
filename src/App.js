// src/App.js

import React from 'react';
import logoImage from './logo.svg';
import linesImage from './poster.webp';
import IrButton from './components/IrButton';
import StarButton from './components/StarButton';
import WtButton from './components/WtButton';
import DafButton from './components/DafButton';
import './App.css'; // Puedes importar estilos globales si es necesario

function App() {
  return (
<>
<div className="lin">
</div>
  <div className="web">
   <img src={linesImage} alt="LINEA INDUSTRIAL" className="ban" />
 </div>
    <div className="app">
        <h1> FAD - Fabrica, Arte y Diseño </h1>
      <StarButton />
        <br /> <br />
      <IrButton />
        <br /> <br />
        <p> Somos una empresa de diseño y desarrollo de productos </p>
    </div>
<img src={logoImage} alt="Logo" />
<WtButton />
<div className="lin">
    <WtButton />
    <DafButton />
</div>
</>
    
  );
}

export default App;
