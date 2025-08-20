import './App.css'
import ContadorInterval from './Components/ContadorInterval'
import Counter from './Components/Counter'
import Greeting from './Components/Greeting'
import TextInput from './Components/TextInput'

function App() {


  return (
    <div>
      <h1>Shopfy React TS</h1>
      {/* 1 - functional component with TS */}
      <Greeting name="Printer's Parts" />
      {/* 2- Hooks com typos */}
      <Counter/>
      {/* 3 - Manipulation of events with types */}
      <TextInput />
      {/* 4 - Custom hooks com TS */}
      <ContadorInterval />
    </div>
  )
}

export default App
