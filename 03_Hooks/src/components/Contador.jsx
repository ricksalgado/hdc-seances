import { useReducer } from "react";

// Definicao do estado inicial
const estadoInicial = { contador: 0 };

// Funcao reducer que define como as acoes atualizam o estado
function reducer(estado, acao) {
  switch (acao.tipo) {
    case "add":
      return { contador: estado.contador + 1 };
    case "subtraction":
      return { contador: estado.contador - 1 };
    case "reset":
      return { contador: 0 };
    default:
      throw new Error("Action not supported");
  }
}

const Contador = () => {
    const [estado, dispatch] = useReducer(reducer, estadoInicial);

    return (
        <div>
            <p>Contagem: {estado.contador}</p>
            <button onClick={() => dispatch({tipo: "add"})}>+ 1</button>
            <button onClick={() => dispatch({tipo: "subtraction"})}>- 1</button>
            <button onClick={() => dispatch({tipo: "reset"})}>reset</button>
        </div>
    );
};

export default Contador;
