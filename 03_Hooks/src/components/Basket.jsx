import { useReducer } from 'react'

const teamScore = {score: 0};

function basketScore(state, action){
    switch(action.type){
        case "freeThrow":
            return { score: state.score +1 };
        case "score":
            return { score: state.score +2 };
        case "3pts":
            return { score: state.score +3 };
        case "reset":
            return { score: 0 };
        default:
            throw new Error("not supported");

    }
}

const Basket = () => {
    const [estado, dispatch] = useReducer(basketScore, teamScore);

  return (
    <div>
      <section>
        <h2>Team A</h2>
        <p>Score: {estado.score}</p>
        <button onClick={() => dispatch({type: "score"})}>Score</button>
        <button onClick={() => dispatch({type: "freeThrow"})}>Free Throw</button>
        <button onClick={() => dispatch({type: "3pts"})}>3 points</button>
        <button onClick={() => dispatch({type: "reset"})}>Reset</button>
      </section>
      <section>
        <h2>Team B</h2>
        <p>Score: {estado.score}</p>
        <button onClick={() => dispatch({type: "score"})}>Score</button>
        <button onClick={() => dispatch({type: "freeThrow"})}>Free Throw</button>
        <button onClick={() => dispatch({type: "3pts"})}>3 points</button>
        <button onClick={() => dispatch({type: "reset"})}>Reset</button>
      </section>
    </div>
  )
}

export default Basket
