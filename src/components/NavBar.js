import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  borderRadius: "20px",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      {/* <NavLink
        to="/addgame"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        AddGame
      </NavLink> */}
      <NavLink
        to="/searchgame"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Search
      </NavLink>
    </div>
  );
}

export default NavBar;
