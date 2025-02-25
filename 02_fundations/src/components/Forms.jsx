import { useState } from 'react';

const Forms = () => {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        // manipulacao de dados
        // validacao dos dados
        // envio do servidor
        // loading
        // chamada de funcoes
        event.preventDefault()

        console.log('form sent', value);

    }
  return (
    <form onClick={handleSubmit}>
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)} placeholder="Fill the void" />
        <button type='submit'>Click to change</button>
      
    </form>
  )
}

export default Forms
