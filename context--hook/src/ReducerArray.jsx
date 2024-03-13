import React, { useReducer, useState } from "react";

const ADname = () => {
  let [name, setName] = useState();
  const ReducerFunction = (state, action) => {
    switch (action.type) {
      case "ADD":
        if(action.payload !== " " ){
            setName("");
            return {
              names: [...state.names, action.payload],
            };
        }  
      case "DELETE":
        let filteredNames = state.names.filter((n) => n != action.payload);
        return {
          names: filteredNames,
        };
      case "FETCH":
        return {
          ...state,
        };
    }
  };

  const initalValue = { names: [] };
  
  let [state, dispatch] = useReducer(ReducerFunction, initalValue);
  return (
    <>
      Enter the Name:
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => dispatch({ type: "ADD", payload: name })}>Add</button>
      <br />
      {state.names.length > 0 ? (
        <p>
          {state.names.map((n) => 
            <div>
              {n}
              <button onClick={() => dispatch({ type: "DELETE", payload: n })}>
                Delete
              </button>
            </div>
          )}
        </p>
      ) : (
        "No Names Found"
      )}
    </>
  );
};

export default ADname;
