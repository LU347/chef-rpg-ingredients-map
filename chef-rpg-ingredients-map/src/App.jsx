import { Analytics } from "@vercel/analytics/react"
import MapComponent from './MapComponent.jsx';
import './App.css'

function App() {
  return (
    <div id="app">
      <MapComponent />
      <Analytics />
    </div>
  )
}

export default App
