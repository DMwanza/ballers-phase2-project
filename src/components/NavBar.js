import React from "react";
function NavBar({onChangePage}){
  function handleLinkClick(e){
    e.preventDefault()
    onChangePage(e.target.pathname)
  }
  return (
    <nav>
     
    </nav>
  )
}
export default NavBar