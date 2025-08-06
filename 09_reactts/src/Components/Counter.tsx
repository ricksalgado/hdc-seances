import { useEffect, useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        console.log(`The value of this counter is now: ${count} `)
    } , [count])

    return (
        <div>
            <p>The Value is { count }</p>
            <button onClick={() => setCount((prevCount) => prevCount +1 ) } >Add</button>
        </div>
    )
}

export default Counter
