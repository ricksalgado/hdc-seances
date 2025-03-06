import './App.css'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ComponenteFilho from './components/ComponenteFilho'
import OnUseEffect from './components/OnUseEffect'
import Timer from './components/Timer'
import ValorDoContexto from './components/ValorDoContexto'
import Contador from './components/Contador'
import Basket from './components/Basket'

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
      
    </>
  )
}

export default App
