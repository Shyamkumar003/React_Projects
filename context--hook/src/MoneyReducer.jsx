import React, { useReducer, useState } from "react";

const MoneyReducer = () => {
  let [withDraw, setWithDraw] = useState(0);
  let [deposit, setDeposit] = useState(0);

  const ReducerFunction = (state, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
      case "DEPOSIT":
        setDeposit(0)
        return {
          ...initialValue,
          money: state.money + Number(action.payload),
        };
      case "WITHDRAWL":
        setWithDraw(0)
        return {
          ...initialValue,
          money: state.money - Number(action.payload),
        };
      case "RESET":
        setDeposit(0)
        setWithDraw(0)
        return {
          ...initialValue,
          money: 0,
        }
      default:
        return { ...initialValue, money: state.money };
    }
  };

  let initialValue = {
    name: "",
    accNo: "",
    money: 0,
  };

  let [state, dispatch] = useReducer(ReducerFunction, initialValue);
  return (
    <>
      Enter the name: <input type="text" />
      <br />
      Enter the account number: <input type="text" />
      <br />
      Deposit amount:
      <input
        type="number" value={deposit}
        onChange={(e) => setDeposit(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "DEPOSIT", payload: deposit })}>Deposit</button> <br />
      Withdrawl amount:
      <input
        type="number" value={withDraw}
        onChange={(e) => setWithDraw(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "WITHDRAWL", payload: withDraw })}>Withdraw</button> <br />
      Available Balance: <h1>{state.money}</h1><br />
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </>
  );
};

export default MoneyReducer;
