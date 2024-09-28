import { Analytics } from "@vercel/analytics/react"
import MapComponent from './MapComponent.jsx';
import './App.css'
import Sidebar from './Sidebar.jsx';

function App() {
  return (
    <div id="app">
      <Sidebar />
      <MapComponent />
      <Analytics />
    </div>
  )
}

export default App
