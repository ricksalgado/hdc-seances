import { useEffect, useState } from "react"
import FormularioLogin from "./FormularioLogin"
import ListaDeCompras from "./ListaDeCompras"



const Exercices = () => {


    // 1 - Crie um componente FormularioLogin com campos para nome de usuário e senha. O componente deve utilizar o estado para armazenar os valores dos campos e lidar com a submissão do formulário exibindo um alerta com o nome de usuário e senha inseridos.


    // 2 - Crie um componente ListaDeCompras que permita adicionar itens a uma lista de compras. O componente deve conter um input para inserir o nome do item e um botão para adicionar o item à lista. A lista de itens deve ser renderizada abaixo do formulário de adição.


    // 3 - Crie um hook customizado useLocalStorage que permita armazenar e recuperar um valor do local storage do navegador. O hook deve aceitar uma chave de local storage e o valor inicial.

    function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
        const [storedValue, setStoredValue] = useState<T>(() => {
            try {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue;
            } catch (error) {
                console.log(error);
                return initialValue;
            }

        })
            const setValue = (value: T) => {
                try {
                    setStoredValue(value);
                    window.localStorage.setItem(key, JSON.stringify(value));
                } catch (error) {
                    console.log(error)

                }
            };
            
            useEffect(() => {
                setValue(storedValue);
            }, [])
            
            return [storedValue, setValue]
    }

    // function useLocalStorage<T>(key: string,initialValue: T): [T, (value: T) => void] {
    //     const [storedValue, setStoredValue] = useState<T>(() => {
    //       try {
    //         const item = window.localStorage.getItem(key);
    //         return item ? JSON.parse(item) : initialValue;
    //       } catch (error) {
    //         console.log(error);
    //         return initialValue;
    //       }
    //     });
    
    //     const setValue = (value: T) => {
    //       try {
    //         setStoredValue(value);
    //         window.localStorage.setItem(key, JSON.stringify(value));
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     };
    
    //     useEffect(() => {
    //       setValue(storedValue);
    //     }, []);
    
    //     return [storedValue, setValue];
    //   }

    const [nome, setNome] = useLocalStorage("nome", "")

    return (
        <div>

            <h1>Exercices</h1>
            <h2>1</h2>
            <FormularioLogin />

            <h2>2</h2>
            <ListaDeCompras />

            <h2>3</h2>
            <div>
                
                <input id="name" type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
                <p>O nome armazenado é: {nome} </p>
            </div>

        </div>


    )
}

export default Exercices
