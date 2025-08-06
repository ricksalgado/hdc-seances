type GreetingsType = {
    name:string
}


const Greeting = ({ name }: GreetingsType) => {
  return (
    <div>
        <p>Hello {name}</p>
    </div>
  )
}

export default Greeting
