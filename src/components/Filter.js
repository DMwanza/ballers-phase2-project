import React from "react";

function Filter({games,team, onCategoryChange }) {
  

  return (
    <div className="Filter">
      <select
        name="filter"
        value={team}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">Check Your Team</option>
        {games.map((game) => (
          <option key={game.id} value={game.home}>
            {game.home}
          </option>
        ))}
      </select>
    </div>

    
  );
}

export default Filter;
