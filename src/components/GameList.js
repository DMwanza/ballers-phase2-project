import React, { useState,useEffect } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function GameList() {
  const [team, setTeam] = useState("");
  const [games, setGames] = useState([]);
useEffect(()=>{
  fetch("http://localhost:4000/games")
  .then(res=>res.json()
  .then(games=>setGames(games)))
},[]
)
function handleUpdateItem(updatedItem) {
  const updatedItems=games.map((game)=>{
    if(game.id===updatedItem.id){
      return updatedItem
    }
    else{
      return game
    }
  })
  setGames(updatedItems)
  }
  function handleDeleteItem(deletedItem) {
    const updatedItems=games.filter((game)=>game.id!==deletedItem.id)
    setGames(updatedItems)
  }
function handleAddItem(newGame) {
  setGames([...games,newGame]);
}
  function handleCategoryChange(team) {
    setTeam(team);
  }

  const itemsToDisplay = games.filter((game) => {
    return game.home === team || game.away === team;
  });

  return (
    <div className="GameList">
      <Filter 
        games={games}
        team={team}
        onCategoryChange={handleCategoryChange}
        />
      <ul className="Items">
        {itemsToDisplay.map((game) => (
          <Item key={game.id} game={game} onUpdateItem={handleUpdateItem} onDeleteItem={handleDeleteItem}/>
          ))}
      </ul>
          <ItemForm onAddItem={handleAddItem}games={games}/>
    </div>
  );
}

export default GameList;
