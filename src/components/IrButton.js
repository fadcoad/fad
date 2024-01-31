// src/components/IrButton.js
import './IrButton.css';
import React from 'react';

const IrButton = () => {
  const handleButtonClick2 = () => {
    window.open('http://fabricafad.22web.org/', '_blank');
  };

  return (
    <button className="Ir-button" onClick={handleButtonClick2}>
      IR
    </button>
  );
};

export default IrButton;
