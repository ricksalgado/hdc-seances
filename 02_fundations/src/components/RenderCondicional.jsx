const RenderCondicional = ({user}) => {

    // se houver user, exiba msg de boas vindas

  return (
    <div>
        {user && <h2>Bem vindo de volta, {user}!</h2>}
    </div>
  )
}

export default RenderCondicional;
