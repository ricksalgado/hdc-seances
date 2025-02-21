
const Descricao = (props) => {
    // props = {}
    // propriedades -> Chave dos valores
    // props.nome = Ricardo
  return (

    <div>
        <p>Seu nome é {props.nome} </p>
        <p>E vc tem {props.idade} anos de idade </p>
    </div>
  )
};


export default Descricao;
