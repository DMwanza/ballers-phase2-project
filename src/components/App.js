import React, { useState } from "react";
import {Switch,Route} from 'react-router-dom'
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import ItemForm from "./ItemForm";
import Item from "./Item";
import NavBar from "./NavBar";


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
      <NavBar onChangePage={setPage}/>
      <ShoppingList />
    </div>
  );
}
export default App;
