import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculadora from "./pages/Calculadora";
import Resultado from "./pages/Resultado";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Calculadora /> } />
      <Route path="/resultado" element={ <Resultado /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
