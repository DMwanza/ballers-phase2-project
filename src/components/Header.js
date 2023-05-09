import React from "react";
import logo1 from '../images/logo1.jpg'
function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <img src={logo1} className="img"/>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
