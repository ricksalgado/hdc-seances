import React, { useState, useEffect, useMemo } from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";

// - Exercício 1: Uso de useEffect para Sincronização de Dados
// Enunciado:
// Você precisa exibir informações de um usuário que são recebidas via props em um componente.
// Crie um componente que use o hook useEffect para sincronizar as informações do usuário com o título do documento (o título da aba no navegador).

const Escalacao = ({ jogador }) => {
  const title = document.title;

  useEffect(() => {
    document.title = jogador.name;
  }, [jogador]);

  return (
    <div>
      <h1>Shopify zecicios</h1>
      <h2>Exercicio 1</h2>
      <p>Props Jogador: {jogador.name}</p>
      <p>O Jogador é um: {jogador.posicao}</p>
      <p>Title da pagina é: {title} </p>
    </div>
  );
};

// - Exercício 2: Memorizando Cálculos com useMemo
// Enunciado:
// Suponha que você tenha um componente que realiza um cálculo pesado, como uma função de fibonacci que é chamada com um número específico.
// Use o hook useMemo para evitar que o cálculo seja refeito desnecessariamente.

const Fibo = () => {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(1);

  const result = useMemo(() => {
    return num1 + num2;
  }, [num1, num2]);

  let calcRender = () => {
    setNum1(num2);
    setNum2(result);
  };

  return (
    <div>
      <h2>Fibonacci Sequence</h2>
      <p>
        Current: {num1} and {num2}
      </p>
      <p>Next number is: {result}</p>
      <button onClick={calcRender}>Next Number</button>
    </div>
  );
};

// - Exercício 3: Criação e Uso de um Custom Hook
// Enunciado:
// Crie um custom hook chamado useOnlineStatus que rastreia se o usuário está online ou offline.
// Use este hook em um componente para exibir o status atual do usuário.

const Connected = () => {
  const isOnline = useOnlineStatus();

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: isOnline ? "lightgreen" : "salmon",
        color: "#333",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      You are {isOnline ? "Online ✅" : "Offline ❌"}
    </div>
  );
};

// Renderiza a pg
const Exercices = () => {
  const palmeiras = {
    name: "Estevao",
    posicao: "Atacante",
  };

  return (
    <div>
      <Escalacao jogador={palmeiras} />
      <Fibo />
      <Connected />
    </div>
  );
};

export default Exercices;
