import { useContext } from 'react'
import { TemaContext } from '../Context/TemaContext'

const BarraFerramentas = () => {

    const contextoTema = useContext(TemaContext);

    if (!contextoTema){
        return null;
    }

    return (
        <div style={{background: contextoTema.tema === "claro" ? '#fff' : '#000', color: contextoTema.tema === "claro" ? "#000" : "#fff"}}>
            <h3>Context</h3>
            <button onClick={contextoTema?.alterarTema} >Change theme</button>
            <p>Fim do context</p>
        </div>
    )
}

export default BarraFerramentas
