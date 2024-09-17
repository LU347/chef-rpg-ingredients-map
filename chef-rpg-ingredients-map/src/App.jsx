import Map from './Map.jsx';
import gameMap from './assets/chef-rpg-map.webp'
import './App.css'

function App() {
  return (
    <>
      <img className="chef-rpg-map" src={gameMap} alt="Map of ChefRPG"></img>
      <Map />
    </>
  )
}

export default App
