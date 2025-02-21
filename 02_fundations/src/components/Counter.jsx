// useState é basicamente um gerenciador de estado
import { useState } from "react";


const Counter = () => {
    // Desestruturando o useState: Ao criar a const, precisa-se de um array que gerencie os valores. Nesse array, os elementos serao responsaveis por [consultar, alterar] o valor
    
    const [count, setCount] = useState(0);
// variaveis nao re-renderizam o comnponente, o useState SIM

  return (
    <div>
        
        <p>Vc clicou {count} vezes </p>
        <button onClick={() => setCount(count + 1)}>Click</button>

    </div>
  )
}

export default Counter

// Nesse Caso, o count vai ser meu numero, o qual foi atribuido ZERO (0) no inicio pelo useState.
// Entao, ao colocar o botao, eu digo no codigo que quero que setCount seja o alterador do numero "count" e altere +1 sempre q clicado
// A pagina em si, nao existe alteracao. MAs, o "count" esta sendo re-renderizado, toda vez que disparo "setCount", pelo onClick
