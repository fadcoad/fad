// src/components/StarButton.js
import './StarButton.css';  
import React, { useState } from 'react';
import Popup from './Popup';

const StarButton = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <button className="star-button" onClick={handleButtonClick}>
        STAR
      </button>
      {popupOpen && <Popup handleClose={handleClosePopup} />}
    </>
  );
};

export default StarButton;
