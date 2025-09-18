import './App.css'
import Contador from './Components/Contador'
import ContadorInterval from './Components/ContadorInterval'
import Counter from './Components/Counter'
import Exercices from './Components/Exercices'
import Greeting from './Components/Greeting'
import TextInput from './Components/TextInput'
import BarraFerramentas from './Components/BarraFerramentas'
import { TemaProvider } from './Context/TemaContext'

function App() {


  return (
    <div>
      <h1>Shopfy React TS</h1>
      {/* 1 - functional component with TS */}
      <Greeting name="Printer's Parts" />
      {/* 2- Hooks com typos */}
      <Counter />
      {/* 3 - Manipulation of events with types */}
      <TextInput />
      {/* 4 - Custom hooks com TS */}
      <ContadorInterval />
      {/* 5 - Exercicios */}
      <Exercices />
      {/* 6 - useReducer TS */}
      <Contador />
      {/* 7 - Context API with TS */}
      <TemaProvider>
        <BarraFerramentas />
      </TemaProvider>
    </div>
  )
}

export default App
