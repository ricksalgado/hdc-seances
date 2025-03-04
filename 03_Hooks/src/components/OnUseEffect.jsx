import { useState } from "react";
import { useEffect } from "react";

const OnUseEffect = () => {
    // executar algo, baseado em algo
    // a mudanca de um valor, carregamento da pagina 

    useEffect(() => {
        document.title = `Voce clicou ${contador} vezes`
    });

    const [contador, setContador] = useState(0)

  return (
    <div>
      <p>Voce clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
      <button onClick={() => setContador(contador - 1)}>-1</button>

    </div>
  )
}

export default OnUseEffect
