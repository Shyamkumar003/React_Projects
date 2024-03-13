import React, { useReducer, useState } from "react";

const Reducer1 = () => {
    let[pay, setPay] = useState(0)
    const handleChange = (e) => {
        console.log(e);
        setPay(e);
    }
  const ReducerFunction = (state, action) => {
    console.log(state);
    console.log(action);
    console.log(pay);
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count++ };
      case "DECREMENT":
        return { count: state.count-- };
      case "RESET":
        setPay(0)
        return { count: 0 };
      case "INCREMENTBY100":
        return { count: state.count + Number(action.payload) };
      case "DECREMENTBY100":
        return { count: state.count - Number(action.payload) };
      default:
        return { count: state.count };
    }
  };

  let [state, dispatch] = useReducer(ReducerFunction, { count: 0 });
  return (
    <>
      <input type="number" value={pay} onChange={(e) => handleChange(e.target.value)}/>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "DECREMENTBY100", payload: pay })}>
        Decrease by {pay}
      </button><br></br><br></br>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET"})}>reset</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button><br></br><br></br>
      <button onClick={() => dispatch({ type: "INCREMENTBY100", payload: pay })}>
       Increase By  {pay}
      </button>
    </>
  );
};

export default Reducer1;
