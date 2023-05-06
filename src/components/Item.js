import React from "react";

function Item({ game,onUpdateItem,onDeleteItem}) {
  function handleAddToCartClick(){
    fetch(`http://localhost:4000/games/${game.id}`,{
      method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isInCart:!game.isInCart
    })
    })
    .then((r) => r.json())
    .then((updatedItem) => onUpdateItem(updatedItem));
  }
  function handleDeleteClick() {
    fetch(`http://localhost:4000/games/${game.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => onDeleteItem(game));
  }
  return (
    <li className={game.isInCart ? "in-cart" : ""}>
      <span>{game.home}</span> VS <span>{game.away}</span> <span>{game.day}</span> <span>{game.date}</span> <span>{game.time}</span> <span>{game.court}</span> <span>{game.location}</span>
      <span className="category">{game.conference}</span>
      <button className={game.isInCart ? "remove" : "add"} onClick={handleAddToCartClick}>
        {game.isInCart ? "Played" : "Not Played"} 
      </button>
      <button className="remove" onClick={handleDeleteClick}>Delete</button>
    </li>
    
  );
}

export default Item;
