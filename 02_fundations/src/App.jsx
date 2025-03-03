import "./App.css";
import Bomdia from "./components/Bomdia";
import BotaoAzul from "./components/BotaoAzul";
import BotaoEstilizado from "./components/BotaoEstilizado";
import Button from "./components/Button";
import Cachorro from "./components/Cachorro";
import Counter from "./components/Counter";
import CounterEx from "./components/CounterEx";
import Descricao from "./components/Descricao";
import Forms from "./components/Forms";
import Greetings from "./components/Greetings";
import LoginBtn from "./components/LoginBtn";
import Meunome from "./components/Meunome";
import NumberList from "./components/NumberList";
import Pai from "./components/Pai";
import PaiFunction from "./components/PaiFunction";
import RenderCondicional from "./components/RenderCondicional";
import TaskList from "./components/TaskList";
import UserInfoForm from "./components/UserInfoForm";
import Warning from "./components/Warning";
import Welcome from "./components/Welcome";

function App() {
const excercicesTasks = [  { id:1, text: "Trabalhar" },  { id:2, text: "Estudar React" },  { id:3, text: "Ser Muito Rico" }];


  return (
    <>
      {/* 6.1 - Criacao de componentes */}
      <Welcome />
      <Meunome />
      {/* 6.2 - Expressoes do JSX */}
      <Bomdia />
      {/* 6.3 - Componente dentro de componente */}
      <Pai />
      {/* 6.4 - Props */}
      <Descricao nome="Xirigutago" idade={34} />
      {/* 6.5 - Desestruturacao de Props */}
      <Cachorro nome={"Chewie"} raca={"Lhasa-Apso"} />
      {/* 6.6 - useState - Hook */}
      <Counter />
      {/* 6.7 - multiplos Estados */}
      <UserInfoForm />
      {/* 6.8 - Events */}
      <Button />
      {/* 6.9 - Passando funcoes de manipulacao de eventos como props */}
      <PaiFunction />
      {/* 6.10 - Eventos de Form */}
      <Forms />
      {/* 6.11 - Renderizacao condicional */}
      <RenderCondicional user={"Rick"} />
      {/* 6.12 - Expressao ternaria */}
      <LoginBtn loggedIn={false} />
      <LoginBtn loggedIn={true} />
      {/* 6.13 - Render Nulo */}
      <Warning warning={true} />
      {/* 6.14 - Listas Chaves */}
      <NumberList numbers={[1, 2, 3, 4, 5, 6]} />
      {/* 6.15 - Estilos por atributos */}
      <BotaoEstilizado />
      {/* 6.16 - Estilos globais */}
      <BotaoAzul />
      {/* 6.17 - Exercices */}
      <div>
        <Greetings name={"Rick"} />
      </div>
      <CounterEx />
      <TaskList tasks={excercicesTasks}/>
    </>
  );
}

export default App;
