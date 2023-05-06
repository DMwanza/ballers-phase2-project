import React, { useState } from "react";

function ItemForm({ games,onAddItem }) {
  const[form,setForm]=useState({
    home:"",
    away:"",
    conference:"",
    day:"",
    date:"",
    time:"",
    court:"",
    location:""

  })
  const [match, setNewMatch] = useState([]);
function handleSubmit(e){
  e.preventDefault()
  const itemData={
    home:form.home,
    away:form.away,
    conference:form.conference,
    day:form.day,
    date:form.date,
    time:form.time,
    court:form.court,
    location:form.location,
    isInCart:false
  }
  setNewMatch([...match,itemData])
  setForm({home:"",
  away:"",
  conference:"",
  day:"",
  date:"",
  time:"",
  court:"",
  location:""})
  fetch("http://localhost:4000/games",{
    method:'POST',
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify(itemData),

  })
  .then(res=>res.json())
  .then(newItem=>onAddItem(newItem))
  
}
const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setForm({ ...form, [name]: value });
  
};
  return (
    <form className="NewItem">
  <label>
    Home:
    <select
      name="home"
      value={form.home}
      onChange={handleChange}
    >
      <option value="">Choose a Team</option>
      {games.map((game) => (
        <option key={game.id} value={game.home}>
          {game.home}
        </option>
      ))}
    </select>
  </label>
  VS
  <label>
    Away:
    <select
      name="away"
      value={form.away}
      onChange={handleChange}
    >
      <option value="">Choose a Team</option>
      {games.map((game) => (
        <option key={game.id} value={game.away}>
          {game.away}
        </option>
      ))}
    </select>
  </label>
  <label>
    Conference:
    <input
      type="text"
      name="conference"
      value={form.conference}
      onChange={handleChange}
    />
  </label>
  <label>
    Day:
    <input
      type="text"
      name="day"
      value={form.day}
      onChange={handleChange}
    />
  </label>
  <label>
    Time:
    <input
      type="text"
      name="time"
      value={form.time}
      onChange={handleChange}
    />
  </label>
  <label>
    Court:
    <input
      type="text"
      name="court"
      value={form.court}
      onChange={handleChange}
    />
  </label>
  <label>
    Location:
    <input
      type="text"
      name="location"
      value={form.location}
      onChange={handleChange}
    />
  </label>
  <button type="submit" onClick={handleSubmit}>Add Match</button>
</form>

  );
}

export default ItemForm;
