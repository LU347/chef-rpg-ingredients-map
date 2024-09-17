import { useState } from 'react'
import Sidebar from './Sidebar.jsx';
import gameMap from './assets/chef-rpg-map.webp'
import './App.css'

function App() {
  return (
    <>
      <img className="chef-rpg-map" src={gameMap} alt="Map of ChefRPG"></img>
      <Sidebar />
    </>
  )
}

export default App
