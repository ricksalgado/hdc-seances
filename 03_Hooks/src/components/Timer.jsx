import {useState, useEffect} from 'react'

const Timer = () => {
    // Simular um relogio. A cada 1s, o componente re-renderiza para que seja mostrado na tela o novo numero
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);
        }, 1000 )

        // [] = array de dependencias vazio
    // Limpeza de status
    // sempre que tivermos uma acao continua (como o relogio), devemos sempre fazer a limpeza de dados

    return () => clearInterval(intervalID);
    }, [])


    return (
    <div>
        Timer: {segundos} segundos  
    </div>
  )
}

export default Timer
