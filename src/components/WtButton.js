// src/components/WtButton.js
import './WtButton.css';
import React from 'react';

const WtButton = () => {
  const handleButtonClick3 = () => {
    window.open('http://whatsappfad.22web.org/', '_blank');
  };

  return (
    <button className="Wt-button" onClick={handleButtonClick3}>
      
    </button>
  );
};

export default WtButton;
