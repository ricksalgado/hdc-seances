import { useState } from "react";

const CounterEx = () => {

    const [count, setCount] = useState(0);


  return (
    <div>
        <button onClick={()=> setCount(count + 1)}>Counter +1</button>
        <button onClick={()=> setCount(count - 1)}>Counter -1</button>
        <p>You have pressed Counter {count} times </p>
    </div>
  )
}

export default CounterEx
