import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import Home from "./Home"
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
              <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Searchgame" element={<AllGames />} />
      </Routes>
      
    </div>
  );
}

export default App;
