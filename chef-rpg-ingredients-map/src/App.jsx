import { Analytics } from "@vercel/analytics/react"

import Map from './Map.jsx';
import './App.css'

function App() {
  return (
    <div id="app">
      <Map />
      <Analytics />
    </div>
  )
}

export default App
