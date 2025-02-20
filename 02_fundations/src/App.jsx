import './App.css'
import Bomdia from './components/Bomdia'
import Meunome from './components/Meunome'
import Welcome from './components/Welcome'

function App() {

  return (
    <>
      {/* 6.1 - Criacao de componentes */}
      <Welcome />
      <Meunome />
      {/* 6.2 - Expressoes do JSX */}
      <Bomdia/>
    </>
  )
}

export default App
