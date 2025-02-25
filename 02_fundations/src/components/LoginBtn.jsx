import BotaoDeEntrar from "./BotaoDeEntrar"
import BotaoDeSair from "./BotaoDeSair"

const LoginBtn = ({loggedIn}) => {
    // entrar -> Deslogado
    // sair -> Logado

  return (
    <div>
        {loggedIn ? <BotaoDeSair/> : <BotaoDeEntrar/>}
    </div>
  );
};

export default LoginBtn
