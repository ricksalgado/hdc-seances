const Greetings = ({ name }) => {
    if(!name){
        return <p>Nobody!</p>
    }
  return (
    <p>
       Hello, {name}! 
    </p>
  )
}

export default Greetings
