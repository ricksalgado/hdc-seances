import './App.css'
import Bomdia from './components/Bomdia'
import Cachorro from './components/Cachorro'
import Descricao from './components/Descricao'
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
      <Descricao nome="Xirigutago" idade={34} />
      {/* 6.5 - Desestruturacao de Props */}
      <Cachorro nome={"Chewie"} raca={"Lhasa-Apso"}/>
    </>
  )
}

export default App
