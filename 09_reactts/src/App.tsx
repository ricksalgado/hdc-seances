import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Components/Greeting'

function App() {


  return (
    <div>
      <h1>Shopfy React TS</h1>
      {/* 1 - functional component with TS */}
      <Greeting name="Printer's Parts" />
    </div>
  )
}

export default App
