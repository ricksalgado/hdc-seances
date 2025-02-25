import './App.css'
import Bomdia from './components/Bomdia'
import Button from './components/Button'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import Descricao from './components/Descricao'
import Meunome from './components/Meunome'
import Pai from './components/Pai'
import PaiFunction from './components/PaiFunction'
import UserInfoForm from './components/UserInfoForm'
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
      {/* 6.6 - useState - Hook */}
      <Counter />
      {/* 6.7 - multiplos Estados */}
      <UserInfoForm/>
      {/* 6.8 - Events */}
      <Button />
      {/* 6.9 - Passando funcoes de manipulacao de eventos como props */}
      <PaiFunction/>
    </>
  )
}

export default App
