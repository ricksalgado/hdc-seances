import React from "react";
import { useEffect } from "react";


// - Exercício 1: Uso de useEffect para Sincronização de Dados
// Enunciado:
// Você precisa exibir informações de um usuário que são recebidas via props em um componente.
// Crie um componente que use o hook useEffect para sincronizar as informações do usuário com o título do documento (o título da aba no navegador).

const Escalacao = ({jogador}) => {


    
    useEffect(() => {
        document.title = jogador.name;
    }, [jogador]);
    

    return (
        <div>
            <h1>Exercices</h1>
            <h2>Exercicio 1</h2>
            <p>Props Jogador: {jogador.name}</p>
            <p>O Jogador é um: {jogador.posicao}</p>
            <p>Title da pagina é: {document.title} </p>

        </div>
    );

}



const Exercices = () => {

    const palmeiras = {
        name: "Estevao",
        posicao: "Atacante"
    }

    return(
        <Escalacao jogador={palmeiras} />
    )

};

export default Exercices;


// - Exercício 2: Memorizando Cálculos com useMemo
// Enunciado:
// Suponha que você tenha um componente que realiza um cálculo pesado, como uma função de fibonacci que é chamada com um número específico.
// Use o hook useMemo para evitar que o cálculo seja refeito desnecessariamente.





// - Exercício 3: Criação e Uso de um Custom Hook
// Enunciado:
// Crie um custom hook chamado useOnlineStatus que rastreia se o usuário está online ou offline.
// Use este hook em um componente para exibir o status atual do usuário.