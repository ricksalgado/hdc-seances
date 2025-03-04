import './App.css'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ComponenteFilho from './components/ComponenteFilho'
import OnUseEffect from './components/OnUseEffect'
import Timer from './components/Timer'
import ValorDoContexto from './components/ValorDoContexto'

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
    </>
  )
}

export default App
