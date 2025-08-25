
// 1 - Crie um componente FormularioLogin com campos para nome de usuário e senha. O componente deve utilizar o estado para armazenar os valores dos campos e lidar com a submissão do formulário exibindo um alerta com o nome de usuário e senha inseridos.

import { useState } from "react"

const FormularioLogin = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        
        alert(`Login successfuly by ${user} and his password is ${password}`);
    }

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="user">User</label>
            <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Submit</button>


    </form>
)
}

export default FormularioLogin
