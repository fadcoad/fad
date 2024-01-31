// src/components/Popup.js

import React from 'react';
import './Popup.css';  // Asegúrate de tener la ruta correcta

const Popup = ({ handleClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <iframe
          title="Fabricafad Web"
          src="https://www.youtube.com/embed/tmFaiuIcs6Y?si=WYs1xpzH7zkH9CT1"
          frameBorder="0"
        ></iframe>
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
