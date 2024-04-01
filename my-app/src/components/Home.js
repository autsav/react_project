import React from 'react'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
    <h1>Welcome to the Home Page</h1>
    <Link to="/about">About</Link>
    <br></br>
    <Link to="/contact">Contact</Link>
    <br></br>
    <Link to="/movie">Movie</Link>
    <br></br>

    <Link to="/contact">Contact</Link>
    <br></br>
    <Link to="/packingList">PackingList</Link>
    <br></br>
    <Link to="/drinkList">DrinkList</Link>
    <br></br>
    <Link to="/renderingList">Rendering List</Link>
    <br></br>
    <Link to="/keepingComponentClear">Keeping Component Pure </Link>
    <br></br>
    <Link to="/addingInteractivity">Adding Interactivity </Link>
    
  </div>
  )
}

export default Home