
// src/components/DafButton.js
import './DafButton.css';
import React from 'react';

const DafButton = () => {
  const handleButtonClick4 = () => {
    window.open('https://fadfabricaartedisegno0.on.drv.tw/IA/?fbclid=IwAR3wwo1YQ1hkKMJ-_KfAqVOPIZ0vEt9QxxDCxgzOWuvRKBiHnBmya3hl7Y8', '_blank');
  };

  return (
    <button className="Daf-button" onClick={handleButtonClick4}>

    </button>
  );
};

export default DafButton;
