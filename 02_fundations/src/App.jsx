import './App.css'
import Bomdia from './components/Bomdia'
import Meunome from './components/Meunome'
import Pai from './components/Pai'
import Welcome from './components/Welcome'

function App() {

  return (
    <>
      {/* 6.1 - Criacao de componentes */}
      <Welcome />
      <Meunome />
      {/* 6.2 - Expressoes do JSX */}
      <Bomdia/>
      {/* 6.3 - Componente dentro de componente */}
      <Pai />
      {/* 6.4 - Props */}
    </>
  )
}

export default App
