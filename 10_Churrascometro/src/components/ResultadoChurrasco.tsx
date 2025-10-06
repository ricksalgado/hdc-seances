import { useLocation, useNavigate } from "react-router-dom";
import { nomesAlimentos, quantidadePessoas } from "../types";

import type { Alimentos } from "../types";

type ResultadoChurrasco = {
  pessoas: number;
  alimentosSelecionados: Alimentos[];
}

// const ResultadoChurrasco = () => {

//   const location = useLocation();
//   const navigate = useNavigate();

//   const state = location.state as ResultadoChurrasco;

//   const reiniciar = () => {
//     navigate("/")
//   }

//   return (
//     <div>
//       <h2>Resultado para {state.pessoas} pessoas:</h2>
//       {state.alimentosSelecionados.map((alimento) => (
//         <p key={alimento}>{nomesAlimentos[alimento]}: total kg</p>
//       ) )}
//       <button onClick={reiniciar}>Reiniciar</button>
//     </div>
//   )
// }

const ResultadoChurrasco = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as ResultadoChurrasco;

  const totalPorAlimento = state.alimentosSelecionados.reduce(
    (acc, alimento) => {
      acc[alimento] = (quantidadePessoas[alimento] * state.pessoas)/ 1000;

      return acc;

    }, {} as Record<Alimentos,number>
  )

  const reiniciar = () => {
    navigate('/')

  }
  return (<div>
    <h2>Resultado para {state.pessoas} pessoas:</h2>

    {Object.keys(nomesAlimentos).map((alimento) => (
      <p key={alimento}>{nomesAlimentos[alimento]}:{totalPorAlimento[alimento]} kg</p>

    ))}

    <button onClick={reiniciar}>Reset</button>
  </div>)


}

export default ResultadoChurrasco 
