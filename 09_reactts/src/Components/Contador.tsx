import { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer'

const Contador = () => {

    const [count, dispatch] = useReducer(counterReducer, 0)

    return (
        <div>
            <h3>Counter</h3>
            <p>The new prince is $ {count} </p>
            <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
            <button onClick={() => dispatch({ type: "double" })}>Double</button>
            <button onClick={() => dispatch({ type: "half" })}>Half</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}

export default Contador
