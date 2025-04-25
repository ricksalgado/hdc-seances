import './App.css'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ComponenteFilho from './components/ComponenteFilho'
import OnUseEffect from './components/OnUseEffect'
import Timer from './components/Timer'
import ValorDoContexto from './components/ValorDoContexto'
import Contador from './components/Contador'
import Basket from './components/Basket'
import DisplayWindowSite from './components/DisplayWindowSite'
import Container from './components/Container'
import Box from './components/Box'
import UserProfile from './components/UserProfile'
import HeavyCalc from './components/HeavyCalc'
import ContadorCallback from './components/ContadorCallback'
import Exercices from './components/Exercices'

function App() {

  return (
    <>
      {/* 3.1 - useEffect */}
      <OnUseEffect/>
      <Timer/>
      {/* 3.2 - useContext */}
      {/* aplicacoes de pequenop e medio porte, que precisam transferir o estado entre componentes */}
      <MeuContextoProvider>
        <ComponenteFilho/>
        <ValorDoContexto/>
      </MeuContextoProvider>
      {/* 3.3 - useReducer */}
      {/* igual useState mas com estados mais complexos */}
      <Contador/>
      <Basket/>
      {/* 3.4 - custom hook */}
      <DisplayWindowSite />
      {/* 3.5 - Slots e children props */}
      <Container>
        <h1>Titulo da sessao</h1>
        <p>Este eh o meu subtitulo</p>
      </Container>
      {/* MEU EXEMPLO DE CHILDREN */}
      <Box type=''>Cadastre-se</Box>
      <Box type='success'>Cadastro Realizado</Box>
      <Box type='error'>Cadastro nao realizado</Box>
      {/* 3.6 - Sincronizar o estado com props */}
      {/* prop => componente => Chamada de API => Resulta em um dado */}
      <UserProfile userID={1}/>
      <UserProfile userID={2}/>
      {/* 3.7 - useMemo and useCallback */}
      <HeavyCalc number={5}/>
      <ContadorCallback></ContadorCallback>
      {/* 3.8 - Exercices */}
      <Exercices/>

    </>
  )
}

export default App




