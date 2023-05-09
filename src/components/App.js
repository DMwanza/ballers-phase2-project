import React, { useState } from "react";
import {Switch,Route} from 'react-router-dom'
import ShoppingList from "./GameList";
import Header from "./Header";
<<<<<<< HEAD
import ItemForm from "./ItemForm";
import Item from "./Item";
import NavBar from "./NavBar";
import GameList from "./GameList";
=======
import Home from "./Home"
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";

>>>>>>> origin/main

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const[page,setPage]=useState("/")
  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }
  function getCurrentPage(){
    switch(page){
      case "/":
        return <Header/>
        case "/itemForm":
        return <ItemForm/>
        case "/item":
        return <Item/>
        default:
          return <h1>404 not found</h1>
    }
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
<<<<<<< HEAD
      <NavBar onChangePage={setPage}/>
      <GameList />
=======
              <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Searchgame" element={<AllGames />} />
      </Routes>
      
>>>>>>> origin/main
    </div>
  );
}
export default App;
